import React, { useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import Tooltip from '../tooltip/Tooltip';
import Navbar from './navbar/Navbar';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next' 

import './dashboard.css';

let token = "";

if (localStorage.getItem('authToken') !== null) {
    token = localStorage.getItem('authToken');
}

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const myDecodedToken = decodeToken(token);
  const [ isAdmin, setIsAdmin ] = useState(false)

  const navigate = useNavigate();

  const [smtpParams, setSmtpParams] = useState({
      host: '',
      port: '',
      username: '',
      password: '',
      id: '',
  });

  const handleGetEmailConfig = () => {
    fetch('http://api.wondersoftstudio.com/dashboard/getEmailConfig')
    .then(response => response.json())
    .then(data => {
      // Met à jour le state avec les données récupérées
      setSmtpParams({
          host: data.host || '',
          port: data.port || '',
          username: data.username || '',
          password: data.password || '',
          id: data._id || '',
      });
    })
    .catch(error => { 
      setMessage('Error retrieving configuration');       
      console.log(error);
    });
  };

  const handleSmtpParamsChange = async (e) => {
    e.preventDefault();
    try {
          // const response = await fetch('http://localhost:3030/dashboard/sendconf', {
          const response = await fetch('http://api.wondersoftstudio.com/dashboard/sendconf', {
              method: 'PUT',
              body: JSON.stringify({
                  host: e.target.host.value,
                  port: e.target.port.value,
                  username: e.target.username.value,
                  password: e.target.password.value,
                  id: e.target.id.value,
              }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const data = await response.json();
          if (!response.ok) {
              throw new Error(data.message);
          }
          setMessage(data.message);
          // navigate("/dashboard");
      } catch (error) {
          setMessage('Unable to connect to server');
          console.error('Erreur lors de la requête:', error.message);
      }
  };


  useEffect(() => {
    console.log(myDecodedToken);
      if (myDecodedToken !== null && myDecodedToken.admin) {
        handleGetEmailConfig();
        setIsAdmin(true);
      } else {
        navigate("/login");
      }
  }, []);       

  return (
    <div className='dashboard_container'>
      <Navbar />
      <div className='ms-3'>
        <h1 className="pt-4 text-2xl font-bold">Dashboard</h1>
        <div className='d-flex flex-column align-items-start justify-content-center'>
          <div className="loginform">
          {isAdmin ? 
                <div className="mt-8 p-4 bg-white shadow-md rounded-md vh-75 shadow">
                  <h3 className='mb-2 text-decoration-underline'>Configuration E-mail : </h3>
                  <form onSubmit={handleSmtpParamsChange}>
                    <input className="form-control" type="hidden" defaultValue={smtpParams.id} name="id"/>
                    <div className='ms-5'>
                      <div className="mb-4">
                        <label className="form-label">Host </label>
                        <input className="form-control" type="text" defaultValue={smtpParams.host} name="host"/>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Port </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={smtpParams.port}
                          name="port"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Username </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={smtpParams.username}
                          name="username"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Password </label>
                        <input
                          className="form-control"
                          type="password"
                          defaultValue={smtpParams.password}
                          name="password"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">Enregistrer</button>
                        <button className="btn btn-primary ms-3 position-relative" onClick={handleGetEmailConfig}>
                          <Tooltip
                            text = {'Rafraîchir les données'}
                            position = {'arrowbottom'}
                          />
                          <i className="fa-solid fa-rotate"></i>
                        </button>
                      
                    </div>
                  </form>
                  <div className='text-danger mt-2'>{message}</div>
                </div>
            :
            <h3>You are not an user admin, please contact your administrator.</h3>
          }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;