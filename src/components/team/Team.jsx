import React from 'react';

import './team.css';

import SectionTitle from '../sectionTitle/SectionTitle';
import Gallery from '../gallery/Gallery';
import { Helmet } from 'react-helmet';


const Team = ({joinUsFromChild, headerBottomFromChild}) => {

    joinUsFromChild(true);
    headerBottomFromChild(false);

   const teams = [
        { 
            teamName: 'Bastien Renaud',
            subtle: 'Modeleur 3D',
            img: '/img/Bastien_Renaud.jpg',
            teamCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            twitter: 'https://github.com/john',
            discord: 'https://github.com/john',
            github: 'https://github.com/john',
            linkedin: 'https://www.linkedin.com/in/bastien-renaud-412708139/',
        },
        { 
            teamName: 'Clement Fortune',
            subtle: 'Concept Artist',
            img: '/img/Clement_Fortune.jpg',
            teamCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            twitter: 'https://github.com/john',
            discord: 'https://github.com/john',
            github: 'https://github.com/john',    
            linkedin: 'https://www.linkedin.com/in/sk3tchf0rmscra7ch/',
        },
        { 
            teamName: 'Florian Golestin',
            subtle: 'CEO - Game Director',
            img: '/img/Florian_Golestin.jpg',
            teamCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            twitter: 'https://github.com/john',
            discord: 'https://github.com/john',
            github: 'https://github.com/john',
            linkedin: 'https://www.linkedin.com/in/floriangolestin/',
        },
        { 
            teamName: 'Noe Daval',
            subtle: 'Co-founder - Art Director',
            img: '/img/noe_Daval.jpg',
            teamCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            twitter: 'https://github.com/john',
            discord: 'https://github.com/john',
            github: 'https://github.com/john',
            linkedin: 'https://fr.linkedin.com/in/noe-daval-72ab9a267',
        },
        { 
            teamName: 'Jeremy Bouchet',
            subtle: 'Compositeur',
            img: '/img/Jeremy_Bouchet.jpg',
            teamCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            twitter: 'https://github.com/john',
            discord: 'https://github.com/john',
            github: 'https://github.com/john',
            linkedin: 'https://www.linkedin.com/in/jeremie-bouchet/',
        },
        { 
            teamName: 'Fabian Salvini',
            subtle: 'Game designer',
            img: '/img/Fabian_Salvini.jpg',
            teamCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            twitter: 'https://github.com/john',
            discord: 'https://github.com/john',
            github: 'https://github.com/john',
            linkedin: 'https://www.linkedin.com/in/fabiansalvini/',
        },
];

    const images = [
        {
            src:'/img/grenoble-1600x900.png',
            text:'genoble-1600',
        },
        {
            src:'/img/grenoble-3116511_1920.png',
            text:'grenoble-3116511_1920',
        },
        {
            src:'/img/visiter-grenoble-au-coeur-des-alpes.png',
            text:'visiter-grenoble-au-coeur-des-alpes',
        },
        {
            src:'/img/Visiter-Grenoble.png',
            text:'Visiter-Grenoble',
        },
     ];

    return (
        <>
        <Helmet>
            <title>About Us</title>
            <meta name="About Us" content="About Us" />
            {/* Autres balises meta */}
        </Helmet>

        <div className="team large-margin">
            <SectionTitle
                    pageTitleBlack =  'About '
                    pageTitleColor =  'Us'
                />
            <div className="game-card py-2">
                <div className="col-md-11">
                <h2 className="short-hr-left fs-4 mt-4">The studio</h2>
                    <p>Welcome to Wondersoft Studio, a video game development studio nestled in the heart of Grenoble, amidst the breathtaking French Alps. Our team comprises passionate and seasoned developers committed to delivering a high-quality and engaging gaming experience. At Wondersoft, we thrive on crafting immersive narratives that strike the perfect balance between gameplay and storytelling.</p>
                   <p>Our mission is simple: to create games we love, alongside people we love, for everyone to love.</p>
                </div>
            </div>
            <div className="tiny-margin">
                <div className="col-md-11">
                    <h2 className="short-hr-left fs-4">Our Values</h2>
                    <p>Embracing our proximity to nature, we incorporate an ethical and ecological mindset into our work, striving to empower individuals and foster a collaborative spirit within the group. We prioritize open-source technology and collaborate with partners who share our commitment to privacy and data protection.</p>
                   <p>At Wondersoft, our focus is on crafting premium, original intellectual properties that leave a lasting impact.</p>
                </div>
            </div>
            <div className="d-flex justify-content-evenly flex-wrap tiny-margin">
                <Gallery 
                    images={images} 
                />
            </div>      
            <div className="game-card divider pt-2">
            {/* <svg  height="0" width="0">
                <defs>
                    <clipPath id="wave" clipPathUnits="objectBoundingBox">
                        <path d="M  0.101, 0.934 C  0.121, 0.931  0.171, 0.949  0.186, 0.953  0.223, 0.96  0.277, 0.943  0.287, 0.941  0.305, 0.938  0.313, 0.937  0.318, 0.936  0.321, 0.935  0.327, 0.934  0.332, 0.933  0.336, 0.932  0.343, 0.931  0.347, 0.93  0.353, 0.929  0.357, 0.928  0.384, 0.924  0.397, 0.923  0.439, 0.924  0.452, 0.926  0.465, 0.928  0.473, 0.93  0.479, 0.932  0.488, 0.934  0.495, 0.936  0.499, 0.937  0.518, 0.943  0.55, 0.95  0.564, 0.953  0.569, 0.953  0.585, 0.954  0.599, 0.955  0.624, 0.955  0.636, 0.954  0.672, 0.951  0.68, 0.95  0.709, 0.949  0.735, 0.947  0.75, 0.946  0.764, 0.945  0.793, 0.941  0.958, 0.923  1, 1  1, 1 V 0 H 0 V  1 C 0, 1  0.39, 0.947  0.101, 0.934 Z"/>
                    </clipPath>
                </defs>
            </svg> */}
                <div className="col-md-11">
                <h2 className="short-hr-left fs-4 mt-4">The Team</h2>
                    <p>Our team comprises passionate and seasoned developers committed to delivering a high-quality and engaging gaming experience.
                    Welcome to Wondersoft Studio, a video game development studio nestled in the heart of Grenoble, amidst the breathtaking French Alps.</p>
                    At Wondersoft, we thrive on crafting immersive narratives that strike the perfect balance between gameplay and storytelling.
                    <p>Our mission is simple: to create games we love, alongside people we love, for everyone to love.</p>
                </div>
                <div className="cards">
                {teams.map((team, index) => (
                    <div key={`${team.teamName}-${index}`} className="team-card">  
                        <figure >
                            <img src={team.img} className="img-fluid b-lazy" alt="teammember"/>
                            <figcaption className="team-caption">
                                {/* <p>{team.teamCaption}</p> */}
                                <hr className="hr-short"/>
                                <ul className='ps-0'>
                                    {/* <li><a href={team.discord}><i className="fa-brands fa-discord"></i></a></li>
                                    <li><a href={team.twitter}><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href={team.github}><i className="fa-brands fa-github"></i></a></li> */}
                                    <li><a href={team.linkedin}><i className="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <p className="team-name">{team.teamName}</p>
                        <p className="subtle">{team.subtle}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
        </>
    );
};

export default Team;