import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import Now from './components/Now';
import About from './screens/About';
import Community from './screens/Community';
import GetInvolved from './screens/GetInvolved';
import ConstantContact from './components/ConstantContact'
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
          <a className='a-cur-show-mobile' href="https://www.artful.ly/ensemble-theatre-of-chattanooga/store/events/19935" target="_blank" rel='noopener noreferrer'>
          <div className='current-show'>
            <h2>FROZEN</h2>
            {/* <p>FEB 14 - FEB 22</p>  Example date format*/}
            <div className='cur-show-inner'>
              <p>POSTPONED &#8226;</p>
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
        <div>
          <Home></Home>
          <Now></Now>
          <About></About>
          <Community></Community>
          {/* <Spectrum></Spectrum> */}
          <GetInvolved></GetInvolved>
          {/* <ConstantContact></ConstantContact> */}
          <Footer></Footer>
          <div className='ctct-wrapper'>
          <div class="ctct-inline-form" data-form-id="bda91dd1-8f12-4bb5-8921-ab1500c7c778"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
