import React from "react"

import './modal.css';


const MyModal = ({img, show, handleClose}) => {

    const handleCloseModal = () => {
        handleClose(false);
    };

return (
    <>
        {show && (
            <div onClick={handleCloseModal} className="modale">
                <img src={`${img}`} alt="Example" onClick={handleCloseModal} className='.modale--image '/>
            </div>
        )}
    </>
    );
};


export default MyModal;
