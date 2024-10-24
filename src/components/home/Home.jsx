import './home.css';

// import TextTransition, { presets } from 'react-text-transition';
// import { motion } from  "framer-motion";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next' 


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(true);
    const { t } = useTranslation() ;

    
    return (
            <div className='home-container'>
                <div className="home-buttons">
                    <div className="home-buttons-title">
                    <Link to="/battleheights" className='video-box--title'>Battle Heights</Link>                                  
                        <div className="home-buttons-buttons">
                            {/* <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                                <i className="fa-brands fa-discord home-button-switch" ></i>
                                <p className='home-button-switch'>{ t( 'discord' ) }</p>
                            </a> */}
                            <a className='home-button-steam d-flex align-items-center' href="https://store.steampowered.com/app/2932940/BattleHeights/">
                                <p className='home-button-steam home-button-steam--margin'>{ t( 'steam' ) }</p>
                                <i className="home-button-steam fa-brands fa-steam"></i>
                                <p className='home-button-steam home-button-steam--margin'>STEAM</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clip-item container-right"> 
                    <div className="video-box">
                        <ReactPlayer 
                            url='/img/websitevideoHome.mp4'
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