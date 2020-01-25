// Mac push test
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import About from './screens/About';
import GetInvolved from './screens/GetInvolved';
import Media from './screens/Media';
import Community from './screens/Community';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className='constrainer'>
        <Navigation active={active} setActive={setActive} />
        <div className={active === true ? 'mobile-nav' : 'desktop-nav'}>
          <a className='a-cur-show-mobile' href="https://www.artful.ly/store/events/19824" target="_blank" rel='noopener noreferrer'>
          <div className='current-show'>
            <h2>ASSASSINS</h2>
            {/* <p>FEB 14 - FEB 22</p> */}
            <div className='cur-show-inner'>
              <p>FEB 14 - FEB 22 &#8226;</p>
              <i className="fas fa-ticket-alt"></i>
            </div>
          </div>
          </a>
          <a href='#Home' onClick={() => setActive(false)}>
            <h3>Home</h3>
          </a>
          <a href='#About' onClick={() => setActive(false)}>
            <h3>About</h3>
          </a>
          <a href='#Get-Involved' onClick={() => setActive(false)}>
            <h3>Get Involved</h3>
          </a>
        </div>
        {/* <div className={active === true ? 'desktop-nav' : 'display'}> */}
        <div>
          <Home></Home>
          <About></About>
          <Community></Community>
          <GetInvolved></GetInvolved>
          {/* <Community></Community> */}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
