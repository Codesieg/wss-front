import { React } from 'react';
import { motion } from  "framer-motion";


import './sectionTitle.css';


const SectionTitle = ({pageTitleBlack, pageTitleColor}) => {
  
    
    return (
        <>
            <div className="row heading tiny-margin">
                    <div className="col-md-auto">
                    <motion.h1
                        initial = {{ y: -25, opacity: 0  }}
                        animate = {{y: [-25, 0], opacity: [0,1], transition: { duration: 2 } }}>{pageTitleBlack} 
                            <span className="colored">{pageTitleColor}</span>
                        </motion.h1>
                    </div>
                    <div className="col">
                    <motion.hr 
                        initial = {{width: "0%", borderTop: "0" }}
                        animate = {{ width: "100%", transition: { duration: 2 } }}                       
                    />
                    </div>
                </div>
        </>
    );
};

export default SectionTitle;