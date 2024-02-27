import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Econtext } from '../../context/Econtext';
import toast from 'react-hot-toast';
import FullLoader from '../loader/FullLoader';
import { formValidation } from '../../helper/validator';

const Login = () => {

    return (
        <>
            Login
            <div>Don't have an Account? <Link to='/signup'>Sign up</Link></div>

        </>
    )
}

export default Login