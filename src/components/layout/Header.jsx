import React, { useContext, useEffect, useState } from 'react';
import { Econtext } from '../../context/Econtext';
import { Link, useNavigate } from 'react-router-dom';

import { BASE_URL } from '../../config';
import axios from 'axios';

import { LANGUAGES } from '../../lang';
import { useTranslation } from "react-i18next";



const Header = () => {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    useEffect(() => {

    }, [])


    return (
        <>
            <header>
                <h2>Header</h2>
                <Link to='/'><img src={""} />Brandlogo header</Link>
                <nav>
                    
                </nav>
            </header>

        </>
    )
}

export default Header;