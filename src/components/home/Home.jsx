import './home.css';

import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(true);

    
    return (
        <div className='home-container'>
            <div className="home-hover">
                <Link to="/ssng" className='video-box--title'><img src="/img/ssng/ssng_logo.png" alt="battle heights logo" /></Link>
                <iframe className='iframe-steam' src="https://store.steampowered.com/widget/3607150/" frameborder="0" title="steam"></iframe>
            </div>
            <div className="video-player">
                <div className="video-box">
                    <ReactPlayer
                        url='videos/ssng/SISING_TrailerGameplayv2.mp4'
                        className='react-player'
                        volume='0'
                        playing={true}
                        loop={true}
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;