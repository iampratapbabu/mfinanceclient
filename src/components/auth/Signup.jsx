import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import Loader from '../../components/loader/FullLoader';



import { Econtext } from '../../context/Econtext';

const Signup = () => {
    const navigate = useNavigate();

    const { authState, authDispatch, register } = useContext(Econtext);
    const { authError } = authState;

    const [signupInfo, setSignupInfo] = useState({
        firstName: "",
        lastName: "",
        gender:"",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        userPhoto: ""
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signupInfo)
        setLoading(true);
        const res = await register(signupInfo);
        if (res.success) {
            localStorage.setItem('token', res.resData.token);
            authDispatch({ type: "REGISTER", payload: res.resData.user })
            navigate('/');
            toast.success(res.message);
        } else {
            console.log(res.message);
            if (res.response.status == 500) {
                toast.error("Something Went Wrong...");
            } else if (res.response.status != 500) {
                toast.error(res.response.data.message);
            } else {
                toast.error("Signup Failed " + res.message);
            }
            setLoading(false);
        }
    }


    if (loading) { return <Loader type={"blocks"} /> }
    return (
        <>
            <div className='signup-page'>
                <section>
                    <h2>Create An Account</h2>
                    <hr />
                    <Form onSubmit={handleSubmit}>
                        <div className='row'>

                            <div className='col'>
                                <Form.Group className="mb-3" controlId="formFirstName">
                                    <Form.Control className='shadow-none' name="firstName" type="text" placeholder="First Name" onChange={handleChange} />
                                </Form.Group>
                            </div>
                            <div className='col'>
                                <Form.Group className="mb-3" controlId="formLastName">
                                    <Form.Control className='shadow-none' name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group className="mb-3" >
                            <Form.Select aria-label="Select Gender" name="gender" onChange={handleChange}>
                                <option>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='shadow-none' name="email" type="email" placeholder="Email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Control className='shadow-none' name="phone" type="text" placeholder="Phone Number" onChange={handleChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='shadow-none' name="password" type="password" placeholder="Password" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control className='shadow-none' name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control className='shadow-none' name="userphoto" type="file" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <p>Already Have an account <Link to='/login'>Login</Link></p>

                </section>
            </div >
        </>
    )
}

export default Signup