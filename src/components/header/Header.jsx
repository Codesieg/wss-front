import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from  "framer-motion";

import './header.css';

// let isLogin = false;

// if (localStorage.getItem('authToken') !== null) {
    //    isLogin = true;
    // }
    
    const Header = ({headerBottom}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [navBar, setNavBar] = useState(false);
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = useState(false);
 
    // Adds a class to the navbar when scrolling down and removes it when scrolling up
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!navBar){
            const previous = scrollY.getPrevious();
            if (latest > previous && latest > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    });
    
    const handleNavBar = () => {
        setScrolled(false);
        setNavBar(!navBar);
    }

    useEffect(() => {
        if (localStorage.getItem('authToken') !== null) {
            // isLogin = true;
            setIsLogin(true);
            console.log("in re-render");
        }    
        console.log("out re-render");
   
    }, [])
    
    return (
        <>
        <header className="main-header">
            
                <motion.nav 
                    variants = {headerBottom ?  {notScrolled: {backgroundColor: "white", backdropFilter: "blur(2px)", borderBottom: "1px solid #E84118"},
                    scrolled: { backgroundColor: "inherit", backdropFilter: "blur(3px)", borderBottom: "1px solid #E84118"}}:     {       
                        notScrolled: {backgroundColor: "white", backdropFilter: "blur(2px)"},
                        scrolled: { backgroundColor: "inherit", backdropFilter: "blur(3px)", borderBottom: "1px solid #E84118"},
                    }}
                animate = {scrolled ? "scrolled" : "notScrolled"}
                className={`${navBar ? 'hide-navbar fixed-top bg-dark'  : 'navbar fixed-top navbar-expand-lg navbar-light'}`}>
                    <div className="container-fluid me-lg-5">
                        <Link  to="/" className= "logo navbar-brand h-25">
                            <img className="img-fluid" width="80" src="./img/wondersoft_black.png" alt="site logo"/>
                        </Link>
                        <button onClick={handleNavBar} className= "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>                
                        <div className={`${navBar ? 'justify-content-end' : 'collapse navbar-collapse justify-content-end'}`}>
                        
                            <ul className={`${navBar ? 'hide-navbar-content ' : 'navbar-nav ml-auto'}`}>
                                <li className="nav-item active">
                                   {navBar 
                                        ? <Link to="/" onClick={handleNavBar}  className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Home</Link>
                                        : <Link to="/" className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link pb-1 fw-bold'}`}>Home</Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    {navBar 
                                        ? <Link to="/team" onClick={handleNavBar} className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>About Us</Link>
                                        : <Link to="/team" className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>About Us</Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    {navBar 
                                        ? <Link to="/services" onClick={handleNavBar} className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Our services</Link>
                                        : <Link to="/services" className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Our services</Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    {navBar 
                                        ? <Link to="/games" onClick={handleNavBar} className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Project L<span className="zero">0</span></Link>
                                        : <Link to="/games" className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Project L<span className="zero">0</span></Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    {navBar 
                                        ? <Link to="/contact" onClick={handleNavBar} className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Contact</Link>
                                        : <Link to="/contact" className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>Contact</Link>
                                    }
                                </li>

                             { isLogin ?   
                                    <li className="nav-item">
                                            {navBar 
                                                ? <Link to="/dashboard" onClick={handleNavBar} className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>My account</Link>
                                                : <Link to="/dashboard" className={`${navBar ? 'nav-link fs-3 pb-1 fw-bold text-light' : 'nav-link  pb-1 fw-bold'}`}>My account</Link>
                                            }
                                    </li>
                                : null
                            }
                                
                            </ul>
                        </div>
                    </div>  
                </motion.nav>
            </header> 
        </>
    );
};

export default Header;