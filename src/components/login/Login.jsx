import React from 'react';
import { useNavigate } from "react-router-dom";

import './login.css';


const Login = ({joinUsFromChild, headerBottomFromChild}) => { 
    const navigate = useNavigate();
    joinUsFromChild(false);
    headerBottomFromChild(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                body: JSON.stringify({
                    login: e.target.login.value,
                    password: e.target.password.value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Erreur lors de l\'authentification');
            }
    
            const data = await response.json();
            localStorage.setItem("authToken", data.token);    
             if (!data.admin) {
                 navigate("/home");
             } else {
                //   création du authtoken
                //   Authentification réussie, rediriger vers la page de tableau de bord
                 navigate("/dashboard");
             }
        } catch (error) {
            console.error('Erreur lors de la requête:', error.message);
        }
    };
    
    return (
        <div className='mt-5 pt-5 d-flex flex-column align-items-center justify-content-center loginform'>
            <form onSubmit={handleSubmit} className='px-3 py-3 w-25 bg-secondary rounded'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleCheck1">Login</label>
                    <input type="input" name="login" className="form-control" id="exampleCheck1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;