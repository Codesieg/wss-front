import React from "react";

import './card.css';
 

const Card = ({table}) => {

    return (
        <>
            {table.map((img, index) => (
                <div  key={index} className="gamer-card">
                    <div className="box-top">
                        <img className="box-image" src={img.url} alt={img.title}/>
                        <div className="title-flex">
                            <h3 className="box-title">{img.title}</h3>
                        </div>
                        {/* <p className="description">{img.desc}</p> */}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;