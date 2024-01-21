import './projectLo.css';

import YouTube from 'react-youtube';

import SectionFooter from '../sectionFooter/SectionFooter';
import SocialNetwork from '../../socialNetwork/SocialNetwork';
import SectionTitle from '../sectionTitle/SectionTitle';



const ProjectLo = () => {

    const pageTitle = "Project L0";
    
    // _onReady(event) {
    // // L'événement sera déclenché lorsque la vidéo est prête à être lue.
    // event.target.pauseVideo(); // Exemple : Pause de la vidéo dès qu'elle est prête.
    // }
    const opts = {
        height: '490',
        width: '740',
        playerVars: {
            // Options de lecture (facultatif)
            autoplay: 1,
            },
    };

    return ( 
        <>
            <section className="aboutUs">
                <div className='aboutUs__section'>
                <SectionTitle 
                    pageTitle = {pageTitle}
                />
                <SocialNetwork />
                </div>
                <p className='aboutUs__content'>Embark on an epic sci-fi adventure in Project L0, a top-down shooter with Hack'n'Slash mechanics. Take control of a badass android and wield a vast arsenal of weapons and customizable equipment to carve your own path to victory.
                Guided by your trusty eVa (for electronic Victory assistant) companion, navigate a futuristic world filled with thrilling challenges and intense combat.</p>
                <YouTube videoId="https://www.youtube.com/watch?v=-er_dik3qes" 
                opts={opts} />
                <img src="" alt="" />

            </section>
            <SectionFooter />
        </>
    )
};


export default ProjectLo;
