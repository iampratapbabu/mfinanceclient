import React, { useContext, useState, useEffect } from 'react';
import { currencyFmt } from '../../helper/stringMethods';
import moment from 'moment';
import { dateWithTime, ddMMMYYYY, shortDate } from '../../helper/dateHelper';




//This is stateless component no useState
const PortfolioStats = (props) => {


    useEffect(() => {
        console.log("props passed", props);
    }, [])

    const reverseProp = () => {
        props.funProp("any value");
    }

    const getClassName = (amount) => {
        if (amount > 0) {
            return "amount-green";
        } else {
            return "amount-red";
        }
    }

    const getClassNameLoan = (typeOfLoan) => {
        if (typeOfLoan === "given") {
            return "amount-green-h6";
        } if (typeOfLoan === "taken") {
            return "amount-red-h6";
        }
    }



    return (
        <>

            <div className='summary-card'>

                <div className='portfolio-stats'>
                    <div className=''>
                        <h6> Net Worth</h6><span className={getClassName(props?.userPortfolio?.netWorth)}>₹ {currencyFmt(props?.userPortfolio?.netWorth)}</span>
                    </div>
                    <div className=''>
                        <h6>Assets</h6><span>₹ {currencyFmt(props?.userPortfolio?.totalAssets)}</span>
                    </div>
                    <div className=''>
                        <h6> Liablities</h6><span>₹ {currencyFmt(props?.userPortfolio?.totalLiablites)}</span>
                    </div>
                </div>

                {
                    /* 
                    <Button variant="primary" onClick={reverseProp}>
                        Reverse Prop
                    </Button> 
                    */
                }


            </div>


            <div className='summary-card'>
                <div className='box-end'>
                    <div className=''>
                        <h3 className='h3-title'>Assets </h3>
                    </div>
                    <div className=''>
                        <h6>As of {shortDate(new Date())}</h6>
                    </div>
                </div>
                <hr />
                {
                    props?.userPortfolio?.userAssests && props?.userPortfolio?.userAssests.map(singleAssest => (
                        <>
                            <div className='box-end'>
                                <div className=''>
                                    <p>{singleAssest.assetType}</p>
                                    {/* <h6>As of {shortDate(singleAssest.assetDate)}</h6> */}
                                </div>
                                <div className=''>
                                    <h6>₹ {singleAssest.assetValue} </h6>
                                    {/* <button className='btn'>Detail</button> */}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>


            <div className='summary-card'>
                <div className='box-end'>
                    <div className=''>
                        <h3 className='h3-title'>Loans </h3>
                    </div>
                    <div className=''>
                        <h6>As of {shortDate(new Date())}</h6>
                    </div>
                </div>
                <hr />

                {
                    props?.userPortfolio?.userLoans.map(singleLoan => (
                        <>
                            <div className='box-end'>
                                <div className=''>
                                    <p>{singleLoan.remarks}</p>
                                    {/* <h6>As of {shortDate(singleLoan.createdAt)}</h6> */}
                                </div>
                                <div className=''>
                                    <h6 className={getClassNameLoan(singleLoan?.loanType)}>₹ {singleLoan?.amount} </h6>
                                    {/* <button className='btn'>Detail</button> */}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>


            {/* <div className='summary-card'>
                <h3 className='h3-title'>Expenses</h3>
                {
                    props?.userPortfolio?.userExpenses.map(singleExpense => (
                        <>
                            <hr />
                            <div className='box-end'>
                                <div className=''>
                                    <p>{singleExpense.expenseType}</p>
                                    <h6>{shortDate(singleExpense.createdAt)}</h6>
                                </div>
                                <div className=''>
                                    <h6>₹ {singleExpense.amount} </h6>
                                    {/* <button className='btn'>Detail</button> *
                                </div>
                            </div>
                        </>
                    ))
                }
            </div> */}


        </>
    )
}

export default PortfolioStats