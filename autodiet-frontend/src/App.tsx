import React from 'react';
import './App.css';
import { Navbar } from './components/landing/Navbar';
import { Routes, Route, Outlet, redirect } from "react-router-dom";
import { Home } from './components/user/Home';
import { LandingPage } from './components/landing/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Profile } from './components/user/Profile';
import { BrowseMeals } from './components/user/BrowseMeals';
import { UserWeightEntries } from './components/user/UserWeightEntries';
import { AdminHome } from './components/AdminHome';

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
          <Route path="/user/meals" element={<BrowseMeals />}></Route>
          <Route path="/user/foods" element={<BrowseMeals />}></Route>
          <Route path="/user/weight" element={<UserWeightEntries />}></Route>
        </Route>

        <Route path="/admin" element={ <div><Outlet /></div> }>
          <Route path="/admin/home" element={<AdminHome />}></Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
