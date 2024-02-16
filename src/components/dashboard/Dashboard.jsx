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

const Dashboard = () => {
  const [message, setMessage] = useState('');
    // const navigate = useNavigate();
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
        fetch('https://wondersoftstudio.com:8080/dashboard/getEmailConfig')
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
      }, []); 
      

const handleSmtpParamsChange = async (e) => {
  e.preventDefault();
  try {
        const response = await fetch('https://wondersoftstudio.com:8080/dashboard/sendconf', {
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
              <form onSubmit={handleSmtpParamsChange}>
                <input
                  className="form-control"
                  type="hidden"
                  defaultValue={smtpParams.id}
                  name="id"
                />
                <div className='ms-5'>
                  <div className="mb-4">
                    <label className="form-label">Host </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={smtpParams.host}
                      name="host"
                    />
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
                </div>
              </form>
              <div className='text-danger mt-2'>{message}</div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Dashboard;