import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Econtext } from '../../context/Econtext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





const UserProfile = () => {

  const { authDispatch, logout, authState } = useContext(Econtext);
  const { user } = authState;

  const [currDiv, setCurrDiv] = useState("");

  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: ""
  })

  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  })

  const changeDiv = (divType) => {
    setCurrDiv(divType)
  }


  useEffect(() => {
  }, [])


  const handleChange = (e) => {
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


  }



  return (
    <>

      <div className='user-profile'>
        <div className='profile-img'>
          <img src={`https://ui-avatars.com/api/?name=${user.firstName}&size=100`} height="75px" width="75px"></img>
        </div>

        <div className='user-details'>
          <div className='box-end'>
            <div className=''>
              <h6>Name</h6>
            </div>
            <div className=''>
              <h5> {user?.firstName}{" "}{user?.lastName}</h5>
            </div>
          </div>
          <div className='box-end'>
            <div className=''>
              <h6>Email</h6>
            </div>
            <div className=''>
              <h5>{user?.email}</h5>
            </div>
          </div>
          <div className='box-end'>
            <div className=''>
              <h6>Phone</h6>
            </div>
            <div className=''>
              <h5>+{user?.countryCode} {user?.phone}</h5>
            </div>
          </div>
          <div className='box-end'>
            <div className=''>
              <h6>Gender</h6>
            </div>
            <div className=''>
              <h5> {user?.gender}</h5>
            </div>
          </div>




          <div className='profile-button'>
            <button onClick={() => changeDiv('editProfile')} className='btn-profile'>Edit Profile</button>
            <button onClick={() => changeDiv('changePassword')} className='btn-profile'>Change Password</button>
          </div>
        </div>

        {
          currDiv === "editProfile" &&
          <>
            <div className='profile-edit-section'>
              <h4>Enter New Details</h4>
              <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Control className='shadow-none' name="firstName" type="text" placeholder="First Name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Control className='shadow-none' name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
                </Form.Group>

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

                <Button variant="danger" onClick={() => setCurrDiv("")}>
                  Close
                </Button>
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>

            </div>
          </>
        }

        {
          currDiv === "changePassword" &&
          <>
            <div className='profile-edit-section'>
              <h4>Enter New Password</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                  <Form.Control className='shadow-none' name="password" type="password" placeholder="Old Password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Control className='shadow-none' name="password" type="password" placeholder="New Password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control className='shadow-none' name="password" type="password" placeholder="Confirm New Password" onChange={handleChange} />
                </Form.Group>
                <Button variant="danger" onClick={() => setCurrDiv("")}>
                  Close
                </Button>
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </>
        }



      </div>






    </>
  )
}

export default UserProfile