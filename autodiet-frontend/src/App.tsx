import React from 'react';
import './App.css';
import { Navbar } from './Components/LandingPage/Navbar';
import { Routes, Route, Outlet, redirect } from "react-router-dom";
import { Home } from './Components/User/Home';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Profile } from './Components/User/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/user" element={ <div><Outlet /></div> }>
          <Route path="/user/home" element={<Home />}></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
