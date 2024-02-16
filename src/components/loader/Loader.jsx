import React from 'react';
import { motion } from  "framer-motion";


import './loader.css';

const Loader = () => {
    return (
        <motion.div className='spinner-containner'
        //     animate={{ width: 10, transition: { duration: 2, delay : 3}}}
        >
    <div className="path1">
                            <motion.div className="path4"
                                // animate={{ opacity: 0, transition: { duration: 1, delay : 1.5}}}
                                
                                > 
                            {/* <p>Loading . . .</p> */}
                            </motion.div>
    </div>
    <div className='path3'></div>
    <div className='path2'></div>
    <div className='path5'></div>
    <div className="path1-ters"></div>
    <div className="path1-bis"></div>
         </motion.div>
    );
};


export default Loader
