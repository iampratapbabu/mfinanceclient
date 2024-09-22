import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContentLoader from '../loader/ContentLoader';
import axios from "axios";
import { BASE_URL } from "../../config";
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {currencyFmt}  from '../../helper/stringMethods';




const PortfolioStats = (props) => {

    const [loading, setLoading] = useState(true);
    const [portfolioData, setPortfolioData] = useState();
    const [divSection, setDivSection] = useState("default");



    useEffect(() => {
        console.log("props passed", props);
        loadPortfolio();
    }, [])


    const loadPortfolio = async () => {
        try {
            setLoading(true);
            const axiosRes = await axios({
                method: "GET",
                headers: { 'x-access-token': localStorage.getItem('token') },
                url: `${BASE_URL}/api/portfolio`,
            });
            console.log("loadportfolio [SUCCESS]", axiosRes.data);
            if (axiosRes.data.success) {
                setLoading(false);
                setPortfolioData(axiosRes.data.resData)
                setDivSection("");
            } else {
                setLoading(false);

            }
        } catch (err) {
            console.log("loadportfolio [ERROR]", err);
            setLoading(false);
            setDivSection("error");
        }
    }

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

    if (loading) return (<ContentLoader />);
    return (
        <>
            {
                divSection === "error" ?
                    <>
                        <p>Portfolio Not Loaded </p>
                        <Button onClick={loadPortfolio}>Try Again</Button>
                    </>
                    :
                    <>
                        <div className='summary-card'>

                            <div className='portfolio-stats'>
                                <div className=''>
                                    <h6> Net Worth</h6><span className={getClassName(portfolioData?.netWorth)}>₹ {currencyFmt(portfolioData?.netWorth)}</span>
                                </div>
                                <div className=''>
                                    <h6>Assets</h6><span>₹ {currencyFmt(portfolioData?.totalAssets)}</span>
                                </div>
                                <div className=''>
                                    <h6> Liablities</h6><span>₹ {currencyFmt(portfolioData?.totalLiablites)}</span>
                                </div>
                            </div>

                            {/* 
                            <Button variant="primary" onClick={reverseProp}>
                                Reverse Prop
                            </Button> */}


                        </div>


                    </>
            }


        </>
    )
}

export default PortfolioStats