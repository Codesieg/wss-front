import './home.css';

import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(true);

    
    return (
        <div className='home-container'>
            <div className="home-hover">
                <Link to="/battleheights" className='video-box--title'><img src="/img/battleHeigths/Battleheights_menu.png" alt="battle heights logo" /></Link>
                <iframe className='iframe-steam' src="https://store.steampowered.com/widget/2932940/" frameborder="0" title="steam"></iframe>
            </div>
            <div className="video-player">
                <div className="video-box">
                    <ReactPlayer
                        url='/videos/battleHeigths/homepagesite_final.mp4'
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