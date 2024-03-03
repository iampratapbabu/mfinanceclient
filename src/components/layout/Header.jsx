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

//Econtext files
import { Econtext } from '../../context/Econtext';

const Header = () => {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    const {authDispatch,logout} = useContext(Econtext);
    

    useEffect(() => {

    }, [])

    const logoutUi = () =>{
        try{
            logout();
            authDispatch({ type: "LOGOUT", payload: "Message changed" });            
            navigate('/login');
    
        }catch(err){
    
        }
    }

    const gotoHome = () =>{
        navigate('/')
    }
    


    return (
        <>
            <header>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand onClick={gotoHome}>TEJtech</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <NavDropdown title="Menu" id="basic-nav-dropdown" className='navbar-menu-dropdown'>
                                <NavDropdown.Item><Link to ='/profile'>Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to ='/user-settings'>Settings</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item> <Button onClick={logoutUi}>Log Out</Button></NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

        </>
    )
}

export default Header;