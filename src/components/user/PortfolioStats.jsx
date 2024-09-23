import React, { useContext, useState, useEffect } from 'react';
import { currencyFmt } from '../../helper/stringMethods';




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

  

    const userLoans = [
        {
            loanType: "Bike Loan",
            loanValue: 114000,
            loanDate: "24 Sept 2024"
        },
        {
            loanType: "Personal Loan",
            loanValue: 16000,
            loanDate: "24 Sept 2024"
        },
        {
            loanType: "Credit Card",
            loanValue: 24000,
            loanDate: "24 Sept 2024"
        },
    ]


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
                                    <h6>Last Updated {singleAssest.assetDate}</h6>
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
                                    <h6>Last Updated {singleLoan.createdAt}</h6>
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
                                    <h6>{singleExpense.createdAt}</h6>
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