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

//export const UserContext = React.createContext(user);

function App() {
  //const [theme, setTheme] = useState("light")
  //const value = { theme, setTheme }
  const {themeType} = useTheme();
  console.log(themeType);
  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/user" element={ <AuthenticateUser /> }>
          <Route path="/user/home" element={<Home />}></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
          <Route path="/user/meals" element={<BrowseMeals />}></Route>
          <Route path="/user/foods" element={<BrowseMeals />}></Route>
          <Route path="/user/weight" element={<UserWeightEntries />}></Route>
        </Route>

        <Route path="/admin" element={ <div><Outlet /></div> }>
          <Route path="/admin/users" element={<AdminUsers/>}></Route>
          <Route path="/admin/meals" element={<AdminMeals />}></Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
