import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
    const [navLine, setnavLine] = useState(false);
    const [navBar, setNavBar] = useState(false);

const handleNavBar = () => {
    setNavBar(!navBar);
}

// passer en props l'endrois ou je me trouve pour souligner le menu


return (
        <>
            <div className="nav">
                <div className ="content-title">
                    <img className='logo' src= "/img/wondersoft_logo_white.png" />
                </div>
                <div className="content__nav">
                    <nav className={`${navBar ? 'hide-navbar' : 'show-navbar'}`}>
                        <ul className="menu__nav">
                            <li className={`${navLine ? 'menu__nav__item' : 'menu__nav__item menu__nav__line'}`}><a href="/" className="menu__nav__link"></a>Home</li>
                            <li className={`${navLine ? 'menu__nav__item' : 'menu__nav__item menu__nav__line'}`}><a href="/" className="menu__nav__link"></a>Pr0ject L0</li>
                            <li className={`${navLine ? 'menu__nav__item' : 'menu__nav__item menu__nav__line'}`}><a href="/" className="menu__nav__link"></a>About Us</li>
                            <li className={`${navLine ? 'menu__nav__item' : 'menu__nav__item menu__nav__line'}`}><a href="/" className="menu__nav__link"></a>Contact</li>
                        </ul>
                        <button onClick={handleNavBar} className="menu__nav__burger">
                            <span className="menu__nav__burger-bar"></span>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default Nav;