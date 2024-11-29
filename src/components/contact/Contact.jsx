import React, { useState, useEffect } from 'react';
import './contact.css';
import SectionTitle from '../sectionTitle/SectionTitle';
import { ToastProvider } from '../toastProvider/ToastProvider';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';

const Contact = ({ joinUsFromChild, headerBottomFromChild }) => {

    useEffect(() => {
        // Vérifiez si grecaptcha est disponible
        if (window.grecaptcha) {
          window.grecaptcha.enterprise.ready(() => {
            console.log('reCAPTCHA is ready');
          });
        }
      }, []);

      const handleSubmitCaptcha = async () => {
        try {
          // Remplacez 'your_action_name' par le nom de votre action
          const token = await window.grecaptcha.enterprise.execute('send_mail', { action: 'submit' });
          console.log('Token:', token);
          // Envoyez le token à votre serveur pour vérification
        } catch (error) {
          console.error('Error executing reCAPTCHA:', error);
        }
      };

      const captchaverif = (e) => {
        const token =  window.grecaptcha.enterprise.execute('send_mail', { action: 'submit' });
        const data = {
            event: {
              token: "TOKEN",
              expectedAction: "USER_ACTION",
              siteKey: "6Lev2YcqAAAAAB08IsXOmYtBoqepSKJLNftewmFv",
            }
          };
          
          fetch('https://recaptchaenterprise.googleapis.com/v1/projects/wondersoft-studio/assessments?key=AIzaSyDsgxN18cIMRUDd2JQHUIkvj-ySasZ_UmQ', {
            method: 'POST', // ou 'GET' selon votre besoin
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          
        // e.preventDefault();
        // window.grecaptcha.enterprise.ready(async () => {
        //   const token = await window.grecaptcha.enterprise.execute('6Lev2YcqAAAAAB08IsXOmYtBoqepSKJLNftewmFv', {action: 'LOGIN'});
        //   console.log(token);
          
        // });
      }

    const { t } = useTranslation();
    const [message, setMessage] = useState([
        { 
            msg: " ", 
            success: "hidden" 
        },
    ]);

    const [recaptchaToken, setRecaptchaToken] = useState(""); // Ajout pour stocker le token ReCAPTCHA

    joinUsFromChild(false);
    headerBottomFromChild(false);

    const pageTitleBlack = t('contact.getInTouch1');
    const pageTitleColor = t('contact.getInTouch2');
    const positionY = 3240;

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        fetch('http://api.wondersoftstudio.com/send-email', {
            method: 'POST',
            body: JSON.stringify({
                message: e.target.message.value,
                name: e.target.name.value,
                email: e.target.email.value,
                recaptchaToken: await window.grecaptcha.enterprise.execute('6Lev2YcqAAAAAB08IsXOmYtBoqepSKJLNftewmFv', {action: 'LOGIN'}) // Inclure le token ReCAPTCHA
            }),
            headers: {
                "Content-Type": "application/json",             
            }
        })
        .then(response => response.json())
        .then(data => {
            data.success ? 
            setMessage({
                msg: data.msg,
                success: 'text-success'
            })
            : 
            setMessage({
                msg: data.msg,
                success: 'text-danger'
            })
            console.log(data.msg, data.success);
        });
    }

    return (
        <> 
        <Helmet>
            <title>{t('contact.pageTitle')}</title>
            <meta name="Contact" content={t('contact.pageDescription')} />
            {/* Autres balises meta */}
        </Helmet>
        <ToastProvider>
            <div className="contact large-margin">
                <SectionTitle
                    pageTitleBlack={pageTitleBlack}
                    pageTitleColor={pageTitleColor}
                    positionY={positionY}
                />
                <div>
                    <div className="row mb-3">
                        <div className="col-md-11">
                            <p className='mx-0'>{t('contact.introText')}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="short-hr-left mb-3">{t('contact.leaveMessage')}</h2>
                        <form onSubmit={handleSubmit} className="contactForm" data-toggle="validator">
                            <div className='contactUsContainer'> 
                                <div className="contactUs">
                                    <input type="text" id="name" name="name" placeholder={t('contact.namePlaceholder')} data-error={t('contact.nameError')}/>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="contactUs">
                                    <input type="email" id="email" name="email" placeholder={t('contact.emailPlaceholder')} data-error={t('contact.emailError')}/>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <p className="subtle">{t('contact.requiredField')}</p>
                                <div className='display-flex'>
                                    <button type="submit" id="sendMail" className="button">{t('contact.sendMessage')}</button>
                                    <ReCAPTCHA
                                        sitekey="6Le08qMpAAAAAJ82W7z9WIBf8PR_Z33CKwMYpBIK"
                                        onChange={(token) => setRecaptchaToken(token)}
                                    />
                                </div>
                                <div className={message.success}>{message.msg}</div>
                            </div>

                            <div className="contactUs contactForm_message">
                                <textarea id="message" name="message" placeholder={t('contact.messagePlaceholder')} data-error={t('contact.messageError')}></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ToastProvider>
        <div>
        <h1>Mon Formulaire</h1>
        <button onClick={captchaverif}>Soumettre</button>
        
    </div>
        </>
    );
};

export default Contact;
