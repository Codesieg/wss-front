import { React, useState, useEffect  } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import SocialNetwork from './socialNetwork/SocialNetwork';
import { useLocation } from 'react-router-dom';

function Layout() {

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
        <header>
            <Header
              headerBottom = {headerBottom}
            />
        </header>
        <main>
            <SocialNetwork 
              joinUs = {joinUs}
            />
            <Outlet
              joinUsFromChild = {joinUsOK}
              headerBottomFromChild = {bottomLine}
            />
        </main>
        <footer>
            <Footer/>
        </footer>
    </>

  )
}

export default Layout