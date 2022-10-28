import React from 'react';
import './App.css';
import { LandingPageNavBar } from './Components/LandingPage/LandingPageNavBar';
import { Overlay } from './Components/Overlay';

function App() {
  return (
    <>
      <div className='translucent-overlay'></div>
      <div className='navbar'>
        <div className='navbar-icon'></div>
        <ul>
          <li>Why use AutoDiet?</li>
          <li>Features</li>
          <li>Features</li>
        </ul>
        <div className='navbar-register'>
          <button>Sign Up</button>
          <span>Already have an account? Login.</span>
        </div>
      </div>
    </>
  );
}

export default App;
