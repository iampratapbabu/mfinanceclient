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
  const [allExpenseTypes, setAllExpenseTypes] = useState([])




  useEffect(() => {
    loadPortfolio();
    loadExpenseType();
  }, [])


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
      loadPortfolio();

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

  const loadExpenseType = async (ptype) => {
    try {
      const axiosRes = await axios({
        method: "GET",
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: `${BASE_URL}/api/utils/expensetype`,
        // data: { portfolioType: ptype }
      });
      console.log("loadExpenseType [SUCCESS]", axiosRes.data);
      if (axiosRes.data.success) {
        const { resData } = axiosRes.data;
        setAllExpenseTypes(resData);
      } else {

      }
    } catch (err) {
      console.log("loadportfolio [ERROR]", err);
      setLoading(false);
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
            </>
        }

      </div>

      <Modal show={show} onHide={handleClose}>
        <div className='common-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Record Expense</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <div className='modal-form'>
              <Modal.Body>
                <Form.Group className="mb-3" >
                  <Form.Select aria-label="Expense Type" name="expenseType" onChange={handleChange} value={expense?.expenseType || ""}>
                    {allExpenseTypes && allExpenseTypes.map(singleExpenseType =>
                    (
                      <option value={singleExpenseType.value}>{singleExpenseType.name}</option>

                    ))}
                  </Form.Select>
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
        </div>
      </Modal>



    </>
  )
}

export default HomePage;