import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addPortfolio, createPortfolio, editPortfolio } from '../../helper/httpHelper';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { BASE_URL } from '../../config';
import SinglePortfolio from '../../components/user/SinglePortfolio';
import ContentLoader from '../../components/loader/ContentLoader';




const UserProfile = () => {

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState();
  const [key, setKey] = useState('');





  const [mutualFund, setMutualFund] = useState({
    name: "",
    amount: 0,
    actionType: "create",
  });

  const [stock, setStock] = useState({
    name: "",
    amount: 0
  });

  const [bankAccount, setBankAccount] = useState({
    name: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    amount: 0
  });

  const [expense, setExpense] = useState({
    expenseType: "",
    amount: 0
  });

  const [loan, setLoan] = useState({
    amount: 0,
    loanType: "",
    remarks: "",
  });



  useEffect(() => {
    loadPortfolio("mutualFunds");
  }, [])

  const handleClose = async () => setShow(false);
  const handleShow = (reqPortfolioType) => {
    loadPortfolio(reqPortfolioType);
    setShow(true);
  }


  const clickMe = async () => {
    try {
      const res = await createPortfolio(2);
      console.log(res);

    } catch (err) {
      console.log(err);
    }

  }

  const handleChange = (e) => {
    if (key === "mutualFunds") setMutualFund({ ...mutualFund, [e.target.name]: e.target.value });
    if (key === "stocks") setStock({ ...stock, [e.target.name]: e.target.value });
    if (key === "bankAccounts") setBankAccount({ ...bankAccount, [e.target.name]: e.target.value });
    if (key === "expenses") setExpense({ ...expense, [e.target.name]: e.target.value });
    if (key === "loans") setLoan({ ...loan, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addEditPortfolio();
  }



  const addEditPortfolio = async () => {
    try {
      let serverRes;
      let reqData = {};
      //reqData.portfolioType = data;

      if (key === "mutualFunds") reqData.mutualFunds = mutualFund;
      if (key === "stocks") reqData.stocks = stock;
      if (key === "bankAccounts") reqData.bankAccounts = bankAccount;
      if (key === "expenses") reqData.expenses = expense;
      if (key === "loans") reqData.loans = loan;
      console.log(reqData);
      serverRes = await addPortfolio(reqData);

      serverRes = await editPortfolio(reqData);

      console.log(serverRes);
    } catch (err) {
      console.log(err);
    }
  }

  const handleTabKey = (tabKey) => {
    setKey(tabKey);
    loadPortfolio(tabKey);
  }

  const loadPortfolio = async (ptype) => {
    try {
      console.log("load portfolio runs with value", ptype);
      setLoading(true);
      const axiosRes = await axios({
        method: "POST",
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: `${BASE_URL}/api/portfolio/user-portfolio`,
        data: { portfolioType: ptype }
      });
      console.log("loadportfolio [SUCCESS]", axiosRes.data);
      if (axiosRes.data.success) {
        setLoading(false);
        const { resData } = axiosRes.data;
        if (resData.portfolioType === "mutualFunds") setPortfolioData(resData.userMutualFunds);
        if (resData.portfolioType === "stocks") setPortfolioData(resData.userStocks);
        if (resData.portfolioType === "bankAccounts") setPortfolioData(resData.userBankAccounts);
        if (resData.portfolioType === "expenses") setPortfolioData(resData.userExpenses);
        if (resData.portfolioType === "loans") setPortfolioData(resData.userLoans);
      } else {
        setLoading(false);

      }
    } catch (err) {
      console.log("loadportfolio [ERROR]", err);
      setLoading(false);
    }
  }

  const handleSetPortfolio = (portfolioData) => {
    console.log(portfolioData);
    setMutualFund({ ...portfolioData, actionType: "edit" });
    setShow(true);

  }



  return (
    <>

    <p>User Profile</p>


    </>
  )
}

export default UserProfile