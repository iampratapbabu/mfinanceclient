import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addPortfolio, createPortfolio, deletePortfolio, editPortfolio } from '../../helper/httpHelper';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { BASE_URL } from '../../config';
import SinglePortfolio from '../../components/user/SinglePortfolio';
import ContentLoader from '../../components/loader/ContentLoader';
import toast from 'react-hot-toast';
import { YYYYMMDD } from '../../helper/dateHelper';





const AllPortfolio = () => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [portfolioData, setPortfolioData] = useState([]);
    const [portfolioSummary, setPortfolioSummary] = useState({});

    const [key, setKey] = useState('mutualFunds');
    const [btnAction, setBtnAction] = useState('');
    const [reloadEvent, setPageReloadEvent] = useState(false)





    const [mutualFund, setMutualFund] = useState({
        name: "",
        amount: 0,
        investmentType:"",
        dateOfSip:"",
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
        loadPortfolio(key);
    }, [show])

    const handleClose = async () => setShow(false);

    const handleShow = (setAction) => {
        setBtnAction(setAction);
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
        console.log("handle submit rns",);
        if (btnAction !== "") {
            addEditPortfolio();

        }
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
            // console.log(reqData);
            if (btnAction == "add") {
                serverRes = await addPortfolio(reqData, key);
                // console.log(serverRes);
                if (serverRes.success) {
                    toast.success(serverRes.message);
                }

            } else if (btnAction == "edit") {
                serverRes = await editPortfolio(reqData);
                if (serverRes.success) {
                    toast.success(serverRes.message);
                }

            }
            setShow(false);


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
                setPortfolioData(resData?.portfolio);
                setPortfolioSummary(resData?.portfolioSummary)
            } else {
                setLoading(false);

            }
        } catch (err) {
            console.log("loadportfolio [ERROR]", err);
            setLoading(false);
        }
    }

    const handleSetPortfolio = async (portfolioData, handleBtnPortfolio) => {
        setBtnAction(handleBtnPortfolio);
        if (key === "mutualFunds") setMutualFund(portfolioData);
        if (key === "stocks") setStock(portfolioData);
        if (key === "bankAccounts") setBankAccount(portfolioData);
        if (key === "expenses") setExpense(portfolioData);
        if (key === "loans") setLoan(portfolioData);
        setShow(true);


    }

    return (
        <>
            <div className='all-portfolio'>

                <div className='single-summary-card'>

                    <div className='box-end'>
                        <div className=''>
                            <h6>{portfolioSummary?.obj1?.label}</h6><span>₹{portfolioSummary?.obj1?.value}</span>
                        </div>
                        <div className=''>
                            <h6>{portfolioSummary?.obj2?.label}</h6><span>₹{portfolioSummary?.obj2?.value}</span>
                        </div>
                    </div>
                    <br />
                    <div className='box-end'>
                        <div className=''>
                            <h6>{portfolioSummary?.obj3?.label}</h6><span>₹{portfolioSummary?.obj3?.value}</span>
                        </div>
                        <div className=''>
                            <h6>{portfolioSummary?.obj4?.label}</h6><span>{portfolioSummary?.obj4?.value}</span>
                        </div>
                    </div>
                </div>

                <div className='tabs'>
                    <Tabs
                        defaultActiveKey="mutualFunds"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                        onSelect={(k) => handleTabKey(k)}
                    >
                        <Tab eventKey="mutualFunds" title="Mutual Funds"></Tab>
                        <Tab eventKey="stocks" title="Stocks"></Tab>
                        <Tab eventKey="bankAccounts" title="Accounts"></Tab>
                        <Tab eventKey="loans" title="Loans"></Tab>
                        <Tab eventKey="expenses" title="Expenses"></Tab>

                    </Tabs>

                    <div className="d-grid gap-2 mb-3">
                        <Button variant="info" size="lg" onClick={() => handleShow('add')}>
                            + ADD {key?.toUpperCase()}
                        </Button>
                    </div>


                    {loading ? <ContentLoader /> : null}
                    {
                        portfolioData && portfolioData.length > 0 ?
                            <>
                                {portfolioData.map((singlePortfolio, i) => {
                                    return (
                                        <SinglePortfolio
                                            refProp={"profile"}
                                            setPortfolio={handleSetPortfolio}
                                            portfolioType={key}
                                            portfolio={singlePortfolio}
                                            key={i}
                                        />

                                    )
                                })
                                }

                            </>
                            :
                            <>
                                <p>No Data Found</p>
                            </>
                    }


                </div>

            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD {key?.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        {key === "mutualFunds" &&
                            <>
                                <Form.Group className="mb-3">
                                    <Form.Control name="name" type="text" placeholder="Enter MF Name" onChange={handleChange} value={mutualFund?.name || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control name="amount" type="number" placeholder="Enter Amount" onChange={handleChange} value={mutualFund?.amount || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Select aria-label="Investment Type" name="investmentType" onChange={handleChange}value={mutualFund?.investmentType || ""}>
                                        <option>Investment Type</option>
                                        <option value="lumpsump">One Time</option>
                                        <option value="sip">SIP</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control name="dateOfSip" type="date" placeholder="SIP Date" onChange={handleChange} value={YYYYMMDD(mutualFund?.dateOfSip) || ""} />
                                </Form.Group>
                            </>
                        }

                        {key === "stocks" &&
                            <>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="name" type="text" placeholder="Enter Stocks Name" onChange={handleChange} value={stock?.name || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="amount" type="number" placeholder="Enter Amount" onChange={handleChange} value={stock?.amount || ""} />
                                </Form.Group>
                            </>
                        }

                        {key === "bankAccounts" &&
                            <>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="name" type="text" placeholder="Enter Bank Name" onChange={handleChange} value={bankAccount?.name || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="accountHolderName" type="text" placeholder="Enter Account Holder Name" onChange={handleChange} value={bankAccount?.accountHolderName || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="accountNumber" type="text" placeholder="Enter Account Number" onChange={handleChange} value={bankAccount?.accountNumber || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="ifscCode" type="text" placeholder="Enter IFSC Code" onChange={handleChange} value={bankAccount?.ifscCode || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="currentBalance" type="number" placeholder="Enter Current Balance" onChange={handleChange} value={bankAccount?.currentBalance || ""} />
                                </Form.Group>
                            </>
                        }

                        {key === "expenses" &&
                            <>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="expenseType" type="text" placeholder="Enter Expense Type" onChange={handleChange} value={expense?.expenseType || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="amount" type="number" placeholder="Enter Amount" onChange={handleChange} value={expense?.amount || ""} />
                                </Form.Group>
                            </>
                        }

                        {key === "loans" &&
                            <>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="amount" type="number" placeholder="Enter Loan Amount" onChange={handleChange} value={loan?.amount || ""} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Select aria-label="Loan Type" name="loanType" onChange={handleChange} value={loan?.loanType || ""} >
                                        <option>Loan Type</option>
                                        <option value="given">Given</option>
                                        <option value="taken">Taken</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control name="remarks" type="text" placeholder="Enter Remarks" onChange={handleChange} value={loan?.remarks || ""} />
                                </Form.Group>
                            </>
                        }

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

export default AllPortfolio;