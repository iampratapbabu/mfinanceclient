import React, { useEffect } from 'react'

const SinglePortfolio = ({ portfolio, portfolioType,key }) => {

    useEffect(() => {
        //console.log(portfolio);
    }, [])


    return (
        <>
            {
                portfolioType === "mutualFunds" &&

                <>
                    <div key={key}>{portfolio?.name}</div>

                </>
            }
            {
                portfolioType === "stocks" &&
                <>
                    <div key={key}>{portfolio?.name}</div>

                </>
            }
            {
                portfolioType === "bankAccounts" &&
                <>
                    <div key={key}>{portfolio?.name}</div>

                </>
            }
            {

                portfolioType === "expenses" &&
                <>
                    <div key={key}>{portfolio?.name}</div>

                </>
            }
            {
                portfolioType === "loans" &&
                <>
                    <div key={key}>{portfolio?.remarks}</div>

                </>

            }

        </>

    )
}

export default SinglePortfolio