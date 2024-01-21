import Nav from '../nav/Nav';
import SocialNetwork from '../socialNetwork/SocialNetwork'
import SectionFooter from '../sectionFooter/SectionFooter';
import './banner.css';


import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const words = [ 
                { 
                    title : 'The Ultimate',
                    img : '/img/LO_1.jpg'
                } ,
                { 
                    title : 'Epic',
                    img : '/img/hero_slide_2.jpg'
                } ,
                { 
                    title : 'Fast paced',
                    img : '/img/project_lo.png'
                } ,
                { 
                    title : 'Intense',
                    img : '/img/hero_slide_1.jpg'  
                } ,
                { 
                    title : 'Thrilling',
                    img : '/img/project_lo.png'  
                } ,
                { 
                    title : 'High-octane',
                    img : '/img/hero_slide_3.jpg'  
                } ,
            ]; 

const Banner = () => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
                    const intervalId = setInterval(() => {
                        setIndex((index) => index + 1)
                    } ,3250,);
                    return () => clearTimeout(intervalId);
                }, 
            []);
        
        return ( 
            <>
                <Nav />
                    <div className="masthead">
                        <h1 className="content">Are you ready for
                                <p><span className="word-color"><TextTransition springConfig={presets.wobbly} inline={true}>{words[index % words.length].title}</TextTransition></span> battle</p>
                                against robots
                        </h1> 
                        <div className="content-right"> 
                            <div className="content-right-img">
                                <img src={words[index % words.length].img} alt="" />
                            </div>
                        </div>
                        <SocialNetwork />
                    </div>
                <SectionFooter />
            </>
        )
};


export default Banner;
