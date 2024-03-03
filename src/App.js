import './App.css';
import React, { useEffect, useContext, useState } from "react";
import AuthLayout from './layout/AuthLayout'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserProfile from './pages/user/UserProfile';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';


import { Toaster } from 'react-hot-toast';

//Econtext files
import { Econtext } from "./context/Econtext";
import Settings from './pages/user/Settings';
import AllPortfolio from './pages/user/AllPortfolio';


const App = () => {

  const {
    authState,
    authDispatch,
    login,
    logout,

    jobState,
    jobDispatch,
    loadJobCategories
  } = useContext(Econtext);
  const { user, ustate, isLoggedIn } = authState;
  const { jobCategories } = jobState;

  useEffect(() => {
    console.log("current auth state", authState);
    // authDispatch({ type: "AUTH_ERROR", payload: "Message changed" });
    // console.log("after auth state", ustate);
  }, [])


  return (
    <>
      {/* {ustate} */}
      <Toaster />

      <Routes>

        {/* is logged in ka check pehle hi lagana hai nhi to wapas login pr redirect kr deta hai */}
        {!isLoggedIn ? (
          <>
            <Route path='/' element={<AuthLayout />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>

          </>
        ) : (
          <>
            <Route path="/" element={<UserLayout />}>
              <Route path="" element={<HomePage />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="all-portfolio" element={<AllPortfolio />} />
              <Route path="user-settings" element={<Settings />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </>
        )}



      </Routes>
    </>
  );
}

export default App;
