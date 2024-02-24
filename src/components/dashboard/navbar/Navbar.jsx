import React from 'react';
import { useNavigate } from "react-router-dom";

import './navbar.css';


const Navbar = () => {

    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }

    return (
        <aside className='dashboard__nav'>
            <div className='dashboard__avatar'>
                <img className="avatar" src="https://i.pravatar.cc/150?img=68" alt="" srcset=""/><p>Nicolas Vidal</p>
            </div>
            <div className='dashboard__main'>
                <a className='dashboard__main__item dashboard__main__item--selected' href=""><i className="fa-solid fa-table-columns dashboard__main__icone"></i>E-mail</a>
                <a className='dashboard__main__item ' href=""><i className="fa-solid fa-house dashboard__main__icone"></i>Home</a>
                <a className='dashboard__main__item' href=""><i className="fa-solid fa-people-group dashboard__main__icone"></i>Team</a>
                <a className='dashboard__main__item' href=""><i className="fa-solid fa-gamepad dashboard__main__icone"></i>Game</a>
                <a className='dashboard__main__item' href=""><i className="fa-solid fa-user dashboard__main__icone"></i>User</a>      
                <a className='dashboard__main__item' href=""><i className="fa-solid fa-gear dashboard__main__icone"></i>Settings</a>
                <a className='dashboard__main__item' onClick={logout}><i className="fa-solid fa-right-from-bracket dashboard__main__icone"></i>Logout</a> 
            </div>
        </aside>
    );
};

export default Navbar;