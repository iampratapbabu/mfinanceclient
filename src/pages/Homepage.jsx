import React, { useContext, useEffect, useState } from 'react';
import { Econtext } from '../context/Econtext';
import PortfolioStats from '../components/user/PortfolioStats';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPortfolio } from '../helper/httpHelper';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import axios from "axios";
import { BASE_URL } from '../config';
import ContentLoader from '../components/loader/ContentLoader';

const HomePage = () => {
  const { authState } = useContext(Econtext);
  const { user } = authState;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [portfolioData, setPortfolioData] = useState();
  const [loading, setLoading] = useState(true);
  const [divSection, setDivSection] = useState("default");


  const [expense, setExpense] = useState({
    expenseType: "",
    amount: 0
  });



  useEffect(() => {
    loadPortfolio();
  }, [show])


  const funToRun = (param) => {
    console.log("reverse ran from child component with param", param);
  }

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addExpense();
  }

  const addExpense = async () => {
    try {
      const reqData = {};

      reqData.expenses = expense;
      console.log(reqData);
      const serverRes = await addPortfolio(reqData, "expenses");
      toast.success(serverRes.message);
      setShow(false);
      console.log(serverRes);
    } catch (err) {
      console.log(err);
    }
  }

  const loadPortfolio = async () => {
    try {
      setLoading(true);
      const axiosRes = await axios({
        method: "GET",
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: `${BASE_URL}/api/portfolio`,
      });
      console.log("loadportfolio [SUCCESS]", axiosRes.data);
      if (axiosRes.data.success) {
        setLoading(false);
        setPortfolioData(axiosRes.data.resData)
        setDivSection("");
      } else {
        setLoading(false);

      }
    } catch (err) {
      console.log("loadportfolio [ERROR]", err);
      setLoading(false);
      setDivSection("error");
    }
  }


  return (
    <>
      <div className='home-page'>
        <div className='home-container'>
          <h5 className='h5-title'>Hi, {user?.firstName}</h5>
          <button className='add-button' onClick={handleShow}>
            +
          </button>

        </div>
        {
          loading ? <ContentLoader /> :
            <>
              <PortfolioStats custom={"this is custom prop"} funProp={funToRun} userPortfolio={portfolioData} />

              <div className='summary-card'>

                <h3 className='h3-title'>Assets</h3>
                <div className='box-end'>
                  <div className=''>
                    <p>Saving Account</p>
                    <h6>as on 13 April 2024</h6>
                  </div>
                  <div className=''>
                    <h6> Rs 8.63</h6>
                    <button className='btn'>Detail</button>
                  </div>
                </div>
                <br />
                <div className='box-end'>
                  <div className=''>
                    <p>Mutual Funds</p>
                    <h6>as on 13 April 2024</h6>
                  </div>
                  <div className=''>
                    <h6> Rs 1,75,000</h6>
                    <button className='btn'>Detail</button>
                  </div>
                </div>


              </div>


              <div className='summary-card'>
                <h3 className='h3-title'>Liablities</h3>
                <div className='box-end'>
                  <div className=''>
                    <p>Personal Loan</p>
                    <h6>as on 13 April 2024</h6>
                  </div>
                  <div className=''>
                    <h6> Rs 54,677.84</h6>
                    <button className='btn'>Detail</button>
                  </div>
                </div>
                <br />
                <div className='box-end'>
                  <div className=''>
                    <p>Credit Card</p>
                    <h6>as on 13 April 2024</h6>
                  </div>
                  <div className=''>
                    <h6> Rs 37,650.67</h6>
                    <button className='btn'>Detail</button>
                  </div>
                </div>


              </div>

              <div className='summary-card'>
                <h3 className='h3-title'>Expense</h3>
                <br />
                <h6>Filter On</h6><span>Last Week</span>
                <hr />
                <div className='box-end'>

                  <div className='box-end-col'>
                    <h6>Category</h6><span>Fuel</span>
                  </div>
                  <div className='box-end-col'>
                    <h6> Spent</h6><span>₹ {"23"}</span>
                  </div>
                </div>
                <hr />

                <div className='box-end'>

                  <div className=''>
                    <h6>Category</h6><span>Fuel</span>
                  </div>
                  <div className=''>
                    <h6> Spent</h6><span>₹ {"23"}</span>
                  </div>
                </div>

                <hr />

                <div className='box-end'>

                  <div className=''>
                    <h6>Category</h6><span>Fuel</span>
                  </div>
                  <div className=''>
                    <h6> Spent</h6><span>₹ {"23"}</span>
                  </div>
                </div>

                <hr />

                <div className='box-end'>

                  <div className=''>
                    <h6>Category</h6><span>Fuel</span>
                  </div>
                  <div className=''>
                    <h6> Spent</h6><span>₹ {"23"}</span>
                  </div>
                </div>
                <hr />

                <div className='box-end'>

                  <div className=''>
                    <h6>Category</h6><span>Fuel</span>
                  </div>
                  <div className=''>
                    <h6> Spent</h6><span>₹ {"23"}</span>
                  </div>
                </div>


              </div>
            </>
        }




      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Record Expense</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <div className='modal-form'>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name="expenseType" type="text" placeholder="Enter Expense Type" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="amount" type="number" placeholder="Enter Amount" onChange={handleChange} />
              </Form.Group>
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>



    </>
  )
}

export default HomePage;