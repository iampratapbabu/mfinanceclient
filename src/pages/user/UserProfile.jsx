import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Econtext } from '../../context/Econtext';





const UserProfile = () => {

  const { authDispatch, logout, authState } = useContext(Econtext);
  const { user } = authState;




  useEffect(() => {
  }, [])





  return (
    <>

      <div className='user-profile'>
      {/* <img src={`https://ui-avatars.com/api/?name=${user.firstName}&size=100`} height="75px" width="75px"></img> */}
        <div className='box-end'>
          <div className=''>
            <h6>Name</h6>
          </div>
          <div className=''>
            <h5> {user?.firstName}{" "}{user?.lastName}</h5>
          </div>
        </div>
        <div className='box-end'>
          <div className=''>
            <h6>Email</h6>
          </div>
          <div className=''>
            <h5>{user?.email}</h5>
          </div>
        </div>
        <div className='box-end'>
          <div className=''>
            <h6>Phone</h6>
          </div>
          <div className=''>
            <h5>+{user?.countryCode} {user?.phone}</h5>
          </div>
        </div>
        <div className='box-end'>
          <div className=''>
            <h6>Gender</h6>
          </div>
          <div className=''>
            <h5> {user?.gender}</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default UserProfile