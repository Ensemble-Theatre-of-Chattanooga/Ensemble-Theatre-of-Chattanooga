import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import About from './screens/About';
import GetInvolved from './screens/GetInvolved';
import Community from './screens/Community';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className='constrainer'>
        <Navigation />
        <Home></Home>
        <About></About>
        <GetInvolved></GetInvolved>
        <Community></Community>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
