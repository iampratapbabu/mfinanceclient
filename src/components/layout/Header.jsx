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



//Econtext files
import { Econtext } from '../../context/Econtext';

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
                    <Container>
                        <Navbar.Brand onClick={gotoHome}><h4>mFinance</h4></Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {/* Hi {user?.firstName} */}
                                <Button variant='light' onClick={()=>setShow(true)}><BsPersonFill /></Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Offcanvas className="sidebar" show={show} placement="end" onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>SideBar</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Link to='/all-portfolio'>All Portfolio</Link>

                    <Button variant='light' onClick={logoutUi}>Log Out</Button>

                    </Offcanvas.Body>
                </Offcanvas>
            </header>

        </>
    )
}

export default Header;