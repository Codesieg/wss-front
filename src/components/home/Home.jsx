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
                <Link to="/battleheights" className='video-box--title'>Battle Heights</Link>                                  
                <iframe className='iframe-steam' src="https://store.steampowered.com/widget/2932940/" frameborder="0" title="steam"></iframe>
                <ReactPlayer 
                    url='/videos/battleHeigths/homepagesite.mp4'
                    className='react-player'
                    volume='0'
                    playing='true'
                    loop='true'
                    width='100%'
                    height= '100%'
                />
            </div>
    );
};

export default Home;