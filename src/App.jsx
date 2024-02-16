import './css/styles.css';

import { React, useState, useEffect  } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { RouterProvider, createBrowserRouter, useRoutes } from 'react-router-dom';


// import Layout from './components/Layout';
import Home from './components/home/Home';
import Team from './components/team/Team';
import Games from './components/games/Games';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SocialNetwork from './components/socialNetwork/SocialNetwork';
// import { isAuthenticated } from './components/dashboard/auth'; // Fonction pour vérifier l'authentification


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'login',
//         element: <Login/>
//       },
//       {
//         path: 'signup',
//         element: <SignUp/>
//       },
//       {
//         path: 'games',
//         element: <Games/>
//       },
//       {
//         path: 'services',
//         element: <Services/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       },
//       {
//         path: 'dashboard',
//         element: <Dashboard/>
//       },
//       {
//         path: 'team',
//         element: <Team/>
//       },
//     ]
//   },
  
// ])



// function App() {

//   return (
//     <>
//       <RouterProvider router={router}/>
//     </>
//   )
// }


function App() {
  const [joinUs, setJoinUS] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(false);

  // const isAuth = true;
  // const isAuth = isAuthenticated();

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
                <Route 
                path="/dashboard" 
                  element={
                    <Dashboard
                      joinUsFromChild = {joinUsOK}
                      headerBottomFromChild = {bottomLine}
                    />
                  }
                /> 
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
        <Footer />
      </>
  );
}

export default App

