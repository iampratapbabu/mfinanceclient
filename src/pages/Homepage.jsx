import React, { useContext, useState } from 'react';
import { Econtext } from '../context/Econtext';
import PortfolioStats from '../components/user/PortfolioStats';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPortfolio } from '../helper/httpHelper';
import Form from 'react-bootstrap/Form';

const HomePage = () => {
  const { authState } = useContext(Econtext);
  const { user } = authState;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expense, setExpense] = useState({
    expenseType: "",
    amount: 0
  });


  const funToRun = (param) => {
    console.log("reverse ran from child component with param", param);
  }

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    createPortfolio();
  }

  const createPortfolio = async () => {
    try {
      const reqData = {};

      reqData.expenses = expense;
      console.log(reqData);
      const serverRes = await addPortfolio(reqData);
      console.log(serverRes);
    } catch (err) {
      console.log(err);
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



        <PortfolioStats custom={"this is custom prop"} funProp={funToRun} />



        <div className='summary-card'>

          <h3 className='h3-title'>Assets</h3>
          <div className='row details'>
            <div className='col'>
              <p>Saving Account</p>
              <h6>as on 13 April 2024</h6>
            </div>
            <div className='col'>
              <h6> Rs 8.63</h6>
              <button className='btn'>Detail</button>
            </div>
          </div>
          <br />
          <div className='row details'>
            <div className='col'>
              <p>Mutual Funds</p>
              <h6>as on 13 April 2024</h6>
            </div>
            <div className='col'>
              <h6> Rs 1,75,000</h6>
              <button className='btn'>Detail</button>
            </div>
          </div>
          <hr />

          <h3 className='h3-title'>Liablities</h3>
          <div className='row details'>
            <div className='col'>
              <p>Personal Loan</p>
              <h6>as on 13 April 2024</h6>
            </div>
            <div className='col'>
              <h6> Rs 54,677.84</h6>
              <button className='btn'>Detail</button>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>
              <p>Credit Card</p>
              <h6>as on 13 April 2024</h6>
            </div>
            <div className='col'>
              <h6> Rs 37,650.67</h6>
              <button className='btn'>Detail</button>
            </div>
          </div>
          <hr />


        </div>

        <div className='summary-card'>
          <h3 className='h3-title'>Expense <span>{"Rs 2,400"}</span></h3>
          <hr />
          <h6>Filter On</h6><span>Last Week</span>
          <hr />
          <div className='row'>

            <div className='col'>
              <h6>Category</h6><span>Fuel</span>
            </div>
            <div className='col'>
              <h6> Spent</h6><span>₹ {"23"}</span>
            </div>
          </div>
          <hr />

          <div className='row'>

            <div className='col'>
              <h6>Category</h6><span>Fuel</span>
            </div>
            <div className='col'>
              <h6> Spent</h6><span>₹ {"23"}</span>
            </div>
          </div>

          <hr />

          <div className='row'>

            <div className='col'>
              <h6>Category</h6><span>Fuel</span>
            </div>
            <div className='col'>
              <h6> Spent</h6><span>₹ {"23"}</span>
            </div>
          </div>

          <hr />

          <div className='row'>

            <div className='col'>
              <h6>Category</h6><span>Fuel</span>
            </div>
            <div className='col'>
              <h6> Spent</h6><span>₹ {"23"}</span>
            </div>
          </div>
          <hr />

          <div className='row'>
    
            <div className='col'>
              <h6>Category</h6><span>Fuel</span>
            </div>
            <div className='col'>
              <h6> Spent</h6><span>₹ {"23"}</span>
            </div>
          </div>


        </div>


      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Record Expense</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control name="expenseType" type="text" placeholder="Enter Expense Type" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control name="amount" type="number" placeholder="Enter Amount" onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
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