import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContentLoader from '../loader/ContentLoader';
import axios from "axios";
import { BASE_URL } from "../../config";
import toast from 'react-hot-toast';
import { Button } from 'bootstrap';



const PortfolioStats = () => {

    const [loading, setLoading] = useState(true);
    const [portfolioData, setPortfolioData] = useState();
    const [divSection, setDivSection] = useState("default");


    useEffect(() => {
        console.log("Portfolio stats started");
        loadPortfolio();
    }, [])


    const loadPortfolio = async (logindata) => {
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
            } else {
                setLoading(false);

            }
        } catch (err) {
            console.log("loadportfolio [ERROR]", err);
            setLoading(false);
            setDivSection("error");
        }
    }

    if (loading) return (<ContentLoader />);
    return (
        <>
            {
                divSection === "error" ?
                    <>
                        <p>Portfolio loading err </p>
                        <Button onClick = {loadPortfolio}>Try Again</Button>
                    </>
                    :
                    <>
                      <p> Net Worth :{portfolioData?.netWorth}</p>
                      <p>Assets :{portfolioData?.totalAssets}</p>
                      <p> Liablities :{portfolioData?.totalLiablites}</p>
                    </>
            }
        </>
    )
}

export default PortfolioStats