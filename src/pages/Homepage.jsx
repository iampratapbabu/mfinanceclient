import React, { useContext } from 'react';
import { Econtext } from '../context/Econtext';
import PortfolioStats from '../components/user/PortfolioStats';

const HomePage = () => {
  const {authState} = useContext(Econtext);
  const {user} = authState;
  return (
    <>
        <div>{user?.firstName}</div>
        <div>{user?.lastName}</div>
        <PortfolioStats/>

    </>
  )
}

export default HomePage;