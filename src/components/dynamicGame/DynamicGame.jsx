import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import MyModal from '../modal/MyModal';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import config from '../../config';

import './dynamicGame.css';

const DynamicGame = ({ joinUsFromChild, headerBottomFromChild }) => {
    const { slug } = useParams();
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageToShow, setImageToShow] = useState("");

    const { t } = useTranslation();

    // Charger les données de la page de jeu
    useEffect(() => {
        const fetchGameData = async () => {
            try {
                const response = await fetch(`${config.api.baseUrl}/api/getGamePage/${slug}`);
                if (response.ok) {
                    const data = await response.json();
                    setGameData(data);
                } else {
                    setError('Page de jeu non trouvée');
                }
            } catch (err) {
                console.error('Erreur lors du chargement de la page:', err);
                setError('Erreur lors du chargement de la page');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchGameData();
        }
    }, [slug]);

    // Pour la gestion de la video youtube
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Pour la gestion de la gallerie
    const handleShowModal = (img) => {
        setImageToShow(img);
        setShowModal(!showModal);
    };

    const handleClosed = (show) => {
        setShowModal(show);
    };

    // Ajout de la mention discord
    joinUsFromChild(false);
    headerBottomFromChild(false);

    if (loading) {
        return (
            <div className="games">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Chargement...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !gameData) {
        return (
            <div className="games">
                <div className="text-center" style={{ padding: '50px' }}>
                    <h2>Page non trouvée</h2>
                    <p>{error || 'Cette page de jeu n\'existe pas ou n\'est pas publiée.'}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{gameData.metaTitle || gameData.title}</title>
                <meta name="description" content={gameData.metaDescription || gameData.description} />
            </Helmet>
            <div className='games'>
                <div>
                    <SectionTitle
                        pageTitleBlack={gameData.title.split(' ')[0] + ' '}
                        pageTitleColor={gameData.title.split(' ').slice(1).join(' ')}
                    />
                    <div className="row">
                        <div className="col-md-11 small-margin">
                            <p><span className='fw-bold'>{t('importantNote')}</span> {gameData.description}</p>
                            {gameData.splashImage && (
                                <img className='splash' src={gameData.splashImage} alt={gameData.title} />
                            )}
                        </div>
                    </div>
                    <div className="games-portfolio">
                        <div className="game-card">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                {gameData.youtubeVideoId && (
                                    <>
                                        <div className="js-video-button">
                                            <div className="overlay video">
                                                <i className="fa fa-play fa-3x" onClick={handleShow}></i>
                                            </div>
                                            <Modal size="xl" centered id="video-modal" show={show} onHide={handleClose}>
                                                <Modal.Header closeButton></Modal.Header>
                                                <Modal.Body>
                                                    <div
                                                        className="video"
                                                        style={{
                                                            position: "relative",
                                                            paddingBottom: "56.25%",
                                                            paddingTop: 25,
                                                            height: 0
                                                        }}
                                                    >
                                                        <iframe
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                left: 0,
                                                                width: "100%",
                                                                height: "100%"
                                                            }}
                                                            src={`https://www.youtube.com/embed/${gameData.youtubeVideoId}`}
                                                            frameBorder="0"
                                                            title={`${gameData.title} video`}
                                                        />
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                        <a className="js-video-button" onClick={handleShow}>
                                            <div className="overlay video">
                                                <i className="fa fa-play fa-3x"></i>
                                            </div>
                                        </a>
                                    </>
                                )}
                                <img src={gameData.thumbnailImage} className="img-fluid b-lazy" alt="video thumbnail" />
                            </div>
                            <div className="col-lg-12 col-xl-7 game-card-right">
                                <h2 className="short-hr-left">{gameData.title}</h2>
                                <p className="tags"><span className="subtle">{gameData.tags}</span></p>
                                <p className="game-description">{gameData.description}</p>
                                {gameData.subtitle && (
                                    <p className="game-description--line font-weight-bold">{gameData.subtitle}</p>
                                )}
                                
                                {/* Mécaniques clés */}
                                {gameData.keyMechanics && gameData.keyMechanics.length > 0 && (
                                    <ul className="game-description--line">
                                        {gameData.keyMechanics.map((mechanic, index) => (
                                            <li key={index}>{mechanic}</li>
                                        ))}
                                    </ul>
                                )}

                                <div className="externals-btns">
                                    {gameData.steamUrl && (
                                        <div className="steam-btn">
                                            <a className='ms-4' href={gameData.steamUrl} target="_blank" rel="noopener noreferrer">
                                                <div className='d-flex align-items-center'>
                                                    <i className="fa-brands fa-steam"></i>
                                                    <p className='mb-0 ms-2'>{t('steam2')}</p>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                    {gameData.itchioUrl && (
                                        <div className="steam-btn">
                                            <a href={gameData.itchioUrl} target="_blank" rel="noopener noreferrer">
                                                <div className='d-flex align-items-center'>
                                                    <i className="fa-brands fa-itch-io"></i>
                                                    <p className='mb-0 ms-2'>{t('getItOn')} <span>ITCHIO</span></p>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                    {gameData.websiteUrl && (
                                        <div className="steam-btn">
                                            <a href={gameData.websiteUrl} target="_blank" rel="noopener noreferrer">
                                                <div className='d-flex align-items-center'>
                                                    <i className="fas fa-globe"></i>
                                                    <p className='mb-0 ms-2'>Site Web</p>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Galerie d'images */}
                        {gameData.galleryImages && gameData.galleryImages.length > 0 && (
                            <div className="grid-gallery">
                                <MyModal
                                    img={imageToShow}
                                    show={showModal}
                                    handleClose={handleClosed}
                                />
                                <div className="d-lg-flex justify-content-between mb-5">
                                    {gameData.galleryImages.map((image, index) => (
                                        <div key={index} className="gallery-item mb-2" onClick={() => handleShowModal(image.url)}>
                                            <img src={image.url} className="img-fluid b-lazy" alt={image.alt || image.title} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sections dynamiques */}
                        {gameData.sections && gameData.sections
                            .sort((a, b) => a.order - b.order)
                            .map((section, index) => (
                                <div key={index} className={`d-lg-flex justify-content-lg-around align-items-center game-card p-4 ${section.position === 'right' ? 'flex-row-reverse' : ''}`}>
                                    <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                        {section.title && <h3>{section.title}</h3>}
                                        {section.content && <p>{section.content}</p>}
                                    </div>
                                    {section.mediaUrl && (
                                        <div className="portal mt-lg-2 controls_img--dash">
                                            {section.type === 'video' ? (
                                                <ReactPlayer
                                                    url={section.mediaUrl}
                                                    volume='0'
                                                    playing={true}
                                                    loop={true}
                                                    width='100%'
                                                    height='100%'
                                                />
                                            ) : (
                                                <img src={section.mediaUrl} className="img-fluid" alt={section.title} />
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                        {/* Vidéos de gameplay */}
                        {gameData.gameplayVideos && gameData.gameplayVideos.map((video, index) => (
                            <div key={index} className="d-lg-flex justify-content-lg-around align-items-center game-card p-4">
                                <ReactPlayer 
                                    url={video.url}
                                    className='react-playr--battleheights'
                                    volume='0'
                                    playing='true'
                                    loop='true'
                                />                            
                                <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Image des contrôles */}
                        {gameData.controlsImage && (
                            <div className="d-lg-flex justify-content-center justify-content-lg-around game-card p-4">
                                <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                    <img src={gameData.controlsImage} alt="Controls" />  
                                </div>     
                                <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                    <h2 className="short-hr-left">{t('keyMechanics')}</h2>
                                    {gameData.keyMechanics && gameData.keyMechanics.map((mechanic, index) => (
                                        <p key={index}>{mechanic}</p>
                                    ))}
                                </div>        
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DynamicGame;
