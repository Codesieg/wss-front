import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import MyModal from '../modal/MyModal';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';


import './battleheights.css';

const Battleheights = ({ joinUsFromChild, headerBottomFromChild }) => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageToShow, setImageToShow] = useState("");

    const { t } = useTranslation();

    const battleHControls = t('image.battleHeights.battleHControls');    

    const Timg = [
        { title: 'image1.png', img: '/img/battleHeigths/image1.png' },
        { title: 'image2.png', img: '/img/battleHeigths/image2.png' },
        { title: 'image3.png', img: '/img/battleHeigths/image3.png' },
        { title: 'image5.png', img: '/img/battleHeigths/image5.png' },
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
                <title>Battle heights</title>
                <meta name="Battleheight" content="Battleheight" />
                {/* Autres balises meta */}
            </Helmet>
            <div className='games'>
                <div>
                    <SectionTitle
                        pageTitleBlack="Battle "
                        pageTitleColor="Heights"
                    />
                    <div className="row ">
                        <div className="col-md-11 small-margin">
                            <p><span className='fw-bold'>{t('importantNote')}</span> {t('gameDevelopment')}</p>
                            <p>{t('immersiveExperience')}</p>
                            <img className='splash' src="/img/battleHeigths/splash_skelleton.png" alt="" />
                        </div>
                    </div>
                    <div className="games-portfolio ">
                        <div className="game-card">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
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
                                                    paddingBottom: "56.25%", /* 16:9 */
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
                                                    src={`https://www.youtube.com/embed/XrP0W63lWuA`}
                                                    frameBorder="0"
                                                    title="battle heights video"
                                                />
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                                <a className="js-video-button" data-video-id="IfmK9ZWKHdk" data-channel="youtube" onClick={handleShow}>
                                    <div className="overlay video">
                                        <i className="fa fa-play fa-3x"></i>
                                    </div>
                                </a>
                                <img src="/img/battleHeigths/I4QXoy.jpg" className="img-fluid b-lazy" alt="video thumbnail" />
                            </div>
                            <div className="col-lg-12 col-xl-7 game-card-right">
                                <h2 className="short-hr-left">Battle Heights</h2>
                                <p className="tags"><span className="subtle">Action | PC</span></p>
                                <p className="game-description">{t('masterTheHeights')}</p>
                                <div className="externals-btns">
                                    <div className="steam-btn">
                                        <a className='ms-4' href="https://store.steampowered.com/app/2932940/BattleHeights/">
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
                                        <img src={img} data-src={img} className="img-fluid b-lazy" alt={title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <p className="">{t('dropTheCandyKaboom')}</p>
                            </div>
                            <div className="portal mt-lg-2 controls_img--dash">
                                {/* <img src="/img/battleHeigths/0000-0121.gif" className="mt-lg-2 controls_img--dash" alt="video thumbnail" /> */}
                                <ReactPlayer
                                    url='/videos/battleHeigths/30THNovBattleheights.mp4'
                                    volume='0'
                                    playing={true}
                                    loop={true}
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                        </div>
                        <div className="inter">
                            <img className="" src="/img/battleHeigths/dont_look_up.png" alt="" />
                        </div>
                        <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4">
                            <ReactPlayer 
                                url='/videos/battleHeigths/dead_again.mp4'
                                className='react-playr--battleheights'
                                volume='0'
                                playing='true'
                                loop='true'
                            />                            
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <p className="">{t('dangerousToGoAlone')}</p>
                            </div>
                        </div>
                        <div className="inter">
                            <img className="" src="/img/battleHeigths/SkeletteFireball.png" alt="" />
                        </div>
                        <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4 mt-4">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <h3 className="">{t('dressForSuccessTitle')}</h3>
                                <p className="">{t('dressForSuccess')}</p>
                            </div>
                            <ReactPlayer 
                                url='/videos/battleHeigths/homepagesite_final.mp4'
                                className='react-playr--battleheights'
                                volume='0'
                                playing='true'
                                loop='true'
                            />
                        </div>
                        <div className="d-lg-flex justify-content-center justify-content-lg-around game-card p-4">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <img src={`${battleHControls}`} alt="battleHControls" />  
                                
                            </div>     
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <h2 className="short-hr-left">{t('keyMechanics')}</h2>
                                <p className="">{t('incarnate')}</p>
                                <p className="">{t('masteringClass')}</p>
                                <p className="">{t('epicBattles')}</p>
                                <p className="">{t('dompteevent')}</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Battleheights;
