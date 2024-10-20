import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import MyModal from '../modal/MyModal';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './games.css';

const Games = ({ joinUsFromChild, headerBottomFromChild }) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageToShow, setImageToShow] = useState("");

    const Timg = [
        { title: 'aC9AGy.jpg ', img: '/img/aC9AGy.jpg' },
        { title: 'dS7YUi.jpg', img: '/img/dS7YUi.jpg' },
        { title: 'mggyXg.png', img: '/img/mggyXg.png' },
        { title: 'mNALPX.png', img: '/img/mNALPX.png' },
    ];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowModal = (img) => {
        setImageToShow(img);
        setShowModal(!showModal);
    };
    const handleClosed = (show) => {
        setShowModal(show);
    };

    joinUsFromChild(false);
    headerBottomFromChild(false);

    return (
        <>
            <Helmet>
                <title>ProjectLo</title>
                <meta name="Project L0" content="ProjectLo" />
                {/* Autres balises meta */}
            </Helmet>
            <div className='games'>
                <div>
                    <SectionTitle
                        pageTitleBlack="Project "
                        pageTitleColor={<span>L<span className='zero'>0</span></span>}
                    />
                    <div className="row ">
                        <div className="col-md-11 small-margin">
                            <p>{t('gameDescription')}</p>
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
                                                    src={`https://www.youtube.com/embed/QErJtShq4Cw`}
                                                    frameBorder="0"
                                                    title="project lo video"
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
                                <img src="/img/EHFJXC.jpg" className="img-fluid b-lazy" alt="video thumbnail" />
                            </div>
                            <div className="col-lg-12 col-xl-7 game-card-right">
                                <h2 className="short-hr-left">Project L<span className='zero'>0</span></h2>
                                <p className="tags"><span className="subtle">{t( 'actionPC' )} </span> </p>
                                <p className="game-description">{t('gameDescription')}</p>
                                <p className="game-description--line font-weight-bold">{t('meaningToBattles')}</p>
                                <ul className="game-description--line">
                                    <li>{t('exploreUniverse')}</li>
                                    <li>{t('confrontEnemies')}</li>
                                    <li>{t('buildStrategy')}</li>
                                    <li>{t('assistEva')}</li>
                                </ul>
                                <div className="steam-btn">
                                    <a href="https://wondersoftstudio.itch.io/project-l0">
                                        <div className='d-flex align-items-center '>
                                            <i className="fa-brands fa-itch-io"></i>
                                            <p className='mb-0 ms-2'> {t('getItOn')} <span >ITCHIO</span></p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid-gallery">
                            <MyModal
                                img={imageToShow}
                                show={showModal}
                                handleClose={handleClosed}
                            />
                            <div className="d-lg-flex">
                                {Timg.map(({ title, img, }) => (
                                    <div key={title} className="col-md-4 gallery-item mb-2" onClick={() => (handleShowModal(img))}>
                                        <div>
                                            <img src={img} data-src={img} className="img-fluid b-lazy" alt={title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="d-lg-flex justify-content-center justify-content-lg-around game-card p-4">
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <h2 className="short-hr-left">{t('keyMechanics')}</h2>
                                <p className="">{t('unlockRecipes')}</p>
                                <p className="">{t('upgradeCharacter')}</p>
                                <p className="">{t('engageBattles')}</p>
                            </div>
                            <div className="">
                                <h2 className="short-hr-left">{t('controls')}</h2>
                                <img src="/img/llYg0E.png" className="bg-dark p-4 controls_img" alt="video thumbnail" />
                            </div>
                        </div>

                        <div className="d-lg-flex justify-content-lg-around align-items-center p-4">
                            <div className="portal">
                                <img src="/img/Ry18F4.gif" className="mt-lg-2 controls_img--dash" alt="video thumbnail" />
                                <p className='text-center'>{t('dashThroughPortal')}</p>
                            </div>
                            <div className="col-lg-12 col-xl-5 game-card-left my-2">
                                <h2 className="short-hr-left">{t('prototype')}</h2>
                                <p className="">{t('prototypeNote')}</p>
                                <p className="text-center">{t('finishDemo')}</p>
                                <p className="">{t('beginOnboarding')}</p>
                                <a href="https://wondersoftstudio.itch.io/project-l0">{t('downloadDemo')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Games;
