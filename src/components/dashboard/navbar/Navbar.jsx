import React from 'react';
import { useNavigate } from "react-router-dom";

import './navbar.css';


const Navbar = ({ activeSection, setActiveSection }) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }

    const handleSectionClick = (section) => {
        setActiveSection(section);
    }

    return (
        <aside className='dashboard__nav'>
            <div className='dashboard__avatar'>
                <img className="avatar" src="https://i.pravatar.cc/150?img=68" alt="" srcSet=""/><p>Nicolas Vidal</p>
            </div>
            <div className='dashboard__main'>
                <button 
                    className={`dashboard__main__item ${activeSection === 'email' ? 'dashboard__main__item--selected' : ''}`} 
                    onClick={() => handleSectionClick('email')}
                >
                    <i className="fa-solid fa-table-columns dashboard__main__icone"></i>E-mail
                </button>
                <button 
                    className={`dashboard__main__item ${activeSection === 'home' ? 'dashboard__main__item--selected' : ''}`} 
                    onClick={() => handleSectionClick('home')}
                >
                    <i className="fa-solid fa-house dashboard__main__icone"></i>Home
                </button>
                <button 
                    className={`dashboard__main__item ${activeSection === 'team' ? 'dashboard__main__item--selected' : ''}`} 
                    onClick={() => handleSectionClick('team')}
                >
                    <i className="fa-solid fa-people-group dashboard__main__icone"></i>Team
                </button>
                <button 
                    className={`dashboard__main__item ${activeSection === 'game' ? 'dashboard__main__item--selected' : ''}`} 
                    onClick={() => handleSectionClick('game')}
                >
                    <i className="fa-solid fa-gamepad dashboard__main__icone"></i>Game
                </button>
                <button 
                    className={`dashboard__main__item ${activeSection === 'user' ? 'dashboard__main__item--selected' : ''}`} 
                    onClick={() => handleSectionClick('user')}
                >
                    <i className="fa-solid fa-user dashboard__main__icone"></i>User
                </button>      
                <button 
                    className={`dashboard__main__item ${activeSection === 'settings' ? 'dashboard__main__item--selected' : ''}`} 
                    onClick={() => handleSectionClick('settings')}
                >
                    <i className="fa-solid fa-gear dashboard__main__icone"></i>Settings
                </button>
                <button className='dashboard__main__item' onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket dashboard__main__icone"></i>Logout
                </button> 
            </div>
        </aside>
    );
};

export default Navbar;
