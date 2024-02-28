import React, { useContext } from 'react';

import { Econtext } from '../context/Econtext';

const HomePage = () => {
  const {authState} = useContext(Econtext);
  const {user} = authState;
  return (
    <>
        <div>{user?.firstName}</div>
        <div>{user?.lastName}</div>

    </>
  )
}

export default HomePage;