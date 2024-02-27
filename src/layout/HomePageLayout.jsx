import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";


const HomePageLayout = () => {
  return (
    <>
    <h1>Home Page Layout</h1>
    <Outlet/>
    </>
  )
}

export default HomePageLayout