import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';


const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="footer"> 
                    <div className="container">
                        <div className="d-flex justify-content-center">                       
                            <p className="copyright"> © WondersoftStudio - Website by<a className="text-decoration-none" href="https://github.com/Codesieg"> Codesieg</a></p>
                        </div>
                    </div>
                    {/* <Link to="/login" className='nav-link fs-4 pb-1 fw-bold text-light'>Login</Link> */}
                </div>
            </footer>
        </>
    );
};

export default Footer;