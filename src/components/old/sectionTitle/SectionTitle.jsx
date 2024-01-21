import React from 'react';

import './sectionTitle.css';


const SectionTitle = ({pageTitle}) => {
    return (
        <>
            <h1 className="section__title">{pageTitle}</h1> 
            <div className="title__line"></div>
        </>
    );
};

export default SectionTitle;