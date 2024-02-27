import React, { useReducer, useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from '../config';
import { Link, useNavigate } from 'react-router-dom';

import { login, logout } from './functions/Authfunctions';
import { loadJobCategories } from './functions/Jobfunctions';

import { authReducer, initialAuthState } from './reducers/Authreducer';
import { jobReducer, initialJobState } from './reducers/Jobreducer';


export const Econtext = React.createContext();

export const Eprovider = (props) => {
    const navigate = useNavigate();
    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
    const [jobState, jobDispatch] = useReducer(jobReducer, initialJobState);

    useEffect(() => {
        //loadUser();
        if (localStorage.getItem('eduToken')) {
            let dummyUser = {
                "token": "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQURNSU4iLCJ2YWxpZGZvciI6MTY5Mzg1NDM1NTAwNCwidXNlcm5hbWUiOiI4MTMwODE3MDgxIiwic3ViIjoiODEzMDgxNzA4MSIsImlhdCI6MTY5Mzg0NzE1NSwiZXhwIjoxNjkzODU0MzU1fQ.V8sjVQsxeO5TSbecp8GpjGsfWmBGd-swOn28pXHzlmfs_E3dSmAteF4xHNrm9cr-p-7DQ4SXl-rNsT9ruopiZQ",
                "accessToken": "22929f1c-6780-4bd2-af93-af0e48430a5b",
                "message": "Login success!",
                "userID": "8130817081",
                "userName": "8130817081",
                //recruiter,candidate
                "roles": [
                    "ADMIN",
                ],
                "currentRole":"candidate"
            }
            authDispatch({ type: "LOGIN", payload: dummyUser });
        }
        console.log("Econtext runs");
    }, [])

    const loadUser = async () => {
        try {
            let token = localStorage.getItem('eduToken');
            if (!token) {
                console.log("No token found logging out");
                authDispatch({ type: "LOGOUT" });
                navigate('/login');
                return false;
            }
            console.log("loadUser admin runs");
            const axiosRes = await axios({
                method: "GET",
                headers: { 'x-access-token': localStorage.getItem('token') },
                url: `${BASE_URL}/users/protect?type=super-admin`,
            });
            if (axiosRes.data) {
                console.log("loadUser [SUCCESS]", axiosRes.data);
                authDispatch({ type: "ADMIN_LOADED", payload: axiosRes.data });
            } else {
                authDispatch({ type: "LOGOUT" });
                navigate('/login');
            }
            // return axiosRes?.data;
        } catch (err) {
            authDispatch({ type: "LOGOUT" });
            navigate('/login');
            console.log("loadUser [ERROR]", err)
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