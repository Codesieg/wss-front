import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import MyModal from '../modal/MyModal';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next' 


import './battleheights.css';


const Battleheights = ({joinUsFromChild, headerBottomFromChild}) => {
    const [show, setShow] = useState(false);

    
    const [showModal, setShowModal] = useState(false);
    const [imageToShow, setImageToShow] = useState("");
    
    const Timg = [ 
        { 
            title : '5ncVZS.jpg ',
            img : '/img/5nvVZS.jpg'
        },
        { 
            title : '6xKklc.jpg',
            img : '/img/6xKklc.png'
        },
        { 
            title : 'I4QXoy.png',
            img : '/img/I4QXoy.jpg'  
        },
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
            <title>Battle Height</title>
            <meta name="Battleheight" content="Battleheight" />
            {/* Autres balises meta */}
        </Helmet>
        <div className='games'>
            <div>
                <SectionTitle
                    pageTitleBlack =  'Battle '
                    pageTitleColor =  'Heights'
                />
                <div className="row ">
                    <div className="col-md-11 small-margin">
                        <p><span className='fw-bold'>IMPORTANT note:</span> The game is still in active development, so before joining the server, please ensure that you have downloaded the latest version. Additionally, to ensure that there are other players available, we recommend joining our Discord Server.</p>
                        <p>Immerse yourself in the world of BattleHeights, a bold fusion of the frenetic action of Team Fortress and the epic Heroic Fantasy saga. Our game offers dizzying battles where the void becomes as perilous as it is strategic.</p>
                    </div>           
                </div>
                <div className="games-portfolio ">
                    <div className="game-card">
                        <div className="col-lg-12 col-xl-5 game-card-left my-2">  
                        <div className="js-video-button" >
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
                                            paddingBottom: "56.25%" /* 16:9 */,
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
                                            src={`https://www.youtube.com/embed/IfmK9ZWKHdk`}
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
                            <img src="/img/I4QXoy.jpg" className="img-fluid b-lazy" alt="video thumbnail"/>
                        </div>
                        <div className="col-lg-12 col-xl-7 game-card-right">
                            <h2 className="short-hr-left">Battle Heights</h2>
                            <p className="tags"><span className="subtle">Action | PC</span> </p>
                            <p className="game-description">Master the heights ! Master the heights and conquer the void with double jumps, grappling hooks, and aerial maneuvers. Leap from cloud to cloud like an eagle hunting its prey, send your adversaries plummeting into the abyss, and unleash your aerial might in epic battles.</p>
                            <div className="externals-btns">
                                <div className="steam-btn">
                                    <a href="https://wondersoftstudio.itch.io/battleheights">
                                    <div className='d-flex align-items-center '>
                                        <i className="fa-brands fa-itch-io" ></i>
                                        <p className='mb-0 ms-2'> GET IT ON <span >ITCHIO</span></p>
                                    </div>
                                    </a>
                                </div>
                                <div className="steam-btn">
                                    <a className='ms-4' href="">
                                    <div className='d-flex align-items-center '>
                                        <i className="fa-brands fa-steam" ></i>
                                        <p className='mb-0 ms-2'> SOON ON STEAM</p>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-gallery">
                    <MyModal 
                        img = {imageToShow}
                        show = {showModal}
                        handleClose = {handleClosed}
                    />
                    <div className="d-lg-flex justify-content-between mb-5">
                        {Timg.map(({title, img,}) => (
                            <div key={title} className="gallery-item mb-2" onClick={() => (handleShowModal(img))}>
                                    <img src={img} data-src={img} className="img-fluid b-lazy" alt={title}/>
                            </div>
                        ))}
                    </div>                   
                    </div>
                    
                    <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4">
                        <div className="col-lg-12 col-xl-5 game-card-left my-2">
                            <p className="">Drop the the candy kaboom! Snatch this precious gem like a rugby ball, zigzag through opponents (or bulldoze them, it's more fun), and give them a taste of heat!</p>
                        </div>
                        <div className="portal">
                            <img src="/img/0000-0121.gif" className="mt-lg-2 controls_img--dash"  alt="video thumbnail"/>
                        </div>
                    </div>

                    <div className="d-lg-flex justify-content-lg-around align-items-center  p-4">
                        <div className="portal">
                            <img src="/img/O+As2E.gif" className="mt-lg-2 controls_img--dash"  alt="video thumbnail"/>
                        </div>
                        <div className="col-lg-12 col-xl-5 game-card-left my-2">
                            <p className="">It's dangerous to go alone! Take this Are you ready to strike? Poke the enemy with your blade! More into the heat of battle? Ignite the battlefield with your fireballs. Neither hot nor cold? Well, shoot them with your arrows and put them to the test!</p>
                        </div>
                    </div>

                    <div className="d-lg-flex justify-content-lg-around align-items-center game-card p-4 mt-4">
                        <div className="col-lg-12 col-xl-5 game-card-left my-2">
                            <p className="">Dress for success ! No matter the outcome, always dress your best for the occasion.</p>
                        </div>
                        <div className="portal">
                            <img src="/img/EqN4Ib.gif" className="mt-lg-2 controls_img--dash"  alt="video thumbnail"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Battleheights;