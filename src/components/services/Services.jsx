import React from 'react';

import './services.css';

import SectionTitle from '../sectionTitle/SectionTitle';
import Card from '../card/Card';
import { Helmet } from 'react-helmet';
import { useTranslation, Trans } from 'react-i18next' 



const Services = ({joinUsFromChild, headerBottomFromChild}) => {

    joinUsFromChild(false);
    headerBottomFromChild(false);
    const { t } = useTranslation() ;


    const pageTitleBlack = t( 'ourServices1' );
    const pageTitleColor = t( 'ourServices2' );
    const positionY = 1720;

    const imgServices = [
        {
            url:'/img/download.png',
            title: t( 'service1' ),
        },
        {
            url:'/img/HighresScreenshot00020.png',
            title: t( 'service2' ),
        },
        {
            url:'/img/battleH_lowpolyDiorama_004.png',
            title: t( 'service3' ),
        },
        {
            url:'/img/Capture_decran_2024-02-23_181546.png',
            title: t( 'service4' ),
        },
    ];

    return (
        <>
        <Helmet>
            <title>{ t( 'ourServices' ) }</title>
            <meta name= { t( 'ourServices' ) } content= { t( 'ourServices' ) } />
            {/* Autres balises meta */}
        </Helmet>

            <div className="services container">
                <SectionTitle
                    pageTitleBlack =  {pageTitleBlack}
                    pageTitleColor =  {pageTitleColor}
                    positionY = {positionY}
                />
                    <div className="col-md-12 tiny-margin">
                        <p>{ t( 'ourServicesDesc1' ) }</p>
                        <Trans i18nKey="ourServicesDesc2"/>
                    </div>
                    <div className="row-card">
                        <Card 
                            table = {imgServices}
                        />  
                    </div>
                </div>
        </>
    );
};

export default Services;