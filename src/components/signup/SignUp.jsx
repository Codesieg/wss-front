import React from 'react';
import { useNavigate } from "react-router-dom";

// import './about.css';


const SignUp = () => { 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        fetch('https://wondersoftstudio.com/signup', {
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
                    <label className="form-label" htmlFor="exampleCheck1">Login</label>
                    <input type="input" name="login" className="form-control" id="exampleCheck1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleCheck1">Vérification</label>
                    <input type="password" name="check" className="form-control" id="exampleCheck1"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </>
    );
};

export default SignUp;