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




        </>
    )
}

export default PortfolioStats