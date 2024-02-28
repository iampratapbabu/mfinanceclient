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
  const { user,ustate, isLoggedIn } = authState;
  const { jobCategories } = jobState;

  useEffect(()=>{
    // console.log("current auth state", authState);
    // authDispatch({ type: "AUTH_ERROR", payload: "Message changed" });
    // console.log("after auth state", ustate);
  },[])


  return (
    <>
    {/* {ustate} */}
      <Toaster />

      <Routes>
        {
          isLoggedIn ? (
            <>
              <Route path="/" element={<UserLayout />}>
              <Route path="" element={<HomePage />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<AuthLayout />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>

              <Route path="*" element={<Navigate to="/login" replace={true} />} />
            </>
          )
        }
      </Routes>
    </>
  );
}

export default App;
