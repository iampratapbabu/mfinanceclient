import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Container from 'react-bootstrap/Container';


const UserLayout = () => {
    return (
        <>
            <Header />
            <Container>
            <Outlet />
            {/* <Footer /> */}
            </Container>
        </>

    )
}

export default UserLayout