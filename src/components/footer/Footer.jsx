import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import PrivacyPolicy from '../privacyPolicy/PrivacyPolicy'; // Assurez-vous que le chemin est correct
import i18next from 'i18next';


import './footer.css';

const Footer = () => {
    const { t } = useTranslation(); // Utilisation du hook useTranslation

    return (
        <>
            <footer className="main-footer">
                <div className="footer"> 
                    <div className="container">
                        <div className="d-flex flex-column">
                        <div className="d-flex flex-column align-items-center">                       
                            <p className="copyright"> 
                                {t('footer.copyright')} - Website by 
                                <a className="text-decoration-none mb-0" href="https://github.com/Codesieg"> Codesieg</a>
                            </p>
                            <Link to="/privacyPolicy" className="text-decoration-none copyright text-primary">{t('footer.privacyPolicy')}</Link>
                        </div>
                            <div className='d-flex justify-content-center pb-3'>
                                <button onClick={() => i18next.changeLanguage('en')}> {t('footer.language.english')} </button> 
                                <button onClick={() => i18next.changeLanguage('fr')}> {t('footer.language.french')} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
