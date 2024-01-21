import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './teams.css';




const Teams = ()=> {
    const navigate = useNavigate();
    const [menbersTeam, setMembersTeam] = useState({
        img: '',
        description: '',
        linkedin: '',
        twitch: '',
        id: '',
    });

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // Effectue une requête pour récupérer la configuration depuis la base de données MongoDB
        fetch('http://localhost:8080/dashboard/getMembersTeams')
          .then(response => {
            // Met à jour le state avec les données récupérées
            setTeams(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la configuration', error);
          });
      }, []); 
      

const handleSetMembersTeamChange = async (key, value) => {
    setSmtpParams({ ...smtpParams, [key]: value });
    try {
        const response = await fetch('http://localhost:8080/dashboard/setTeams', {
            method: 'PUT',
            body: JSON.stringify({
                img: smtpParams.host,
                description: smtpParams.port,
                linkedin: smtpParams.username,
                twitch: smtpParams.password,
                facebook: smtpParams.id,

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
        <div className='d-flex flex-column align-items-start justify-content-center'>
          <div className="loginform">
            <div className="mt-8 p-4 bg-white shadow-md rounded-md vh-75">
              <h3 className='mb-2 text-decoration-underline'>Teams</h3>
                <input
                  className="form-control"
                  type="hidden"
                  value={setMembersTeam.id}
                />
                <div className='ms-5'>
                  <div className="mb-4">
                    <label className="form-label">Host </label>
                    <input
                      className="form-control"
                      type="text"
                      value={setMembersTeam.img}
                      onChange={(e) => handleSetMembersTeamChange('img', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Port </label>
                    <input
                      className="form-control"
                      type="text"
                      value={setMembersTeam.description}
                      onChange={(e) => handleSetMembersTeamChange('description', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Username </label>
                    <input
                      className="form-control"
                      type="text"
                      value={setMembersTeam.linkedin}
                      onChange={(e) => handleSetMembersTeamChange('linkedin', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Password </label>
                    <input
                      className="form-control"
                      type="password"
                      value={setMembersTeam.twitch}
                      onChange={(e) => handleSetMembersTeamChange('password', e.target.value)}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Teams;