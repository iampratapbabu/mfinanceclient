import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';


const SinglePortfolio = ({ portfolio, portfolioType, key }) => {

    useEffect(() => {
        //console.log(portfolio);
    }, [])


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
                                        <h6>Name: <span>{portfolio?.name}</span></h6>
                                        <h6>Invested Amount: ₹ <span>{portfolio?.amount}</span></h6>
                                        <h6>Investment Type: <span>{portfolio?.investmentType}</span></h6>
                                        <h6>SIP Date: <span>{portfolio?.dateOfSip}</span></h6>
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