import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import { BASE_URL } from '../../config';
import axios from 'axios';

import { LANGUAGES } from '../../lang';
import { useTranslation } from "react-i18next";
import { BsPersonFill } from "react-icons/bs";
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaHome, FaRupeeSign, FaUser } from "react-icons/fa";


import userimg from '../../assets/userimg.png';



//Econtext files
import { Econtext } from '../../context/Econtext';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { MdMenu, MdOutlineQueryStats, MdQueryStats } from 'react-icons/md';

const Header = () => {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    const { authDispatch, logout, authState } = useContext(Econtext);
    const { user } = authState;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);



    useEffect(() => {

    }, [])

    const logoutUi = () => {
        try {
            logout();
            authDispatch({ type: "LOGOUT", payload: "Message changed" });
            navigate('/login');

        } catch (err) {

        }
    }

    const gotoHome = () => {
        navigate('/')
    }



    return (
        <>
            <header>
                <Navbar className="navbar-custom">
                    <Navbar.Brand onClick={gotoHome}><h4>mFinance</h4></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Hi {user?.firstName} */}
                            <Button variant='light' onClick={() => setShow(true)}><MdMenu /></Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

                <Offcanvas className="sidebar" show={show} placement="end" onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>{ }</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='sidebar-main'>
                            <div className='img-block'>
                                <img src={`https://ui-avatars.com/api/?name=${user.firstName}&size=75`} height="50px" width="50px"></img>
                            </div>
                            <h4>{user?.firstName} {user?.lastName}</h4>
                            <hr />
                            <div className='links'>
                                <Link to='/' onClick={handleClose}><FaHome />Home</Link>
                                <Link to='/all-portfolio' onClick={handleClose}><FaRupeeSign />Portfolio</Link>
                                <Link to='/ask-mfinance' onClick={handleClose}><MdQueryStats />ask mFinance</Link>
                                <Link to='/user-settings' onClick={handleClose}><IoSettingsSharp />Settings</Link>
                                <Link to='/profile' onClick={handleClose}><FaUser />Profile</Link>

                                <hr />
                                <Button variant='danger' onClick={logoutUi}><IoIosLogOut />Log Out</Button>
                            </div>


                        </div>


                    </Offcanvas.Body>
                </Offcanvas>
            </header>

        </>
    )
}

export default Header;