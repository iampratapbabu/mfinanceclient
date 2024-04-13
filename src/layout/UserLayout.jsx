import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Container from 'react-bootstrap/Container';


const UserLayout = () => {
    return (
        <>
            <Header />
            <div className='container-main'>
            <Outlet />
            </div>
           
            {/* <Footer /> */}
        </>

    )
}

export default UserLayout