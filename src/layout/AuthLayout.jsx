import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer'
import Container from 'react-bootstrap/Container';


const AuthLayout = () => {
    return (
        <>
            <Container>
            <Outlet />
            <Footer/>
            </Container>
        </>

    )
}

export default AuthLayout