import './home.css';

// import TextTransition, { presets } from 'react-text-transition';
// import { motion } from  "framer-motion";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next' 


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(false);
    const { t } = useTranslation() ;

    
    return (
            <div className='home-container'>
                <div className="home-buttons">
                    <div className="home-buttons-title">
                    <Link to="/battleheights" className='video-box--title'>Battle Height</Link>                                  
                        <div className="home-buttons-buttons">
                            <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                                <i className="fa-brands fa-discord home-button-switch" ></i>
                                <p className='home-button-switch'>{ t( 'discord' ) }</p>
                            </a>
                            <a className='home-button home-button-switch' href="https://store.steampowered.com/app/2932940/BattleHeights/">
                                <i className="fa-brands fa-steam home-button-switch" ></i>
                                <p className='home-button-switch'>{ t( 'steam' ) }</p>
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