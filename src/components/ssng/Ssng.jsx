import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import MyModal from '../modal/MyModal';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';


import './ssng.css';

const Ssng = ({ joinUsFromChild, headerBottomFromChild }) => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageToShow, setImageToShow] = useState("");

    const { t } = useTranslation();

    const battleHControls = t('image.battleHeights.battleHControls');    

    const Timg = [
        { title: 'screen4.png', img: '/img/ssng/screen4.png' },
        { title: 'screen6.png', img: '/img/ssng/screen6.png' },
        { title: 'screen7.png', img: '/img/ssng/Screen7.png' },
        { title: 'screen8.png', img: '/img/ssng/screen8.png' }
    ];

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

    return (
        <>
            <Helmet>
                <title>Survive In Space Is Not Guaranteed</title>
                <meta name="ssng" content="ssng" />
                {/* Autres balises meta */}
            </Helmet>
            <div className='games'>
                <div>
                    <SectionTitle
                        pageTitleBlack="Survive In Space "
                        pageTitleColor="Is Not Guaranteed"
                    />
                    <div className="row ">
                        <div className="col-md-11 small-margin">
                            <p>{t('ssng.aboutGame')}</p>
                        </div>
                    </div>
                    <div className="games-portfolio ">
                        <div className="game-card">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <div className="js-video-button">
                                    <div className="overlay video" onClick={handleShow}>
                                        <i className="fa fa-play fa-3x"></i>
                                    </div>
                                    <Modal size="xl" centered id="video-modal" show={show} onHide={handleClose}>
                                        <Modal.Header closeButton></Modal.Header>
                                        <Modal.Body>
                                            <div className="video">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/dyp-sPZjtx4`}
                                                    frameBorder="0"
                                                    title="ssng video"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                                <img src="/img/ssng/Keyart_1080p.png" className="img-fluid b-lazy" alt="video thumbnail" />
                            </div>
                            <div className="col-lg-12 col-xl-7 game-card-right">
                                <h2 className="short-hr-left">Survive In Space Is Not Guaranteed</h2>
                                <p className="tags"><span className="subtle">Survival | Builder Game | PC</span></p>
                                <p className="game-description">{t('ssng.aboutGame')}</p>
                                <div className="externals-btns">
                                    <div className="steam-btn">
                                        <a className='ms-4' href="https://store.steampowered.com/app/3607150/Survival_In_Space_Is_Not_Guaranteed/?curator_clanid=4777282">
                                            <div className='d-flex align-items-center '>
                                                <i className="fa-brands fa-steam"></i>
                                                <p className='mb-0 ms-2'>{t('steam2')}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-gallery">
                            <MyModal
                                img={imageToShow}
                                show={showModal}
                                handleClose={handleClosed}
                            />
                            <div className="d-lg-flex justify-content-between mb-5">
                                {Timg.map(({ title, img }) => (
                                    <div key={title} className="gallery-item mb-2" onClick={() => (handleShowModal(img))}>
                                        <img 
                                            src={img} 
                                            data-src={img} 
                                            className="gallery-image" 
                                            alt={title}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <SectionTitle
                            pageTitleBlack={t('ssng.gameplayMechanics')}
                        />
                        <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <p className="">{t('ssng.exploreAndMine')}</p>
                                <p className="">{t('ssng.exploreAndMineContent')}</p>
                            </div>
                            <div className="portal mt-lg-2 controls_img--dash gameplay-image-container">
                                <img 
                                    src="/img/ssng/GIF_Mining.gif"
                                    className="img-fluid b-lazy gameplay-image"
                                    alt="Mining gameplay"
                                />
                            </div>
                        </div>
                     
                        <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4">
                            <div className="portal mt-lg-2 controls_img--dash gameplay-image-container">
                                <img 
                                    src="/img/ssng/GIF_DoorOpen.gif"
                                    className="gameplay-image"
                                    alt="Door opening gameplay"
                                />
                            </div>                            
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <p className="">{t('ssng.buildBase')}</p>
                                <p className="">{t('ssng.surviveVoid')}</p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ssng;
