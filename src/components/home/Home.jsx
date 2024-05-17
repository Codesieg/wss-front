import './home.css';

import TextTransition, { presets } from 'react-text-transition';
import { motion } from  "framer-motion";
import ReactPlayer from 'react-player';


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(false);

    
    return (
            <div className='home-container'>
                <div className="home-buttons">
                    <div className="home-buttons-title">
                        <p className='video-box--title'>BATTLE HEIGHTS</p>
                        <p className='video-box-text'>Soon on Steam</p>
                        <div className="video-box-icons">
                            <i className="fa-brands fa-steam video-box-icons-only" ></i>
                        </div>
                        <div className="video-box-icons">
                            <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                                <i className="fa-brands fa-discord home-button-switch" ></i>
                                <p className='home-button-switch'>Join us on Discord</p>
                            </a>                        
                        </div>
                        <div className="home-buttons-buttons">
                            <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                                <i className="fa-brands fa-discord home-button-switch" ></i>
                                <p className='home-button-switch'>Join us on Discord</p>
                            </a>
                            <a className='home-button home-button-switch' href="https://wondersoftstudio.itch.io/battleheights">
                                <i className="fa-brands fa-itch-io home-button-switch" ></i>
                                <p className='home-button-switch'>Join The Beta Now</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clip-item container-right"> 
                    <div className="video-box">
                        <ReactPlayer 
                            url='/img/homepagesite.mp4'
                            className='react-player'
                            volume='0'
                            playing='true'
                            loop='true'
                            width='100%'
                            height= '100%'
                        />
                    </div>
                </div>
            </div>
    );
};

export default Home;

// ours games => double page Project L0 / battle height 
