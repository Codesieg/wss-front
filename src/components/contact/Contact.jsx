import React, { useState } from 'react';

import './contact.css';

import SectionTitle from '../sectionTitle/SectionTitle';
import { ToastProvider } from '../toastProvider/ToastProvider';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from "react-google-recaptcha";


const Contact = ({joinUsFromChild, headerBottomFromChild}) => {
    const [message, setMessage] = useState([
        { 
            msg: " ", 
            success: "hidden" 
        },
    ]);

    const [recaptchaToken, setRecaptchaToken] = useState(""); // Ajout pour stocker le token ReCAPTCHA


    joinUsFromChild(false);
    headerBottomFromChild(false);

    const pageTitleBlack = 'Get In ';
    const pageTitleColor = 'Touch';
    const positionY = 3240;

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // fetch('http://api.wondersoftstudio.com/send-email', {
        fetch('https://localhost:3030/send-email', {
            method: 'POST',
            body: JSON.stringify({
                message: e.target.message.value, // Envoyer les données du formulaire
                name: e.target.name.value,
                email: e.target.email.value,
                recaptchaToken: recaptchaToken // Inclure le token ReCAPTCHA
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
            <title>Contact</title>
            <meta name="Contact" content="Contact" />
            {/* Autres balises meta */}
        </Helmet>
        <ToastProvider>
            <div className="contact large-margin">
                <SectionTitle
                    pageTitleBlack =  {pageTitleBlack}
                    pageTitleColor =  {pageTitleColor}
                    positionY = {positionY}
                />
                <div>
                    <div className="row mb-3">
                        <div className="col-md-11">
                            <p className='mx-0'>For any questions about the studio, our services, or our games, please fill out the form below.</p>
                        </div>
                    </div>
                    <div>
                        {/* <div className="col-md-6"> */}

                            <h2 className="short-hr-left mb-3">LEAVE US A MESSAGE</h2>
                            <form onSubmit={handleSubmit} className="contactForm" data-toggle="validator">
                                <div className='contactUsContainer'> 
                                    <div className="contactUs">
                                        <input type="text" id="name" name="name" placeholder="Name*" data-error="Name is required"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="contactUs">
                                        <input type="email" id="email" name="email" placeholder="Email*" data-error="Email is required"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                        <p className="subtle">* required field</p>
                                        <button type="submit" id="sendMail" className="button" >SEND MESSAGE</button>
                                        <ReCAPTCHA
                                            sitekey="6Le08qMpAAAAAJ82W7z9WIBf8PR_Z33CKwMYpBIK"
                                            onChange={(token) => setRecaptchaToken(token)}
                                        />
                                    <div className={message.success}>{message.msg}</div>
                                </div>

                                <div className="contactUs contactForm_message">
                                    <textarea id="message" name="message" placeholder="Message*" data-error="Message cannot be empty"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </form>
                        {/* </div> */}
                        {/* <div className="col-md-6">
                            <h2 className="short-hr-left">OUR DETAILS</h2>
                            <div className="contact-info">
                                <ul>
                                    <li><i className="fa fa-phone"></i><p>Phone: <span className="colored"><a href="tel:">+33 63 55 85 50 </a></span></p></li>
                                    <li><i className="fa fa-envelope"></i><p>Email: <span className="colored"><a href="mailto:office@example.com">office@example.com</a></span></p></li>
                                    <li><i className="fa fa-globe"></i><p>Website: <span className="colored"><a href="" target="_blank">www.wondersoftstudio.com</a></span></p></li>
                                    <li><i className="fa fa-map-marker"></i><p>Address: <span className="colored">Grenoble</span></p></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </ToastProvider>
        </>
    );
};

export default Contact;