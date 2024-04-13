import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from "../../config";
import Form from 'react-bootstrap/Form';
import ContentLoader from '../../components/loader/ContentLoader';
import SinglePortfolio from '../../components/user/SinglePortfolio';




const AllPortfolio = () => {

    const [loading, setLoading] = useState(false);
    const [portfolioData, setPortfolioData] = useState();
    const [portfolioType, setPortfolioType] = useState();


    const loadPortfolio = async (ptype) => {
        try {
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

    const selectPortfolioType = (e) => {
        console.log(e.target.name, e.target.value);
        loadPortfolio(e.target.value);
        setPortfolioType(e.target.value);
    }

    return (
        <>
            <div className='all-portfolio'>


                <Form.Select onChange={selectPortfolioType} name="portfolioType" aria-label="Default select example">
                    <option>Select Portfolio Type</option>
                    <option value="mutualFunds">Mutual Funds</option>
                    <option value="stocks">Stocks</option>
                    <option value="bankAccounts">Bank Accounts</option>
                    <option value="expenses">Expenses</option>
                    <option value="loans">Loans</option>
                </Form.Select>
                {/* <h3>{portfolioType}</h3> */}
                {loading ? <ContentLoader /> : null}
                {
                    portfolioData && portfolioData.length > 0 ?
                        <>
                            {portfolioData.map((singlePortfolio, i) => {
                                return (
                                    <SinglePortfolio key={i} portfolioType={portfolioType} portfolio={singlePortfolio} />

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
        </>

    )
}

export default AllPortfolio