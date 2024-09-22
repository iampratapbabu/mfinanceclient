import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { deletePortfolio } from '../../helper/httpHelper';
import toast from 'react-hot-toast';






const SinglePortfolio = ({ refProp, setPortfolio, portfolio, portfolioType, key }) => {

    useEffect(() => {
        //console.log(portfolio);
        //console.log(props);
    }, []);

    const handleEdit = (portfolioPaylod) => {
        console.log(portfolioPaylod);
        setPortfolio(portfolioPaylod,'edit')
    }

    const handleDelete = async(portfolioPaylod) =>{
        const serverRes = await deletePortfolio(portfolioPaylod?._id, portfolioType);
        if (serverRes.success) {
            toast.success(serverRes.message);
        }
    }


    return (
        <>
            <div className='single-portfolio'>
                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">

                        {
                            portfolioType === "mutualFunds" &&

                            <>
                                <Accordion.Header>{portfolio?.name}</Accordion.Header>

                                <Accordion.Body>
                                    <div className='portfolio-detail'>
                                        <div className='row'>
                                            <div className='col'>
                                                <h6>Invested Amount:</h6>
                                            </div>
                                            <div className='col'>
                                                <span>₹{portfolio?.amount}</span>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Investment Type:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.investmentType}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>SIP Date:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.dateOfSip?.toLocaleString()}</span>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                    </div>
                                    <div className='portfolio-button'>

                                        {
                                            refProp == "profile" &&
                                            <>
                                                <Button variant='warning' onClick={() => handleEdit(portfolio)}>Edit</Button>
                                                <Button variant='danger' onClick={() => handleDelete(portfolio)}>Delete</Button>
                                            </>
                                        }
                                    </div>
                                </Accordion.Body>

                            </>
                        }
                        {
                            portfolioType === "stocks" &&
                            <>
                                <Accordion.Header>{portfolio?.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='portfolio-detail'>
                                        <h6>Name: <span>{portfolio?.name}</span></h6>
                                        <h6>Invested Amount: ₹ <span>{portfolio?.amount}</span></h6>
                                        <h6>Purchased Date: <span>{portfolio?.dateOfInvestment}</span></h6>
                                        {
                                            refProp == "profile" &&
                                            <>
                                                <Button variant='warning' onClick={() => handleEdit(portfolio)}>Edit</Button>
                                                <Button variant='danger' onClick={() => handleDelete(portfolio)}>Delete</Button>
                                            </>
                                        }
                                    </div>
                                </Accordion.Body>

                            </>
                        }
                        {
                            portfolioType === "bankAccounts" &&
                            <>
                                <Accordion.Header>{portfolio?.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='portfolio-detail'>
                                        <h6>Name: <span>{portfolio?.name}</span></h6>
                                        <h6>Current Balance: ₹ <span>{portfolio?.currentBalance}</span></h6>
                                        <h6>IFSC Code: <span>{portfolio?.ifscCode}</span></h6>
                                        {
                                            refProp == "profile" &&
                                            <>
                                                <Button variant='warning' onClick={() => handleEdit(portfolio)}>Edit</Button>
                                                <Button variant='danger' onClick={() => handleDelete(portfolio)}>Delete</Button>
                                            </>
                                        }
                                    </div>
                                </Accordion.Body>

                            </>
                        }
                        {

                            portfolioType === "expenses" &&
                            <>
                                <Accordion.Header>{portfolio?.expenseType}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='portfolio-detail'>
                                        <h6>Expense Type: <span>{portfolio?.expenseType}</span></h6>
                                        <h6>Amount: ₹ <span>{portfolio?.amount}</span></h6>
                                        <h6>Transaction Date: <span>{portfolio?.createdAt}</span></h6>
                                        {
                                            refProp == "profile" &&
                                            <>
                                                <Button variant='warning' onClick={() => handleEdit(portfolio)}>Edit</Button>
                                                <Button variant='danger' onClick={() => handleDelete(portfolio)}>Delete</Button>
                                            </>
                                        }
                                    </div>
                                </Accordion.Body>

                            </>
                        }
                        {
                            portfolioType === "loans" &&
                            <>
                                <Accordion.Header>{portfolio?.remarks}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='portfolio-detail'>
                                        <h6>Title: <span>{portfolio?.remarks}</span></h6>
                                        <h6>Loan Amount: ₹ <span>{portfolio?.amount}</span></h6>
                                        <h6>Loan Type: <span>{portfolio?.loanType}</span></h6>
                                        <h6>Date: <span>{portfolio?.createdAt}</span></h6>
                                        {
                                            refProp == "profile" &&
                                            <>
                                                <Button variant='warning' onClick={() => handleEdit(portfolio)}>Edit</Button>
                                                <Button variant='danger' onClick={() => handleDelete(portfolio)}>Delete</Button>
                                            </>
                                        }
                                    </div>
                                </Accordion.Body>

                            </>

                        }

                    </Accordion.Item>
                </Accordion>
            </div>
        </>

    )
}

export default SinglePortfolio