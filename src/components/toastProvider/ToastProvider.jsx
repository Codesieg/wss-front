import React, { useState, createContext, useContext } from 'react';
import { motion } from  "framer-motion";


import './toastProvider.css';

// Créer un contexte pour gérer l'état de la notification
const ToastContext = createContext();

const useToast = () => {
    return useContext(ToastContext);
  }

const ToastProvider = ({ children }) => {
    // const popup = true;
    const [toastMessage, setToastMessage] = useState('');


    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => {
          setToastMessage('');
        }, 3000);
      };


    return (
        <>
            <ToastContext.Provider value={{ showToast }}>
                {children}
                {toastMessage 
                    ?  <motion.div 
                                initial ={{
                                    x: -465,
                                    opacity: [0,1],
                                }}
                                animate={{
                                    x: 0, 
                                    opacity: 0,
                                    transition: { duration: 2},
                                    display: "block"
                                }}
                                className="popup">
                            <div className="popup-content">
                                <p>{toastMessage}</p>
                                <span className="close" >&times;</span>
                            </div>
                        </motion.div>
                    :  <motion.div 
                            initial ={{
                                y: -25,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0, 
                                opacity: [0,1],
                                transition: { duration: 2}
                            }}
                            
                            className="popup popup--error">
                                    <div className="popup-content">
                                        <span className="close" >&times;</span>
                                        <p>{toastMessage}</p>
                                    </div>
                        </motion.div>
                }
            </ToastContext.Provider>
        </>
           
    );
};

export {useToast, ToastProvider};
