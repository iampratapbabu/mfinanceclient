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
import brandLogo from '../../assets/mfinance.png'


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
        if (loginInfo.userid == "" || loginInfo.password == "") {
            toast.error("Please Input Required Values");
        } else {
            setLoading(true);
            const res = await login(loginInfo);
            //console.log("login response",res);
            if (res.success) {
                localStorage.setItem('token', res.resData.token);
                authDispatch({ type: "LOGIN", payload: res.resData.user })
                navigate('/');
                toast.success("Welcome " + res.resData.user.firstName);
                setLoading(false);
            } else {
                setLoading(false);
                console.log(res.message);
                if (res.response) {
                    toast.error(titleCase(res.response.data.message));
                } else {
                    toast.error("Login Failed " + titleCase(res.message));
                }
            }
        }

    }

    if (loading) { return <Loader type={"blocks"} /> }
    return (
        <>
            <div className='login-page'>
                <section>
                    <div className='auth-logo'>
                    {/* <img src={brandLogo} width="50px" height="35px"/> */}
                    <h2>Login</h2>
                    </div>
                    <hr/>
               
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='shadow-none' name="userid" type="text" placeholder="abc@xyz.com" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='shadow-none' name="password" type="password" placeholder="*********" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p>Don't Have an account <Link to='/signup'>Signup</Link></p>

                </section>

            </div>


        </>
    )
}

export default Login