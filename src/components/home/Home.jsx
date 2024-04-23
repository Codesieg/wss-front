import './home.css';

import TextTransition, { presets } from 'react-text-transition';
import { motion } from  "framer-motion";
import ReactPlayer from 'react-player';


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(false);

    
    return (
            <div className='home-container'>
                <div className="home">
                    <div className="home-text">
                        <h2>Defy the System, craft your weapons, save the last remains.</h2>
                        <h2>Meet the team and fellow players.</h2>
                        <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                            <i className="fa-brands fa-discord home-button-switch" ></i>
                            <p className='home-button-switch'>Join us on Discord</p>
                        </a>
                    </div>
                </div>
                <div className="clip-item container-right"> 
                    <div className="video-box">
                        <p className='video-box--title'>Battle Heigths</p>
                        <ReactPlayer 
                            url='/img/Teaser_BattleHeights.mp4'
                            className='react-player'
                            volume='0'
                            playing='true'
                            loop='true'
                        />

                    </div>
                </div>
            </div>
    );
};

export default Home;

// ours games => double page Project L0 / battle height 
