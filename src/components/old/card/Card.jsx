import React from 'react';

import './card.css';


const Card = () => {
    return (
        <>
        <div className="main__card">
            <div className="container">
                <div className="card">
                    <div className="box">
                        <img className="box__img" src="/img/wileaw.jpg" alt="" />
                        <div className="content">
                            <h2 className="name">Noe Daval</h2>
                            <p>3d Artist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Card;