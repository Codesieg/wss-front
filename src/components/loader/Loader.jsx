import React from 'react';
import { motion } from  "framer-motion";


import './loader.css';

const Loader = () => {
    return (
        <>
            <motion.div className='spinner-containner'
                        animate={{ width: 10, transition: { duration: 2, delay : 6}}}
                    >
                <div className="path1">
                    <div className="path4"> </div>
                </div>
                <div className='path3'></div>
                <div className='path2'></div>
                {/* <div className='path5'></div> */}
                <div className="path1-ters"></div>
                <div className="path1-bis"></div>
                {/* <p>Loading . . .</p> */}
            </motion.div>
        </>
    );
};


export default Loader
