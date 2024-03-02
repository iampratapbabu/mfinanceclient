import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import FullLoader from '../loader/FullLoader';
import { formValidation } from '../../helper/validator';
import { titleCase } from '../../helper/stringMethods';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from '../../components/loader/FullLoader';
import { Econtext } from '../../context/Econtext';


const Login = () => {
    const navigate = useNavigate();


    const { authState, authDispatch, login, } = useContext(Econtext);
    const { authError } = authState;

    const [loginInfo, setLoginInfo] = useState({
        userid: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await login(loginInfo);
        //console.log("login response",res);
        if (res.success) {
            localStorage.setItem('token', res.resData.token);
            authDispatch({ type: "LOGIN", payload: res.resData.user })
            navigate('/');
            toast.success("Welcome "+res.resData.user.firstName);
            setLoading(false);
        } else {
            setLoading(false);
            console.log(res.message);
            if (res.response) {
                toast.error(titleCase(res.response.data.message));
            }else{
                toast.error("Login Failed "+titleCase(res.message));
            }
        }
    }

    if (loading) { return <Loader type={"blocks"} /> }
    return (
        <>
            <section>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="userid" type="text" placeholder="Enter email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" type="password" placeholder="Enter Password" onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Don't Have an account <Link to='/signup'>Signup</Link></p>

            </section>

        </>
    )
}

export default Login