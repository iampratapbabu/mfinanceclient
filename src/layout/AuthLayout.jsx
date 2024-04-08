import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer'
import Container from 'react-bootstrap/Container';


const AuthLayout = () => {
    return (
        <>

            <div className='auth-layout'>
                <h4>mFinance</h4>
                <Outlet />
                <Footer />
            </div>
        </>

    )
}

export default AuthLayout