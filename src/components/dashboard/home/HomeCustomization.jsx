import React, { useState, useEffect } from 'react';
import Tooltip from '../../tooltip/Tooltip';
import config from '../../../config';
import './homeCustomization.css';

const HomeCustomization = () => {
    const [message, setMessage] = useState('');
    const [uploadProgress, setUploadProgress] = useState({
        video: false,
        image: false
    });
    const [homeConfig, setHomeConfig] = useState({
        videoUrl: '',
        logoUrl: '',
        steamIframeUrl: '',
        title: '',
        backgroundColor: '',
        id: '',
    });

    const handleGetHomeConfig = () => {
        fetch(`${config.api.baseUrl}/dashboard/getHomeConfig`)
        .then(response => response.json())
        .then(data => {
            setHomeConfig({
                videoUrl: data.videoUrl || 'videos/ssng/Trailer_SISING23th.mp4',
                logoUrl: data.logoUrl || '/img/ssng/ssng_logo.png',
                steamIframeUrl: data.steamIframeUrl || 'https://store.steampowered.com/widget/3607150/',
                title: data.title || 'SSNG',
                backgroundColor: data.backgroundColor || '',
                id: data._id || '',
            });
        })
        .catch(error => { 
            setMessage('Erreur lors de la récupération de la configuration');       
            console.log(error);
        });
    };

    const handleVideoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadProgress(prev => ({ ...prev, video: true }));
        setMessage('Upload de la vidéo en cours...');
        
        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await fetch(`${config.api.baseUrl}/dashboard/upload-video`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setHomeConfig(prev => ({
                    ...prev,
                    videoUrl: data.videoUrl
                }));
                setMessage('Vidéo uploadée avec succès');
            } else {
                setMessage(data.message || 'Erreur lors de l\'upload de la vidéo');
            }
        } catch (error) {
            console.error('Erreur upload vidéo:', error);
            setMessage('Erreur lors de l\'upload de la vidéo');
        } finally {
            setUploadProgress(prev => ({ ...prev, video: false }));
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadProgress(prev => ({ ...prev, image: true }));
        setMessage('Upload de l\'image en cours...');
        
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(`${config.api.baseUrl}/dashboard/upload-image`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setHomeConfig(prev => ({
                    ...prev,
                    logoUrl: data.imageUrl
                }));
                setMessage('Image uploadée avec succès');
            } else {
                setMessage(data.message || 'Erreur lors de l\'upload de l\'image');
            }
        } catch (error) {
            console.error('Erreur upload image:', error);
            setMessage('Erreur lors de l\'upload de l\'image');
        } finally {
            setUploadProgress(prev => ({ ...prev, image: false }));
        }
    };

    const handleHomeConfigChange = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.api.baseUrl}/dashboard/updateHomeConfig`, {
                method: 'PUT',
                body: JSON.stringify({
                    videoUrl: homeConfig.videoUrl,
                    logoUrl: homeConfig.logoUrl,
                    steamIframeUrl: homeConfig.steamIframeUrl,
                    title: homeConfig.title,
                    backgroundColor: homeConfig.backgroundColor,
                    id: homeConfig.id,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            setMessage(data.message);
        } catch (error) {
            setMessage('Impossible de se connecter au serveur');
            console.error('Erreur lors de la requête:', error.message);
        }
    };

    useEffect(() => {
        handleGetHomeConfig();
    }, []);

    return (
        <div className="mt-8 p-4 bg-white shadow-md rounded-md vh-75 shadow">
            <h3 className='mb-2 text-decoration-underline'>Configuration Page d'Accueil :</h3>
            <form onSubmit={handleHomeConfigChange}>
                <input className="form-control" type="hidden" defaultValue={homeConfig.id} name="id"/>
                <div className='ms-5'>
                    <div className="mb-4">
                        <label className="form-label">Vidéo de fond</label>
                        <div className="d-flex gap-2 mb-2">
                            <input 
                                className="form-control" 
                                type="text" 
                                value={homeConfig.videoUrl} 
                                name="videoUrl"
                                placeholder="videos/ssng/Trailer_SISING23th.mp4"
                                onChange={(e) => setHomeConfig(prev => ({...prev, videoUrl: e.target.value}))}
                            />
                            <input
                                type="file"
                                accept="video/*"
                                onChange={handleVideoUpload}
                                disabled={uploadProgress.video}
                                className="form-control"
                                style={{maxWidth: '200px'}}
                            />
                        </div>
                        {uploadProgress.video && <div className="text-info">Upload en cours...</div>}
                        <small className="form-text text-muted">Chemin vers la vidéo de fond ou uploadez un nouveau fichier</small>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Logo/Image</label>
                        <div className="d-flex gap-2 mb-2">
                            <input
                                className="form-control"
                                type="text"
                                value={homeConfig.logoUrl}
                                name="logoUrl"
                                placeholder="/img/ssng/ssng_logo.png"
                                onChange={(e) => setHomeConfig(prev => ({...prev, logoUrl: e.target.value}))}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                disabled={uploadProgress.image}
                                className="form-control"
                                style={{maxWidth: '200px'}}
                            />
                        </div>
                        {uploadProgress.image && <div className="text-info">Upload en cours...</div>}
                        {homeConfig.logoUrl && homeConfig.logoUrl.startsWith('/uploads/') && (
                            <div className="mt-2">
                                <img 
                                    src={`${config.api.baseUrl}${homeConfig.logoUrl}`} 
                                    alt="Aperçu logo" 
                                    style={{maxWidth: '100px', maxHeight: '100px'}}
                                    className="img-thumbnail"
                                />
                            </div>
                        )}
                        <small className="form-text text-muted">Chemin vers l'image du logo ou uploadez un nouveau fichier</small>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">URL Steam iframe</label>
                        <input
                            className="form-control"
                            type="text"
                            value={homeConfig.steamIframeUrl}
                            name="steamIframeUrl"
                            placeholder="https://store.steampowered.com/widget/3607150/"
                            onChange={(e) => setHomeConfig(prev => ({...prev, steamIframeUrl: e.target.value}))}
                        />
                        <small className="form-text text-muted">URL du widget Steam</small>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Titre</label>
                        <input
                            className="form-control"
                            type="text"
                            value={homeConfig.title}
                            name="title"
                            placeholder="SSNG"
                            onChange={(e) => setHomeConfig(prev => ({...prev, title: e.target.value}))}
                        />
                        <small className="form-text text-muted">Titre affiché sur la page</small>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Couleur de fond</label>
                        <input
                            className="form-control"
                            type="color"
                            value={homeConfig.backgroundColor || '#000000'}
                            name="backgroundColor"
                            onChange={(e) => setHomeConfig(prev => ({...prev, backgroundColor: e.target.value}))}
                        />
                        <small className="form-text text-muted">Couleur de fond de la page</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                    <button className="btn btn-primary ms-3 position-relative" type="button" onClick={handleGetHomeConfig}>
                        <Tooltip
                            text={'Rafraîchir les données'}
                            position={'arrowbottom'}
                        />
                        <i className="fa-solid fa-rotate"></i>
                    </button>
                </div>
            </form>
            <div className='text-danger mt-2'>{message}</div>
        </div>
    );
};

export default HomeCustomization;
