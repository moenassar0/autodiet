import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/landing/Navbar';
import { Routes, Route, Outlet, redirect } from "react-router-dom";
import { Home } from './pages/user/Home';
import { LandingPage } from './pages/landing/LandingPage';
import { Login } from './pages/landing/Login';
import { Register } from './pages/landing/Register';
import { Profile } from './pages/user/Profile';
import { BrowseMeals } from './pages/user/BrowseMeals';
import { UserWeightEntries } from './pages/user/UserWeightEntries';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AuthenticateUser } from './components/user/AuthenticateUser';
import { AdminMeals } from './pages/admin/AdminMeals';
import { useTheme } from './context/ThemeContext'
import { useNotification } from './context/NotificationContext';
import { AdminFoods } from './pages/admin/AdminFoods';
import { Chatbox } from './pages/user/Chatbox';
import { AdminChat } from './pages/admin/AdminChat';
import { SlideTest } from './pages/user/SlideTest';
import { BrowseFoods } from './pages/user/BrowseFoods';
import { useUser } from './context/UserContext';
import { Landing } from './pages/landing/Landing';
import { AdminRecipes } from './pages/admin/AdminRecipes';

//export const UserContext = React.createContext(user);

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>

        <Route path="/user" element={ <AuthenticateUser /> }>
          <Route path="/user/home" element={<Home />}></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
          <Route path="/user/meals" element={<BrowseMeals />}></Route>
          <Route path="/user/foods" element={<BrowseFoods />}></Route>
          <Route path="/user/weight" element={<UserWeightEntries />}></Route>
          <Route path="/user/chat" element={<Chatbox />}></Route>
        </Route>

        <Route path="/admin" element={ <div><Outlet /></div> }>
          <Route path="/admin/users" element={<AdminUsers/>}></Route>
          <Route path="/admin/meals" element={<AdminMeals />}></Route>
          <Route path="/admin/foods" element={<AdminFoods />}></Route>
          <Route path="/admin/recipes" element={<AdminRecipes />}></Route>
          <Route path="/admin/chat" element={<AdminChat />}></Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
