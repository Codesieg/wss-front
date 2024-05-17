import React from 'react';

import './services.css';

import SectionTitle from '../sectionTitle/SectionTitle';
import Card from '../card/Card';
import { Helmet } from 'react-helmet';


const Services = ({joinUsFromChild, headerBottomFromChild}) => {

    joinUsFromChild(false);
    headerBottomFromChild(false);

    const pageTitleBlack = 'Our  ';
    const pageTitleColor = 'Services';
    const positionY = 1720;

    const imgServices = [
        {
            url:'/img/download.png',
            title:'Gameplay and tool programing',
        },
        {
            url:'/img/HighresScreenshot00020.png',
            title:'Environment art 3D modeling ',
        },
        {
            url:'/img/battleH_lowpolyDiorama_004.png',
            title:'Characters and animation',
        },
        {
            url:'/img/Capture_decran_2024-02-23_181546.png',
            title:'Game design and QA',
        },
        // {
        //     url:'/img/Tibetan_Restaurant.png',
        //     title:'Sound Designer',
        //     desc: 'We handle the game\'s sound effects and music, contributing to the immersive atmosphere and the player\'s sound experience.'
        // },   
    ];

    return (
        <>
        <Helmet>
            <title>Our services</title>
            <meta name="Our services" content="Our services" />
            {/* Autres balises meta */}
        </Helmet>

            <div className="services container">
                <SectionTitle
                    pageTitleBlack =  {pageTitleBlack}
                    pageTitleColor =  {pageTitleColor}
                    positionY = {positionY}
                />
                    <div className="col-md-12 tiny-margin">
                        <p>Our company offers training, co-development and consulting services to the game industry, primarily on console and PC using Unreal Engine.</p>
                        <p>Get in touch at <span className='fw-bold'>consulting@wondersoftstudio.com</span> or use the contact form for more information</p>  
                    </div>
                    <div className="row-card">
                        <Card 
                            table = {imgServices}
                        />  
                    </div>
                </div>
        </>
    );
};

export default Services;