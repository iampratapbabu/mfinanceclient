import React, { useReducer, useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from '../config';
import { Link, useNavigate } from 'react-router-dom';

import { login, logout,register } from './functions/Authfunctions';
import { loadJobCategories } from './functions/Jobfunctions';

import { authReducer, initialAuthState } from './reducers/Authreducer';
import { jobReducer, initialJobState } from './reducers/Jobreducer';


export const Econtext = React.createContext();

export const Eprovider = (props) => {
    const navigate = useNavigate();
    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
    const [jobState, jobDispatch] = useReducer(jobReducer, initialJobState);

    useEffect(() => {
        console.log("Econtext Runs API using",BASE_URL);
        loadUser();
    }, [])

    const loadUser = async () => {
        try {
            let token = localStorage.getItem('token');
            if (!token) {
                console.log("No token found logging out");
                authDispatch({ type: "LOGOUT" });
                navigate('/login');
                return false;
            }

            const axiosRes = await axios({
                method: "GET",
                headers: { 'x-access-token': localStorage.getItem('token') },
                url: `${BASE_URL}/api/users/getme`,
            });
            console.log(axiosRes.data);
            if (axiosRes.data) {
                console.log("loadUser [SUCCESS]", axiosRes.data);
                authDispatch({ type: "USER_LOADED", payload: axiosRes.data.resData });
                navigate('/');
            } else {
                authDispatch({ type: "LOGOUT" });
                navigate('/login');
            }
            return axiosRes?.data;
        } catch (err) {
            console.log("loadUser [ERROR]", err);
            authDispatch({ type: "LOGOUT" });
            navigate('/login');
        }
    }

    return (
        <Econtext.Provider
            value={{
                // auth Reducer state
                authState,
                authDispatch,
                // auth global functions
                login,
                register,
                logout,
                loadUser,

                //job Reducer state
                jobState,
                jobDispatch,
                //job global function,
                loadJobCategories

            }}
        >
            {props.children}
        </Econtext.Provider>
    );

}