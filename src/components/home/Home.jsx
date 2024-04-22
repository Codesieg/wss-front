import './home.css';

// import TextTransition, { presets } from 'react-text-transition';
// import { motion } from  "framer-motion";
import ReactPlayer from 'react-player';


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(false);

    
    return (
            <div className='home-container'>
                <div className="home">
                    <div className="home-text">
                        <h2>Defy the System, craft your weapons, save the last remains.</h2>
                        <h2>Meet the team and fellow players.</h2>
                        {/* <a className='home-button home-button-switch' href="https://discord.gg/xsn6ZpNkCu">
                            <motion.p
                                initial={{ scale: 1 }}
                                whileHover={[
                                    ["p", { rotate: 360, scale: 4 }, { duration: 2 }],
                                    ["p", { rotate: -360, scale: 1 }, { duration: 2 }],
                                ]}
                                className='home-button-switch'>Join us</motion.p>
                            <motion.i
                                initial={{ scale: 0 }}
                                whileHover={{ rotate: 3600, scale: 1 }}
                                transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                                }}
                            className="fa-brands fa-discord home-button-switch" ></motion.i>
                        </a> */}
                    </div>
                </div>
                <div className="clip-item container-right"> 
                    <div className="video-box">
                        <ReactPlayer 
                            url='/path/to/your/video.mp4'
                            className='react-player'
                            volume='0'
                            playing='true'
                        />
                    </div>
                </div>
            </div>
    );
};

export default Home;

// ours games => double page Project L0 / battle height 
