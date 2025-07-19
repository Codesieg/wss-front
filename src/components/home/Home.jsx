import './home.css';

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import config from '../../config';


const Home = ({joinUsFromChild}) => {
    joinUsFromChild(true);

    const [homeConfig, setHomeConfig] = useState({
        videoUrl: 'videos/ssng/Trailer_SISING23th.mp4',
        logoUrl: '/img/ssng/ssng_logo.png',
        steamIframeUrl: 'https://store.steampowered.com/widget/3607150/',
        title: 'SSNG',
        backgroundColor: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomeConfig = async () => {
            try {
                const response = await fetch(`${config.api.baseUrl}/dashboard/getHomeConfig`);
                if (response.ok) {
                    const data = await response.json();
                    setHomeConfig({
                        videoUrl: data.videoUrl || 'videos/ssng/Trailer_SISING23th.mp4',
                        logoUrl: data.logoUrl || '/img/ssng/ssng_logo.png',
                        steamIframeUrl: data.steamIframeUrl || 'https://store.steampowered.com/widget/3607150/',
                        title: data.title || 'SSNG',
                        backgroundColor: data.backgroundColor || ''
                    });
                }
            } catch (error) {
                console.log('Erreur lors du chargement de la configuration:', error);
                // Utiliser les valeurs par défaut en cas d'erreur
            } finally {
                setLoading(false);
            }
        };

        fetchHomeConfig();
    }, []);

    if (loading) {
        return (
            <div className='home-container'>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Chargement...</span>
                    </div>
                </div>
            </div>
        );
    }

    const containerStyle = homeConfig.backgroundColor ? 
        { backgroundColor: homeConfig.backgroundColor } : {};

    return (
        <div className='home-container' style={containerStyle}>
            <div className="home-hover">
                <Link to="/ssng" className='video-box--title'>
                    <img 
                        src={homeConfig.logoUrl.startsWith('/uploads/') 
                            ? `${config.api.baseUrl}${homeConfig.logoUrl}` 
                            : homeConfig.logoUrl
                        } 
                        alt={homeConfig.title + " logo"} 
                    />
                </Link>
                <iframe 
                    className='iframe-steam' 
                    src={homeConfig.steamIframeUrl} 
                    frameBorder="0" 
                    title="steam"
                ></iframe>
            </div>
            <div className="video-player">
                <div className="video-box">
                    <ReactPlayer
                        url={homeConfig.videoUrl.startsWith('/uploads/') 
                            ? `${config.api.baseUrl}${homeConfig.videoUrl}` 
                            : homeConfig.videoUrl
                        }
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
