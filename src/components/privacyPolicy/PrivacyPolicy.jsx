import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation(); // Utilisation du hook useTranslation

    return (
        <div className="privacy-policy mt-5 pt-5">
            <h1>{t('privacyPolicy.title')}</h1>
            <p>{t('privacyPolicy.intro')}</p>
            <h2>1. {t('privacyPolicy.section1.title')}</h2>
            <p>
                <strong>{t('privacyPolicy.section1.personalInfo')}</strong> {t('privacyPolicy.section1.personalInfoDetails')}
            </p>
            <ul>
                <li>{t('privacyPolicy.section1.items.name')}</li>
                <li>{t('privacyPolicy.section1.items.email')}</li>
                <li>{t('privacyPolicy.section1.items.location')}</li>
            </ul>
            <p>
                <strong>{t('privacyPolicy.section1.gameData')}</strong> {t('privacyPolicy.section1.gameDataDetails')}
            </p>
            <p>
                <strong>{t('privacyPolicy.section1.deviceInfo')}</strong> {t('privacyPolicy.section1.deviceInfoDetails')}
            </p>
            <h2>2. {t('privacyPolicy.section2.title')}</h2>
            <p>{t('privacyPolicy.section2.usage')}</p>
            <ul>
                <li>{t('privacyPolicy.section2.items.manageAccount')}</li>
                <li>{t('privacyPolicy.section2.items.improveExperience')}</li>
                <li>{t('privacyPolicy.section2.items.respondRequests')}</li>
                <li>{t('privacyPolicy.section2.items.sendPromotions')}</li>
            </ul>
            <p>{t('privacyPolicy.section2.sharing')}</p>
            <p>{t('privacyPolicy.section2.dataRetention')}</p>
            <h2>3. {t('privacyPolicy.section3.title')}</h2>
            <p>{t('privacyPolicy.section3.rights')}</p>
            <ul>
                <li>{t('privacyPolicy.section3.items.access')}</li>
                <li>{t('privacyPolicy.section3.items.correct')}</li>
                <li>{t('privacyPolicy.section3.items.delete')}</li>
                <li>{t('privacyPolicy.section3.items.withdrawConsent')}</li>
            </ul>
            <h2>4. {t('privacyPolicy.section4.title')}</h2>
            <p>{t('privacyPolicy.section4.contact')}</p>
            <p>{t('privacyPolicy.section4.email')} <a href="mailto:battleheights@wondersoftstudio.com">battleheights@wondersoftstudio.com</a></p>
            <h2>5. {t('privacyPolicy.section5.title')}</h2>
            <p>{t('privacyPolicy.section5.updates')}</p>
            <h2>6. {t('privacyPolicy.section6.title')}</h2>
            <p>{t('privacyPolicy.section6.rights')}</p>
        </div>
    );
};

export default PrivacyPolicy;
