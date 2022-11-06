import React from 'react';
import './App.css';
import { Navbar } from './components/LandingPage/Navbar';
import { Routes, Route, Outlet, redirect } from "react-router-dom";
import { Home } from './components/User/Home';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Profile } from './components/User/Profile';
import { BrowseMeals } from './components/User/BrowseMeals';
import { UserWeightEntries } from './components/User/UserWeightEntries';
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
