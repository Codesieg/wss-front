import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import MyModal from '../modal/MyModal';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next' 


import './games.css';


const Games = ({joinUsFromChild, headerBottomFromChild}) => {
    const [show, setShow] = useState(false);

    
    const [showModal, setShowModal] = useState(false);
    const [imageToShow, setImageToShow] = useState("");
    
    const Timg = [ 
        { 
            title : 'aC9AGy.jpg ',
            img : '/img/aC9AGy.jpg'
        },
        { 
            title : 'dS7YUi.jpg',
            img : '/img/dS7YUi.jpg'
        },
        { 
            title : 'mggyXg.png',
            img : '/img/mggyXg.png'  
        },
        { 
            title : 'mNALPX.png',
            img : '/img/mNALPX.png'  
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
            <title>Project L0</title>
            <meta name="Project L0" content="Project l0" />
            {/* Autres balises meta */}
        </Helmet>
        <div className='games'>
            <div>
                <SectionTitle
                    pageTitleBlack =  'Project '
                    pageTitleColor =  {<span>L<span className='zero'>0</span></span>}
                />
                <div className="row ">
                    <div className="col-md-11 small-margin">
                        <p>Embark on an epic sci-fi adventure in Project L0, a top-down shooter with Hack'n'Slash mechanics. Take control of a badass android and wield a vast arsenal of weapons and customizable equipment to carve your own path to victory.
                            Guided by your trusty eVa (for electronic Victory assistant) companion, navigate a futuristic world filled with thrilling challenges and intense combat.</p>
                    </div>
                    {/* <div className="col-md-12">
                        <ul className="game-tags">
                            <li>Sort By Tag :</li>
                            <li><a href="#" data-filter=".new">NEW</a></li>
                            <li><a href="#" data-filter="*">ALL</a></li>
                            <li><a href="#" data-filter=".pc">PC</a></li>
                            <li><a href="#" data-filter=".mobile">MOBILE</a></li>
                        </ul>
                    </div> */}
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
                                            src={`https://www.youtube.com/embed/QErJtShq4Cw`}
                                            frameBorder="0"
                                            title="project lo video"
                                        />
                                    </div>
                                </Modal.Body>
                            </Modal>    
                        </div>   
                        <a className="js-video-button"  onClick={handleShow}>
                            <div className="overlay video">
                            <i className="fa fa-play fa-3x"></i>
                            </div>
                        </a>
                            <img src="/img/EHFJXC.jpg" className="img-fluid b-lazy" alt="video thumbnail"/>
                        </div>
                        <div className="col-lg-12 col-xl-7 game-card-right">
                            <h2 className="short-hr-left">Project L<span className='zero'>0</span></h2>
                            <p className="tags"><span className="subtle">Action | PC</span> </p>
                            <p className="game-description">Dive into a fantastical universe where an AI and its horde of robots have taken control of the planet, attempting to impose a new order. With your eVa, form the core of the resistance and fight to preserve the last forms of life. Fighting fire with fire? You won't grow plants without breaking some gears. </p>
                            <p className="game-description--line font-weight-bold">Give meaning to your battles :</p>
                            {/*TODO:  faire une liste ici */}
                            <ul className="game-description--line"> 
                                <li>Explore a rich and meaningful universe</li>
                                <li>Confront enemies with astonishing abilities</li>
                                <li>Build your strategy by combining modules on your weapons and robot</li>
                                <li>Assist eVa in collecting the last traces of life and the lost history of humans. </li>
                            </ul>
                            <div className="steam-btn">
                                <a href="https://wondersoftstudio.itch.io/project-l0">
                                <div className='d-flex align-items-center '>
                                    <i className="fa-brands fa-itch-io" ></i>
                                    <p className='mb-0 ms-2'> GET IT ON <span >ITCHIO</span></p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-gallery">
                    <MyModal 
                        img = {imageToShow}
                        show = {showModal}
                        handleClose = {handleClosed}
                    />
                    <div className="d-lg-flex">
                        {Timg.map(({title, img,}) => (
                            <div key={title} className="col-md-4 gallery-item mb-2" onClick={() => (handleShowModal(img))}>
                                <div>
                                    <img src={img} data-src={img} className="img-fluid b-lazy" alt={title}/>
                                </div>
                            </div>
                        ))}
                    </div>                   
                    </div>
                    <div className="d-lg-flex justify-content-center justify-content-lg-around game-card p-4">
                        <div className="col-lg-12 col-xl-5 game-card-left my-2">
                            <h2 className="short-hr-left">Key Mechanics</h2>
                            <p className="">Unlock new recipes to enhance your capabilities.</p>
                            <p className="">Upgrade and personalize your character's abilities</p>
                            <p className="">Engage in battles against increasingly formidable foes </p>
                        </div>
                        <div className="">
                            <h2 className="short-hr-left">Controls</h2>
                            <img src="/img/llYg0E.png" className="bg-dark p-4 controls_img" alt="video thumbnail"/>
                        </div>
                    </div>
                    
                    <div className="d-lg-flex justify-content-lg-around align-items-center p-4">
                        <div className="portal">
                            <img src="/img/Ry18F4.gif" className="mt-lg-2 controls_img--dash"  alt="video thumbnail"/>
                            <p className='text-center'>You are expected to dash through this portal ! </p>
                        </div>
                        <div className="col-lg-12 col-xl-5 game-card-left my-2">
                            <h2 className="short-hr-left">Prototype</h2>
                            <p className="">Please note that the game is currently in its prototype stage. This demo incorporates both placeholder art and gameplay elements alongside (unoptimized) polished content. Please be aware that elements may change at any time.</p>
                            <p className="text-center">FINISH THE DEMO</p>
                            <p className="">Begin in the onboarding level and progress through four procedurally generated levels before confronting the final boss within the FACTORY.
                            Defeat the final boss to return to your hub and mark the completion of the demo.
                            STAY CONNECTED For updates and the opportunity to provide feedback on the game.</p>
                            <a href="https://wondersoftstudio.itch.io/project-l0">Download the demo here !</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Games;