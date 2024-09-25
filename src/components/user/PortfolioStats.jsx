import React, { useContext, useState, useEffect } from 'react';
import { currencyFmt } from '../../helper/stringMethods';
import moment from 'moment';
import { dateWithTime, ddMMMYYYY } from '../../helper/dateHelper';




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
                <h3 className='h3-title'>Assets</h3>
                {
                    props?.userPortfolio?.userAssests && props?.userPortfolio?.userAssests.map(singleAssest => (
                        <>
                            <div className='box-end'>
                                <div className=''>
                                    <p>{singleAssest.assetType}</p>
                                    <h6>As Of {ddMMMYYYY(singleAssest.assetDate)}</h6>
                                </div>
                                <div className=''>
                                    <h6>₹ {singleAssest.assetValue} </h6>
                                    <button className='btn'>Detail</button>
                                </div>
                            </div>
                            <br />
                        </>
                    ))
                }
            </div>

            
            <div className='summary-card'>
                <h3 className='h3-title'>Liablities</h3>
                {
                     props?.userPortfolio?.userLoans.map(singleLoan => (
                        <>
                            <div className='box-end'>
                                <div className=''>
                                    <p>{singleLoan.remarks}</p>
                                    <h6>As Of {ddMMMYYYY(singleLoan.createdAt)}</h6>
                                </div>
                                <div className=''>
                                    <h6>₹ {singleLoan.amount} </h6>
                                    <button className='btn'>Detail</button>
                                </div>
                            </div>
                            <br />
                        </>
                    ))
                }
            </div>

            
            <div className='summary-card'>
                <h3 className='h3-title'>Expenses</h3>
                {
                     props?.userPortfolio?.userExpenses.map(singleExpense => (
                        <>
                            <div className='box-end'>
                                <div className=''>
                                    <p>{singleExpense.expenseType}</p>
                                    <h6>{dateWithTime(singleExpense.createdAt)}</h6>
                                </div>
                                <div className=''>
                                    <h6>₹ {singleExpense.amount} </h6>
                                    <button className='btn'>Detail</button>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ))
                }
            </div>


        </>
    )
}

export default PortfolioStats