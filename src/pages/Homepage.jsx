import React, { useContext } from 'react';
import { Econtext } from '../context/Econtext';
import PortfolioStats from '../components/user/PortfolioStats';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {authState} = useContext(Econtext);
  const {user} = authState;

  const funToRun = (param) =>{
    console.log("reverse ran from child component with param",param);
  }

  return (
    <>
        <div>{user?.firstName} {user?.lastName}</div>
        <PortfolioStats custom={"this is custom prop"} funProp={funToRun}/>
        <Link to='/all-portfolio'>All Portfolio</Link>


    </>
  )
}

export default HomePage;