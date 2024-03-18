import './home.css';

import React, { useState, useEffect } from 'react';
// import TextTransition, { presets } from 'react-text-transition';
import { motion } from  "framer-motion";

// import Loader from '../loader/Loader';

import { Canvas } from '@react-three/fiber'

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Model from '../experience/Experience'


const Home = ({joinUsFromChild}) => {

    // const [loading, setLoading] = useState(true);
    // const [index, setIndex] = useState(0);
    // const { camera, gl } = useThree()
    joinUsFromChild(false);

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
    //     window.addEventListener("load", () => {
    //         setLoading(false);
    //       });
    //       setTimeout(() => {
	// 		setLoading(false)
	// 	}, 5000)
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
        <>
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
                                {/* <img src={words[index % words.length].img} alt={words.title}/> */}
                                {/* <Canvas camera={ { fov: 45, near: 0.1, far: 200, position: [ 3, 5, 2 ] } }>                                    <Suspense fallback={null}> */}
                                <Canvas className='mt-5'>                                   
                                        <Model />
                                </Canvas>
                            </div>
                        {/* </>       */}
                 {/* }  */}
            </div>
        </>
    );
};

export default Home;

// ours games => double page Project L0 / battle height 
