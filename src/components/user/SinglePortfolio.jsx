import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { deletePortfolio } from '../../helper/httpHelper';
import toast from 'react-hot-toast';
import { ddMMYYYY } from '../../helper/dateHelper';
import { currencyFmt } from '../../helper/stringMethods';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';






const SinglePortfolio = ({ refProp, setPortfolio, removePortfolio, portfolio, portfolioType }) => {

    useEffect(() => {
        //console.log(portfolio);
        //console.log(props);
    }, []);

    const handleEdit = (portfolioPaylod) => {
        console.log(portfolioPaylod);
        setPortfolio(portfolioPaylod, 'edit')
    }

    const handleDelete = async (portfolioPaylod) => {
        const serverRes = await deletePortfolio(portfolioPaylod?._id, portfolioType);
        if (serverRes.success) {
            toast.success(serverRes.message);
            removePortfolio();
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
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Invested Amount:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>₹ {currencyFmt(portfolio?.amount)}</span>
                                                </div>
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
                                                    <span>{ddMMYYYY(portfolio?.dateOfSip)}</span>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Investment Date:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{ddMMYYYY(portfolio?.dateOfInvestment)}</span>
                                                </div>
                                            </div>
                                            <br />
                                        </div>

                                    </div>
                                    <div className='portfolio-button'>

                                        {
                                            refProp == "profile" &&
                                            <>
                                                <button className='edit-button btn-common' onClick={() => handleEdit(portfolio)}><CiEdit /></button>
                                                <button className='delete-button btn-common' onClick={() => handleDelete(portfolio)}><MdDeleteOutline /></button>
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
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Invested Amount:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>₹ {portfolio?.amount}</span>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Purchased Date:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{ddMMYYYY(portfolio?.dateOfInvestment)}</span>
                                                </div>
                                            </div>


                                            <br />
                                        </div>

                                    </div>
                                    <div className='portfolio-button'>

                                        {
                                            refProp == "profile" &&
                                            <>
                                                <button className='edit-button btn-common' onClick={() => handleEdit(portfolio)}><CiEdit /></button>
                                                <button className='delete-button btn-common' onClick={() => handleDelete(portfolio)}><MdDeleteOutline /></button>
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
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Account Number:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.accountNumber}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>A/C Holder's Name:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.accountHolderName}</span>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Current Balance:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>₹ {portfolio?.currentBalance}</span>
                                                </div>

                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>IFSC Code:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.ifscCode}</span>
                                                </div>
                                            </div>
                                            <br />
                                        </div>

                                    </div>
                                    <div className='portfolio-button'>

                                        {
                                            refProp == "profile" &&
                                            <>
                                                <button className='edit-button btn-common' onClick={() => handleEdit(portfolio)}><CiEdit /></button>
                                                <button className='delete-button btn-common' onClick={() => handleDelete(portfolio)}><MdDeleteOutline /></button>
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
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Expense Type:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.expenseType}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Amount:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>₹ {portfolio?.amount}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Transaction Date:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{ddMMYYYY(portfolio?.createdAt)}</span>
                                                </div>
                                            </div>

                                            <br />
                                        </div>

                                    </div>
                                    <div className='portfolio-button'>

                                        {
                                            refProp == "profile" &&
                                            <>
                                                <button className='edit-button btn-common' onClick={() => handleEdit(portfolio)}><CiEdit /></button>
                                                <button className='delete-button btn-common' onClick={() => handleDelete(portfolio)}><MdDeleteOutline /></button>
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
                                        <div className='row'>


                                        <div className='row'>
                                                <div className='col'>
                                                    <h6>Description:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.description}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Loan Amount:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>₹ {portfolio?.amount}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Loan Type:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{portfolio?.loanType}</span>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col'>
                                                    <h6>Date:</h6>
                                                </div>
                                                <div className='col'>
                                                    <span>{ddMMYYYY(portfolio?.createdAt)}</span>
                                                </div>
                                            </div>

                                            <br />
                                        </div>

                                    </div>
                                    <div className='portfolio-button'>

                                        {
                                            refProp == "profile" &&
                                            <>
                                                <button className='edit-button btn-common' onClick={() => handleEdit(portfolio)}><CiEdit /></button>
                                                <button className='delete-button btn-common' onClick={() => handleDelete(portfolio)}><MdDeleteOutline /></button>
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