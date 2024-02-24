import React from 'react';
import { useNavigate } from "react-router-dom";

// import './about.css';


const SignUp = () => { 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        fetch('http://api.wondersoftstudio.com/signup', {
        // fetch('http://localhost:3030/signup', {
            method: 'POST',
            body: JSON.stringify({
                login: e.target.login.value, // Envoyer les données du formulaire
                email: e.target.email.value,
                password: e.target.password.value,
                check: e.target.check.value, // verification du password
            }),
             headers: {
                "Content-Type": "application/json",             
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        });
        navigate("/");

    }


    return (
        <>
            <form onSubmit={handleSubmit} className='mt-5 pt-5'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="login">Login</label>
                    <input type="input" name="login" className="form-control" id="login"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword"  className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="InputPassword"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="check">Vérification</label>
                    <input type="password" name="check" className="form-control" id="check"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </>
    );
};

export default SignUp;