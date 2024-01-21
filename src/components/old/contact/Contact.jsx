import './contact.css';

import SectionFooter from '../sectionFooter/SectionFooter';
import SocialNetwork from '../socialNetwork/SocialNetwork';
import SectionTitle from '../sectionTitle/SectionTitle';


const Contact = () => {

    const pageTitle = "Contact";

        return ( 
            <>
                <section className="ourTeam">
                    <div className='ourTeam__section'>
                    <SectionTitle 
                        pageTitle = {pageTitle}
                    />
                    <SocialNetwork />
                    </div>
                    <h2 className='ourTeam__img__title'>IN THE HEART OF GRENOBLE</h2>
                    <img className="ourTeam__img" src="/img/grenoble.png" alt="" />
                </section>
                <SectionFooter />
            </>
        )
};


export default Contact;
