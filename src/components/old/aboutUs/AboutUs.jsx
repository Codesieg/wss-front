import './aboutUs.css';

import SectionFooter from '../sectionFooter/SectionFooter';
import SocialNetwork from '../socialNetwork/SocialNetwork';
import SectionTitle from '../sectionTitle/SectionTitle';
import Card from '../card/Card';

const pageTitle = "About us";


const AboutUs = () => {
        return ( 
            <>
                <section className="aboutUs">
                    <div className='aboutUs__section'>
                    <SectionTitle 
                        pageTitle = {pageTitle}
                    />
                    <SocialNetwork />
                    </div>
                    <p className='aboutUs__content'>Merde! S'ils ont entendu mon plan c'est foutu. Allez-y mollo avec la joie! Et si on faisait le coup du bouclier humain? Mais oui mon p’tit père il faudra bien vous y coller! À moins que vous préfériez vous taper les tartes! On vous met une dague sous le cou et on traverse le camp en gueulant "bougez-pas, bougez-pas ou un bute le roi". Il s’est fait chier dessus par un bouc! Merde! S'ils ont entendu mon plan c'est foutu. Merde! S'ils ont entendu mon plan c'est foutu. Allez-y mollo avec la joie! Et si on faisait le coup du bouclier humain? Mais oui mon p’tit père il faudra bien vous y coller! À moins que vous préfériez vous taper les tartes! On vous met une dague sous le cou et on traverse le camp en gueulant "bougez-pas, bougez-pas ou un bute le roi". Il s’est fait chier dessus par un bouc! Merde! S'ils ont entendu mon plan c'est foutu.</p>
                    <div>
                        <Card />
                    </div>
                </section>
                <SectionFooter />
            </>
        )
};


export default AboutUs;
