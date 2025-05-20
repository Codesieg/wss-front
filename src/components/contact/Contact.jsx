import React, { useState, useEffect } from 'react';
import './contact.css';
import SectionTitle from '../sectionTitle/SectionTitle';
import { ToastProvider } from '../toastProvider/ToastProvider';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';
import config from '../../config';

const Contact = ({ joinUsFromChild, headerBottomFromChild }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ 
        msg: " ", 
        success: "hidden" 
    });
    const [recaptchaToken, setRecaptchaToken] = useState("");

    useEffect(() => {
        joinUsFromChild(false);
        headerBottomFromChild(false);
    }, [joinUsFromChild, headerBottomFromChild]);

    const pageTitleBlack = t('contact.getInTouch1');
    const pageTitleColor = t('contact.getInTouch2');
    const positionY = 3240;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate reCAPTCHA
        if (!recaptchaToken) {
            setMessage({
                msg: t('contact.recaptchaError') || 'Please complete the reCAPTCHA verification',
                success: 'text-danger'
            });
            return;
        }

        // Form validation
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const messageText = e.target.message.value.trim();

        if (!name || !email || !messageText) {
            setMessage({
                msg: t('contact.formError') || 'Please fill in all required fields',
                success: 'text-danger'
            });
            return;
        }

        setIsLoading(true);
        setMessage({ msg: " ", success: "hidden" });

        try {
            const response = await fetch(`${config.api.baseUrl}/send-email`, {
                method: 'POST',
                body: JSON.stringify({
                    message: messageText,
                    name: name,
                    email: email,
                    recaptchaToken: recaptchaToken
                }),
                headers: {
                    "Content-Type": "application/json",             
                }
            });

            const data = await response.json();
            
            setMessage({
                msg: data.msg,
                success: data.success ? 'text-success' : 'text-danger'
            });

            if (data.success) {
                // Reset form on success
                e.target.reset();
                setRecaptchaToken("");
                if (window.grecaptcha) {
                    window.grecaptcha.reset();
                }
            }
        } catch (error) {
            setMessage({
                msg: t('contact.errorMessage') || 'An error occurred. Please try again later.',
                success: 'text-danger'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <> 
        <Helmet>
            <title>{t('contact.pageTitle')}</title>
            <meta name="Contact" content={t('contact.pageDescription')} />
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
                            <div className="contactForm-content">
                                <div className='contactUsContainer'> 
                                    <div className="contactUs">
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            placeholder={t('contact.namePlaceholder')} 
                                            data-error={t('contact.nameError')}
                                            required
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="contactUs">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder={t('contact.emailPlaceholder')} 
                                            data-error={t('contact.emailError')}
                                            required
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    
                                    <p className="subtle">{t('contact.requiredField')}</p>
                                    
                                    <div className='form-submit-container'>
                                        <ReCAPTCHA
                                            sitekey={config.recaptchaSiteKey}
                                            onChange={setRecaptchaToken}
                                        />
                                        <button 
                                            type="submit" 
                                            id="sendMail" 
                                            className="button"
                                            disabled={isLoading || !recaptchaToken}
                                        >
                                            {isLoading ? t('contact.sending') || 'Sending...' : t('contact.sendMessage')}
                                        </button>
                                    </div>
                                    
                                    {message.msg && (
                                        <div className={message.success}>{message.msg}</div>
                                    )}
                                </div>

                                <div className="contactUs contactForm_message">
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        placeholder={t('contact.messagePlaceholder')} 
                                        data-error={t('contact.messageError')}
                                        required
                                    ></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ToastProvider>
        </>
    );
};

export default Contact;
