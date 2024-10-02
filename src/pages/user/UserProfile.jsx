import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Econtext } from '../../context/Econtext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ContentLoader from '../../components/loader/ContentLoader';
import axios from "axios";
import toast from 'react-hot-toast';
import { BASE_URL } from '../../config';






const UserProfile = () => {

  const { authDispatch, logout, authState,loadUser } = useContext(Econtext);
  const { user } = authState;

  const [currDiv, setCurrDiv] = useState("");
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
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
    setUserInfo(user);
  }, [])


  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const axiosRes = await axios({
        method: "PATCH",
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: `${BASE_URL}/api/users/single`,
        data:userInfo
      });
      console.log("editProfile [SUCCESS]", axiosRes.data);
      if (axiosRes.data.success) {
        loadUser();
        setCurrDiv("");
        setLoading(false);
      } else {
        setLoading(false);

      }
    } catch (err) {
      console.log("editProfile [ERROR]", err);
      setLoading(false);
    }

  }


  if (loading) return <ContentLoader />
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
                  <Form.Control className='shadow-none' name="firstName" type="text" placeholder="First Name" onChange={handleChange} value={userInfo?.firstName || ""} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Control className='shadow-none' name="lastName" type="text" placeholder="Last Name" onChange={handleChange} value={userInfo?.lastName || ""} />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Select aria-label="Select Gender" name="gender" onChange={handleChange} value={userInfo?.gender || ""}>
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='shadow-none' name="email" type="email" placeholder="Email" onChange={handleChange} value={userInfo?.email || ""} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control className='shadow-none' name="phone" type="text" placeholder="Phone Number" onChange={handleChange} value={userInfo?.phone || ""} />
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