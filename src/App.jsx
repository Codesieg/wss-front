import './css/styles.css';

import { React, useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';


import Header from './components/header/Header';
import Home from './components/home/Home';
import Team from './components/team/Team';
import Games from './components/games/Games';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';
import SocialNetwork from './components/socialNetwork/SocialNetwork';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboard/Dashboard'
import { isAuthenticated } from './components/dashboard/auth'; // Fonction pour vérifier l'authentification



function App() {
  const [joinUs, setJoinUS] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(false);

  // const isAuth = true;
  const isAuth = isAuthenticated();

  const joinUsOK = (joined) => {
      setJoinUS(joined)
  };

  const bottomLine = (color) => {
    setHeaderBottom(color)
  };

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
      <>
        <Router>
        <ScrollToTop />
          <Header 
            headerBottom = {headerBottom}
          />
          <SocialNetwork
             joinUs = {joinUs}
          />
          <Routes>
              <Route exact path="/" 
                element={ 
                  <Home 
                    joinUsFromChild = {joinUsOK}
                    headerBottomFromChild = {bottomLine}
                  />
                } 
              />
          </Routes>
          <div className="container">
            <Routes>
                <Route exact path="/team" 
                  element={
                    <Team 
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  } 
                />
                <Route path="/games" 
                  element={
                    <Games 
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                } 
                />
                <Route path="/services" 
                  element={
                    <Services 
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  } 
                />
                <Route path="/contact" 
                  element={
                    <Contact 
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  } 
                />
                <Route path="/404" 
                  element={
                    <Error
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  } 
                />
                <Route path="/login" 
                  element={
                    <Login
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  } 
                />
                <Route path="/signup" 
                  element={
                    <SignUp
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  } 
                />
             
             {/* { isAuth ?  */}
                {/* : <Route path="/signup" 
                element={
                  <SignUp
                  joinUsFromChild = {joinUsOK}
                  headerBottomFromChild = {bottomLine}
                  />
                } 
                />
              } */}

            </Routes>
          </div>
          <Routes>
              <Route 
              path="/dashboard" 
                element={
                  <Dashboard
                    joinUsFromChild = {joinUsOK}
                    headerBottomFromChild = {bottomLine}
                  />
                }
              />     
          </Routes>
        </Router>
        <Footer />
      </>
  );
}

export default App

{/* <Route
            path={path}
            exact={true}
            render={(props) => 
                hasRoles(roles) ? (
                    <Component {...props} />
                ) : (
                    isAuth() ? (
                        <Unauthorized />
                    ) : (
                        <Redirect to="/login" />
                    )
                )
            }
        /> */}