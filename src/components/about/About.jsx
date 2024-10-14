import React from 'react';

import './about.css';

import SocialNetwork from '../socialNetwork/SocialNetwork';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next' 



const About = () => {

    const pageTitleBlack = 'About ';
    const pageTitleColor = 'Us';
    
    return (
        <>
        import { Helmet } from 'react-helmet';
        <Helmet>
            <title>About Us</title>
            <meta name="About Us" content="About Us" />
            {/* Autres balises meta */}
        </Helmet>
        <div className="container">
            <div className="aboutUs large-margin">
                <SectionTitle
                    pageTitleBlack =  {pageTitleBlack}
                    pageTitleColor =  {pageTitleColor}
                />
                <div className="row">
                    <div className="col-md-6">
                        <p className="small-margin">We are a dedicated team of developers, designers, artists, programmers, and most importantly gaming enthusiasts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae ante pharetra, molestie nunc non, interdum ipsum.</p>
                        {/* <img id="awards" src="/img/awards.png" className="img-fluid" alt="awads"/> */}
                    </div>
                    <div className="col-md-6">
                        <img className="support-image img-fluid b-lazy" src="/img/placeholder.jpg" data-src="/img/about.jpg"  alt="digital collage"/>
                    </div>
                </div>
                <SocialNetwork />
            </div>
        </div>
        </>
    );
};

export default About;