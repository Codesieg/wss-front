import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './dashboard.css';


// const pages = [
//   { id: 1, name: 'Home' },
//   { id: 2, name: 'About' },
//   { id: 3, name: 'Services' },
//   { id: 4, name: 'ProjectLo' },
//   { id: 5, name: 'Contact' },
// ];

// const stats = {
//   Home: { clickRate: '75%', bounceRate: '25%' },
//   About: { clickRate: '65%', bounceRate: '35%' },
//   Services: { clickRate: '80%', bounceRate: '20%' },
//   ProjectLo: { clickRate: '80%', bounceRate: '20%' },
//   Contact: { clickRate: '90%', bounceRate: '10%' },
// };

const Dashboard = ()=> {
    const navigate = useNavigate();
    // const [selectedPage, setSelectedPage] = useState(pages[0]);
    const [smtpParams, setSmtpParams] = useState({
        host: '',
        port: '',
        username: '',
        password: '',
        id: '',
    });

    useEffect(() => {
        // Effectue une requête pour récupérer la configuration depuis la base de données MongoDB
        fetch('http://localhost:8080/dashboard/getEmailConfig')
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
            console.error('Erreur lors de la récupération de la configuration', error);
          });
      }, []); 
      
      useEffect(() => {
        
      })

const handleSmtpParamsChange = async (key, value) => {
    setSmtpParams({ ...smtpParams, [key]: value });
    try {
        const response = await fetch('http://localhost:8080/dashboard/sendconf', {
            method: 'PUT',
            body: JSON.stringify({
                host: smtpParams.host,
                port: smtpParams.port,
                username: smtpParams.username,
                password: smtpParams.password,
                id: smtpParams.id,

            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'enregistrement des paramêtres');
        }

        navigate("/dashboard");
    } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
    }
};

  return (
    <>
      <h1 className="mt-5 pt-5 text-2xl font-bold">Dashboard</h1>
        <div className='d-flex flex-column align-items-start justify-content-center'>
          <div className="loginform">
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white shadow-md rounded-md">
                <div className="text-lg font-semibold mb-2">Click Rate</div>
                <select
                  className="p-2 mb-2 border border-gray-300 rounded-md outline-none"
                  value={selectedPage.id}
                  onChange={(e) => setSelectedPage(pages.find((page) => page.id === parseInt(e.target.value)))}
                >
                  {pages.map((page) => (
                    <option key={page.id} value={page.id}>
                      {page.name}
                    </option>
                  ))}
                </select>
                <div className="text-4xl font-bold">{stats[selectedPage.name].clickRate}</div>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md">
                <div className="text-lg font-semibold mb-2">Bounce Rate</div>
                <select
                  className="p-2 mb-2 border border-gray-300 rounded-md outline-none"
                  value={selectedPage.id}
                  onChange={(e) => setSelectedPage(pages.find((page) => page.id === parseInt(e.target.value)))}
                >
                  {pages.map((page) => (
                    <option key={page.id} value={page.id}>
                      {page.name}
                    </option>
                  ))}
                </select>
                <div className="text-4xl font-bold">{stats[selectedPage.name].bounceRate}</div>
              </div>
            </div> */}
            <div className="mt-8 p-4 bg-white shadow-md rounded-md vh-75">
              <h3 className='mb-2 text-decoration-underline'>Configuration mail</h3>
                <input
                  className="form-control"
                  type="hidden"
                  value={smtpParams.id}
                  onChange={(e) => handleSmtpParamsChange('host', e.target.value)}
                />
                <div className='ms-5'>
                  <div className="mb-4">
                    <label className="form-label">Host </label>
                    <input
                      className="form-control"
                      type="text"
                      value={smtpParams.host}
                      onChange={(e) => handleSmtpParamsChange('host', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Port </label>
                    <input
                      className="form-control"
                      type="text"
                      value={smtpParams.port}
                      onChange={(e) => handleSmtpParamsChange('port', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Username </label>
                    <input
                      className="form-control"
                      type="text"
                      value={smtpParams.username}
                      onChange={(e) => handleSmtpParamsChange('username', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Password </label>
                    <input
                      className="form-control"
                      type="password"
                      value={smtpParams.password}
                      onChange={(e) => handleSmtpParamsChange('password', e.target.value)}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Dashboard;