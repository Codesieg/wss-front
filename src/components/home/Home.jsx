import './home.css';

import React, {useRef, useState, useEffect } from 'react';
// import TextTransition, { presets } from 'react-text-transition';
// import { motion } from  "framer-motion";
import { Stats, OrbitControls } from '@react-three/drei'
import * as THREE from 'three';
import { useControls } from 'leva';

import Loader from '../loader/Loader';

import { Canvas } from '@react-three/fiber'

import Model from '../experience/Experience'


const Home = ({joinUsFromChild}) => {

    const [loading, setLoading] = useState(true);
    const spotRef = useRef();

    // const [index, setIndex] = useState(0);
    joinUsFromChild(false);

    // useControls('Spot Light', {
    //     visible: {
    //       value: false,
    //       onChange: (v) => {
    //         spotRef.current.visible = v
    //       },
    //     },
    //     position: {
    //       x: 0,
    //       y: 2.30,
    //       z: 1.34,
    //       onChange: (v) => {
    //         spotRef.current.position.copy(v)
    //       },
    //     },
    //     color: {
    //       value: 'white',
    //       onChange: (v) => {
    //         spotRef.current.color = new THREE.Color(v)
    //       },
    //     },
    //     distance: {
    //       value: 2.8,
    //       onChange: (v) => {
    //         spotRef.current.distance = v
    //       },
    //     },
    //     angle: {
    //       value: Math.PI/4,
    //       onChange: (v) => {
    //         spotRef.current.angle = Math.PI/v
    //       },
    //     },
    //     intensity: {
    //       value: 60,
    //       onChange: (v) => {
    //         spotRef.current.intensity = v
    //       },
    //     }
    //   })
  
    //   console.log(spotRef.current);

    // const words = [ 
    //     { 
    //         title : 'Defy the ',
    //         word : 'system',
    //         img : '/img/LO_1.jpg',
    //         position : 1,
    //     },
    //     { 
    //         title : 'Meet the team and  ',
    //         word : 'fellow players.',
    //         img : '/img/desktop.png', 
    //         position : 1, 
    //     },
    //     { 
    //         title : 'Craft your ',
    //         word : 'weapons',
    //         img : '/img/project_lo.png',
    //         position : 1,
    //     },
    //     { 
    //         title : 'Join our community ',
    //         word : 'now !',
    //         img : '/img/desktop_2.png',  
    //         position : 1,
    //     },
    //     { 
    //         title : 'Save the last ',
    //         word : 'remains',
    //         img : '/img/cyberpunk.png', 
    //         position : 1, 
    //     },
        
    // ]; 

    // useEffect(() => { 
    //     // window.addEventListener("load", () => {
    //     //     setLoading(false);
    //     //   });
    //       setTimeout(() => {
	// 		setLoading(false)
	// 	}, 6000)
    // },
    // []);

    // useEffect(() => {
    //         const intervalId = setInterval(() => {
    //             setIndex((index) => index + 1)
    //         } ,3250,);
    //         return () => clearTimeout(intervalId);
    //     }, 
    // []);

    // if (loading) {
    // }


    return (
        // <>
            <div className="home">
                {/* {loading ? <Loader />
                          :  
                         <> */}
                                <div className="home-text">                                   
                                    <h2>Defy the System, craft your weapons, save the last remains.</h2> 
                                    <h2>Meet the team and fellow players.</h2>
                                    {/* <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                                        <motion.p 
                                            initial={{ scale: 1 }}
                                            whileHover={[
                                                ["p", { rotate: 360, scale: 4 }, { duration: 2 }],
                                                ["p", { rotate: -360, scale: 1 }, { duration: 2 }],
                                              ]}
                                              className='home-button-switch'>Join us</motion.p>
                                        <motion.i 
                                             initial={{ scale: 0 }}
                                             whileHover={{ rotate: 3600, scale: 1 }}
                                             transition={{
                                             type: "spring",
                                             stiffness: 260,
                                             damping: 20
                                             }} 
                                        className="fa-brands fa-discord home-button-switch" ></motion.i>
                                    </a> */}
                                  
                                </div>
                            <div className="clip-item">  
                                {/* <div className='mouse-controls'>
                                        <div className="scroll-downs">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                        <div>Zoom</div>
                                    </div>
                                    <div className="mouse-move">
                                        <div className="chevron chevron-top"></div>
                                        <div className="chevron chevron-right"></div>
                                        <div className="mousey">
                                            <div className="scroller-fix"></div>
                                        </div>
                                        <div className="chevron chevron-left"></div>
                                        <div className="chevron chevron-bottom"></div>
                                        <div>Move</div>
                                    </div>
                                </div>                  <div className='mouse-controls'>
                                        <div className="scroll-downs">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                        <div>Zoom</div>
                                    </div>
                                    <div className="mouse-move">
                                        <div className="chevron chevron-top"></div>
                                        <div className="chevron chevron-right"></div>
                                        <div className="mousey">
                                            <div className="scroller-fix"></div>
                                        </div>
                                        <div className="chevron chevron-left"></div>
                                        <div className="chevron chevron-bottom"></div>
                                        <div>Move</div>
                                    </div>
                                </div>       */}
                                {/* <img src={words[index % words.length].img} alt={words.title}/> */}
                                <div className="youtube-video-container" style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                                    <iframe
                                        style={{ left: 0, top: 0, height: '100%', width: '100%', position: 'absolute' }}
                                        src={`https://www.youtube.com/embed/QErJtShq4Cw`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        title="YouTube video player"
                                    ></iframe>
                                    </div>
                            </div>
                        {/* </>       */}
                 {/* }   */}
            </div>
        // </>
    );
};

export default Home;

// ours games => double page Project L0 / battle height 
