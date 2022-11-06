import React from 'react';
import './App.css';
import { Navbar } from './components/landing/Navbar';
import { Routes, Route, Outlet, redirect } from "react-router-dom";
import { Home } from './pages/user/Home';
import { LandingPage } from './pages/landing/LandingPage';
import { Login } from './pages/landing/Login';
import { Register } from './pages/landing/Register';
import { Profile } from './pages/user/Profile';
import { BrowseMeals } from './pages/user/BrowseMeals';
import { UserWeightEntries } from './components/user/UserWeightEntries';
import { AdminHome } from './pages/admin/AdminHome';

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
