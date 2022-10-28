import React from 'react';
import './App.css';
import { LandingPageNavBar } from './Components/LandingPage/LandingPageNavBar';
import { Navbar } from './Components/LandingPage/Navbar';

function App() {
  return (
    <>
      <div className='translucent-overlay'></div>
      <Navbar />
      <div className='navbar-line'><hr></hr></div>
      <div className='hero-content'>
        <span className='hero-title'>AUTOMATE YOUR DIET</span>
        <span className='hero-subtitle'>You don't have to waste your time.<br></br>We'll do the work for you.</span>
        <span className='hero-description'>With a click of a button, generate the next<br />week’s entire meal plan and grocesseies list:</span>
        <img className='hero-image' src="../../hero.png"></img>
      </div>
    </>
  );
}

export default App;
