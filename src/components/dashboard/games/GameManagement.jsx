cd import React, { useState, useEffect, useCallback, useRef } from 'react';
import config from '../../../config';
import './gameManagement.css';

const GameManagement = () => {
    const [gamePages, setGamePages] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const nextIdRef = useRef(1);

    // Generate stable unique IDs
    const generateId = useCallback(() => {
        return `item-${nextIdRef.current++}`;
    }, []);

    // Generate slug from title
    const generateSlug = useCallback((title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }, []);

    // État du formulaire avec des IDs uniques pour les éléments de tableau
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        subtitle: '',
        description: '',
        tags: 'Action | PC',
        thumbnailImage: '',
        logoImage: '',
        splashImage: '',
        youtubeVideoId: '',
        trailerVideo: '',
        steamUrl: '',
        itchioUrl: '',
        websiteUrl: '',
        controlsImage: '',
        keyMechanics: [{ id: 'mechanic-1', value: '' }],
        galleryImages: [{ id: 'gallery-1', url: '', title: '', alt: '' }],
        gameplayVideos: [{ id: 'video-1', url: '', description: '' }],
        sections: [{ id: 'section-1', type: 'text', title: '', content: '', position: 'left', order: 0 }],
        isPublished: false,
        showInMenu: true,
        menuOrder: 0
    });

    // Charger les pages de jeux
    const fetchGamePages = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${config.api.baseUrl}/dashboard/getGamePages`);
            const data = await response.json();
            if (response.ok) {
                setGamePages(Array.isArray(data) ? data : []);
                setIsInitialized(true);
            } else {
                setMessage('Erreur lors du chargement des pages de jeux');
                setGamePages([]);
            }
        } catch (error) {
            console.error('Erreur:', error);
            setMessage('Erreur de connexion au serveur');
            setGamePages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGamePages();
    }, [fetchGamePages]);

    // Gérer les changements du formulaire
    const handleInputChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => {
            const newData = {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            };
            
            // Auto-generate slug when title changes
            if (name === 'title' && value) {
                newData.slug = generateSlug(value);
            }
            
            return newData;
        });
    }, [generateSlug]);

    // Gérer les arrays avec des IDs uniques
    const handleArrayChange = useCallback((arrayName, itemId, field, value) => {
        setFormData(prev => {
            const newArray = prev[arrayName].map(item => {
                if (item.id === itemId) {
                    if (field === 'value') {
                        // Pour keyMechanics qui ont une structure { id, value }
                        return { ...item, value: value };
                    } else {
                        // Pour les autres objets
                        return { ...item, [field]: value };
                    }
                }
                return item;
            });
            return {
                ...prev,
                [arrayName]: newArray
            };
        });
    }, []);

    const addArrayItem = useCallback((arrayName, defaultItem) => {
        const newItem = {
            ...defaultItem,
            id: generateId()
        };
        setFormData(prev => ({
            ...prev,
            [arrayName]: [...prev[arrayName], newItem]
        }));
    }, [generateId]);

    const removeArrayItem = useCallback((arrayName, itemId) => {
        setFormData(prev => ({
            ...prev,
            [arrayName]: prev[arrayName].filter(item => item.id !== itemId)
        }));
    }, []);

    // Réinitialiser le formulaire
    const resetForm = useCallback(() => {
        setSelectedGame(null);
        setIsEditing(false);
        setMessage('');
        setFormData({
            title: '',
            slug: '',
            subtitle: '',
            description: '',
            tags: 'Action | PC',
            thumbnailImage: '',
            logoImage: '',
            splashImage: '',
            youtubeVideoId: '',
            trailerVideo: '',
            steamUrl: '',
            itchioUrl: '',
            websiteUrl: '',
            controlsImage: '',
            keyMechanics: [{ id: generateId(), value: '' }],
            galleryImages: [{ id: generateId(), url: '', title: '', alt: '' }],
            gameplayVideos: [{ id: generateId(), url: '', description: '' }],
            sections: [{ id: generateId(), type: 'text', title: '', content: '', position: 'left', order: 0 }],
            isPublished: false,
            showInMenu: true,
            menuOrder: 0
        });
        setRefreshKey(prev => prev + 1); // Force le re-render
    }, [generateId]);

    // Sauvegarder la page de jeu
    const handleSave = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Transformer les données pour le serveur (retirer les IDs temporaires)
            const dataToSend = {
                ...formData,
                keyMechanics: formData.keyMechanics.map(item => item.value || item),
                galleryImages: formData.galleryImages.map(({ id, ...item }) => item),
                gameplayVideos: formData.gameplayVideos.map(({ id, ...item }) => item),
                sections: formData.sections.map(({ id, ...item }) => item)
            };

            const url = selectedGame 
                ? `${config.api.baseUrl}/dashboard/updateGamePage/${selectedGame._id}`
                : `${config.api.baseUrl}/dashboard/createGamePage`;
            
            const method = selectedGame ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            });

            const data = await response.json();
            if (data.success) {
                setMessage(selectedGame ? 'Page mise à jour avec succès' : 'Page créée avec succès');
                await fetchGamePages();
                resetForm();
                setRefreshKey(prev => prev + 1); // Force le re-render
            } else {
                setMessage(data.message || 'Erreur lors de la sauvegarde');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setMessage('Erreur de connexion au serveur');
        } finally {
            setLoading(false);
        }
    }, [selectedGame, formData, fetchGamePages, resetForm]);

    // Supprimer une page de jeu
    const handleDelete = useCallback(async (gameId) => {
        if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette page de jeu ?')) {
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`${config.api.baseUrl}/dashboard/deleteGamePage/${gameId}`, {
                method: 'DELETE'
            });

            const data = await response.json();
            if (data.success) {
                setMessage('Page supprimée avec succès');
                await fetchGamePages();
                if (selectedGame && selectedGame._id === gameId) {
                    resetForm();
                }
            } else {
                setMessage(data.message || 'Erreur lors de la suppression');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setMessage('Erreur de connexion au serveur');
        } finally {
            setLoading(false);
        }
    }, [selectedGame, fetchGamePages, resetForm]);

    // Éditer une page de jeu
    const handleEdit = useCallback((game) => {
        setSelectedGame(game);
        setMessage('');
        
        // Transformer les données pour l'édition avec des IDs uniques
        const transformArrayWithIds = (array, defaultItem) => {
            if (!array || array.length === 0) {
                return [{ ...defaultItem, id: generateId() }];
            }
            return array.map((item) => ({
                ...item,
                id: generateId()
            }));
        };

        setFormData({
            title: game.title || '',
            slug: game.slug || '',
            subtitle: game.subtitle || '',
            description: game.description || '',
            tags: game.tags || 'Action | PC',
            thumbnailImage: game.thumbnailImage || '',
            logoImage: game.logoImage || '',
            splashImage: game.splashImage || '',
            youtubeVideoId: game.youtubeVideoId || '',
            trailerVideo: game.trailerVideo || '',
            steamUrl: game.steamUrl || '',
            itchioUrl: game.itchioUrl || '',
            websiteUrl: game.websiteUrl || '',
            controlsImage: game.controlsImage || '',
            keyMechanics: game.keyMechanics?.length 
                ? game.keyMechanics.map((mechanic, index) => ({ 
                    id: generateId(), 
                    value: typeof mechanic === 'string' ? mechanic : mechanic.value || '' 
                }))
                : [{ id: generateId(), value: '' }],
            galleryImages: transformArrayWithIds(game.galleryImages, { url: '', title: '', alt: '' }),
            gameplayVideos: transformArrayWithIds(game.gameplayVideos, { url: '', description: '' }),
            sections: transformArrayWithIds(game.sections, { type: 'text', title: '', content: '', position: 'left', order: 0 }),
            isPublished: game.isPublished || false,
            showInMenu: game.showInMenu !== false,
            menuOrder: game.menuOrder || 0
        });
        setIsEditing(true);
        setRefreshKey(prev => prev + 1); // Force le re-render
    }, [generateId]);

    const startNewGame = useCallback(() => {
        resetForm();
        setIsEditing(true);
    }, [resetForm]);

    return (
        <div className="game-management">
            <div className="row">
                {/* Liste des pages de jeux */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5>Pages de Jeux</h5>
                            <button 
                                className="btn btn-primary btn-sm"
                                onClick={startNewGame}
                                disabled={loading}
                            >
                                <i className="fas fa-plus"></i> Nouveau
                            </button>
                        </div>
                        <div className="card-body">
                            {loading && !isInitialized ? (
                                <div className="text-center">
                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Chargement...</span>
                                    </div>
                                </div>
                            ) : gamePages.length === 0 ? (
                                <p className="text-muted">Aucune page de jeu créée</p>
                            ) : (
                                <div className="game-list">
                                    {gamePages.map((game) => (
                                        <div key={`game-${game._id}-${refreshKey}`} className="game-item mb-3 p-3 border rounded">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div>
                                                    <h6 className="mb-1">{game.title}</h6>
                                                    <small className="text-muted">{game.tags}</small>
                                                    <div className="mt-1">
                                                        <span className={`badge ${game.isPublished ? 'bg-success' : 'bg-secondary'}`}>
                                                            {game.isPublished ? 'Publié' : 'Brouillon'}
                                                        </span>
                                                        {game.showInMenu && (
                                                            <span className="badge bg-info ms-1">Menu</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="btn-group-vertical btn-group-sm">
                                                    <button 
                                                        className="btn btn-outline-primary btn-sm"
                                                        onClick={() => handleEdit(game)}
                                                        disabled={loading}
                                                        type="button"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                    <button 
                                                        className="btn btn-outline-danger btn-sm"
                                                        onClick={() => handleDelete(game._id)}
                                                        disabled={loading}
                                                        type="button"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Formulaire d'édition */}
                <div className="col-md-8">
                    {isEditing ? (
                        <div className="card">
                            <div className="card-header">
                                <h5>{selectedGame ? 'Modifier la page de jeu' : 'Créer une nouvelle page de jeu'}</h5>
                            </div>
                            <div className="card-body">
                                {message && (
                                    <div className={`alert ${message.includes('succès') ? 'alert-success' : 'alert-danger'}`}>
                                        {message}
                                    </div>
                                )}

                                <form onSubmit={handleSave}>
                                    {/* Informations de base */}
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Titre *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Slug *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="slug"
                                                value={formData.slug}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="url-friendly-name"
                                            />
                                            <small className="form-text text-muted">
                                                Généré automatiquement à partir du titre
                                            </small>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="form-label">Sous-titre</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subtitle"
                                                value={formData.subtitle}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Description *</label>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows="3"
                                            required
                                        />
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Tags</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="tags"
                                                value={formData.tags}
                                                onChange={handleInputChange}
                                                placeholder="Action | PC"
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Ordre dans le menu</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="menuOrder"
                                                value={formData.menuOrder}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-check mt-4">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    name="isPublished"
                                                    checked={formData.isPublished}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label">Publié</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    name="showInMenu"
                                                    checked={formData.showInMenu}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label">Afficher dans le menu</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Images */}
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Image miniature *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="thumbnailImage"
                                                value={formData.thumbnailImage}
                                                onChange={handleInputChange}
                                                placeholder="URL de l'image"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Logo *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="logoImage"
                                                value={formData.logoImage}
                                                onChange={handleInputChange}
                                                placeholder="URL du logo"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Image splash</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="splashImage"
                                                value={formData.splashImage}
                                                onChange={handleInputChange}
                                                placeholder="URL de l'image splash"
                                            />
                                        </div>
                                    </div>

                                    {/* Vidéos */}
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">ID Vidéo YouTube</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="youtubeVideoId"
                                                value={formData.youtubeVideoId}
                                                onChange={handleInputChange}
                                                placeholder="Ex: XrP0W63lWuA"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Vidéo trailer</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="trailerVideo"
                                                value={formData.trailerVideo}
                                                onChange={handleInputChange}
                                                placeholder="URL de la vidéo"
                                            />
                                        </div>
                                    </div>

                                    {/* Liens externes */}
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Lien Steam</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="steamUrl"
                                                value={formData.steamUrl}
                                                onChange={handleInputChange}
                                                placeholder="https://store.steampowered.com/..."
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Lien Itch.io</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="itchioUrl"
                                                value={formData.itchioUrl}
                                                onChange={handleInputChange}
                                                placeholder="https://wondersoftstudio.itch.io/..."
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Site web</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="websiteUrl"
                                                value={formData.websiteUrl}
                                                onChange={handleInputChange}
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>

                                    {/* Image de contrôles */}
                                    <div className="mb-3">
                                        <label className="form-label">Image des contrôles</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="controlsImage"
                                            value={formData.controlsImage}
                                            onChange={handleInputChange}
                                            placeholder="URL de l'image des contrôles"
                                        />
                                    </div>

                                    {/* Mécaniques clés avec clés uniques */}
                                    <div className="mb-3">
                                        <label className="form-label">Mécaniques clés</label>
                                        {formData.keyMechanics.map((mechanic) => (
                                            <div key={`mechanic-${mechanic.id}`} className="input-group mb-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={mechanic.value || ''}
                                                    onChange={(e) => handleArrayChange('keyMechanics', mechanic.id, 'value', e.target.value)}
                                                    placeholder="Décrivez une mécanique du jeu"
                                                />
                                                {formData.keyMechanics.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        onClick={() => removeArrayItem('keyMechanics', mechanic.id)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => addArrayItem('keyMechanics', { value: '' })}
                                        >
                                            <i className="fas fa-plus"></i> Ajouter une mécanique
                                        </button>
                                    </div>

                                    {/* Images de galerie avec clés uniques */}
                                    <div className="mb-3">
                                        <label className="form-label">Images de galerie</label>
                                        {formData.galleryImages.map((image) => (
                                            <div key={`gallery-${image.id}`} className="card mb-2">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label className="form-label">URL de l'image</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={image.url || ''}
                                                                onChange={(e) => handleArrayChange('galleryImages', image.id, 'url', e.target.value)}
                                                                placeholder="URL de l'image"
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Titre</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={image.title || ''}
                                                                onChange={(e) => handleArrayChange('galleryImages', image.id, 'title', e.target.value)}
                                                                placeholder="Titre de l'image"
                                                            />
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="form-label">Alt</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={image.alt || ''}
                                                                onChange={(e) => handleArrayChange('galleryImages', image.id, 'alt', e.target.value)}
                                                                placeholder="Texte alternatif"
                                                            />
                                                        </div>
                                                        <div className="col-md-1 d-flex align-items-end">
                                                            {formData.galleryImages.length > 1 && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-outline-danger btn-sm"
                                                                    onClick={() => removeArrayItem('galleryImages', image.id)}
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => addArrayItem('galleryImages', { url: '', title: '', alt: '' })}
                                        >
                                            <i className="fas fa-plus"></i> Ajouter une image
                                        </button>
                                    </div>

                                    {/* Vidéos de gameplay avec clés uniques */}
                                    <div className="mb-3">
                                        <label className="form-label">Vidéos de gameplay</label>
                                        {formData.gameplayVideos.map((video) => (
                                            <div key={`video-${video.id}`} className="card mb-2">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label className="form-label">URL de la vidéo</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={video.url || ''}
                                                                onChange={(e) => handleArrayChange('gameplayVideos', video.id, 'url', e.target.value)}
                                                                placeholder="URL de la vidéo"
                                                            />
                                                        </div>
                                                        <div className="col-md-5">
                                                            <label className="form-label">Description</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={video.description || ''}
                                                                onChange={(e) => handleArrayChange('gameplayVideos', video.id, 'description', e.target.value)}
                                                                placeholder="Description de la vidéo"
                                                            />
                                                        </div>
                                                        <div className="col-md-1 d-flex align-items-end">
                                                            {formData.gameplayVideos.length > 1 && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-outline-danger btn-sm"
                                                                    onClick={() => removeArrayItem('gameplayVideos', video.id)}
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => addArrayItem('gameplayVideos', { url: '', description: '' })}
                                        >
                                            <i className="fas fa-plus"></i> Ajouter une vidéo
                                        </button>
                                    </div>

                                    {/* Sections avec clés uniques */}
                                    <div className="mb-3">
                                        <label className="form-label">Sections de contenu</label>
                                        {formData.sections.map((section) => (
                                            <div key={`section-${section.id}`} className="card mb-2">
                                                <div className="card-body">
                                                    <div className="row mb-2">
                                                        <div className="col-md-3">
                                                            <label className="form-label">Type</label>
                                                            <select
                                                                className="form-control"
                                                                value={section.type || 'text'}
                                                                onChange={(e) => handleArrayChange('sections', section.id, 'type', e.target.value)}
                                                            >
                                                                <option value="text">Texte</option>
                                                                <option value="image">Image</option>
                                                                <option value="video">Vidéo</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Position</label>
                                                            <select
                                                                className="form-control"
                                                                value={section.position || 'left'}
                                                                onChange={(e) => handleArrayChange('sections', section.id, 'position', e.target.value)}
                                                            >
                                                                <option value="left">Gauche</option>
                                                                <option value="right">Droite</option>
                                                                <option value="center">Centre</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="form-label">Ordre</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={section.order || 0}
                                                                onChange={(e) => handleArrayChange('sections', section.id, 'order', parseInt(e.target.value) || 0)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Titre</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={section.title || ''}
                                                                onChange={(e) => handleArrayChange('sections', section.id, 'title', e.target.value)}
                                                                placeholder="Titre de la section"
                                                            />
                                                        </div>
                                                        <div className="col-md-1 d-flex align-items-end">
                                                            {formData.sections.length > 1 && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-outline-danger btn-sm"
                                                                    onClick={() => removeArrayItem('sections', section.id)}
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <label className="form-label">Contenu</label>
                                                            <textarea
                                                                className="form-control"
                                                                value={section.content || ''}
                                                                onChange={(e) => handleArrayChange('sections', section.id, 'content', e.target.value)}
                                                                placeholder="Contenu de la section"
                                                                rows="3"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => addArrayItem('sections', { type: 'text', title: '', content: '', position: 'left', order: 0 })}
                                        >
                                            <i className="fas fa-plus"></i> Ajouter une section
                                        </button>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={resetForm}
                                            disabled={loading}
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sauvegarde...' : (selectedGame ? 'Mettre à jour' : 'Créer')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="card">
                            <div className="card-body text-center">
                                <i className="fas fa-gamepad fa-3x text-muted mb-3"></i>
                                <h5>Gestion des Pages de Jeux</h5>
                                <p className="text-muted">
                                    Sélectionnez une page de jeu à modifier ou créez-en une nouvelle.
                                </p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={startNewGame}
                                    disabled={loading}
                                >
                                    <i className="fas fa-plus"></i> Créer une nouvelle page
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameManagement;
