import './home.css';

import React, { useState, useEffect } from 'react';
// import TextTransition, { presets } from 'react-text-transition';

const Home = ({joinUsFromChild}) => {
// const Home = () => {

     joinUsFromChild(false);

    const words = [ 
        { 
            title : 'Defy the ',
            word : 'system',
            img : '/img/LO_1.jpg',
            position : 1,
        },
        { 
            title : 'Meet the team and  ',
            word : 'fellow players.',
            img : '/img/desktop.png', 
            position : 1, 
        },
        { 
            title : 'Craft your ',
            word : 'weapons',
            img : '/img/project_lo.png',
            position : 1,
        },
        { 
            title : 'Join our community ',
            word : 'now !',
            img : '/img/desktop_2.png',  
            position : 1,
        },
        { 
            title : 'Save the last ',
            word : 'remains',
            img : '/img/cyberpunk.png', 
            position : 1, 
        },
        
    ]; 

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
            <div className="home">
                <div className='home-container'>
                    <div className="home-text">
                        <p>{words[1].title}</p>
                        {/* <p>{words[index % words.length].title}</p> */}
                        {/* <span className="word-color ps-2"><TextTransition springConfig={presets.wobbly} inline={true} >{words[index % words.length].word}</TextTransition></span> */}
                        <span className="word-color ps-2">{words[1].word}</span>
                    </div>
                </div>
                <div className="clip-item">                     
                    <img src={words[index % words.length].img} alt={words.title}/>
                </div>
            </div>
        </>
    );
};

export default Home;