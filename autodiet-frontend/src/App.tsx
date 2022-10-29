import React from 'react';
import './App.css';
import { Navbar } from './Components/LandingPage/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/User/Home';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
