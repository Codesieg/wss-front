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
            url:'/img/90e5f427e3e3bb610a927cb77fd5e925.png',
            title:'Game Designer',
            desc: 'We create and develop game concepts and rules, ensuring the design of an engaging and balanced gaming experience.'
        },
        {
            url:'/img/Jap.resto_-_Finale.png',
            title:'Game Developer ',
            desc: 'We are programmers who write the game\'s source code, transforming the designers\' ideas into an interactive and functional reality.'
        },
        {
            url:'/img/ScreenShot00011.png',
            title:'Graphic Designer',
            desc: 'We create visual elements such as characters, environments, and interfaces, bringing the visual universe of the game to life.'
        },
        {
            url:'/img/ScreenShot00012.png',
            title:'Animator',
            desc: 'We animate game characters and objects to breathe life into them, ensuring that movements are smooth and captivating.'
        },
        {
            url:'/img/Tibetan_Restaurant.png',
            title:'Sound Designer',
            desc: 'We handle the game\'s sound effects and music, contributing to the immersive atmosphere and the player\'s sound experience.'
        },   
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
                <div className="row">
                    <div className="col-md-11 tiny-margin">
                        <p>Our company offers training, co-development and consulting services to the game industry, primarily on console and PC using Unreal Engine.</p>
                        <p>Get in touch at <span className='email'>consulting@wondersoftstudio.com</span>  or use the contact form for more information</p>  
                    </div>
                    <Card 
                        table = {imgServices}
                    />
                </div>
            </div>
        </>
    );
};

export default Services;