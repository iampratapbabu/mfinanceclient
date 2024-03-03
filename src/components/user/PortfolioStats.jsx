import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContentLoader from '../loader/ContentLoader';
import axios from "axios";
import { BASE_URL } from "../../config";
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const PortfolioStats = (props) => {

    const [loading, setLoading] = useState(true);
    const [portfolioData, setPortfolioData] = useState();
    const [divSection, setDivSection] = useState("default");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        console.log("Portfolio stats started");
        console.log("props passed",props);
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
            } else {
                setLoading(false);

            }
        } catch (err) {
            console.log("loadportfolio [ERROR]", err);
            setLoading(false);
            setDivSection("error");
        }
    }

    const reverseProp = () =>{
        props.funProp("any value");
    }

    if (loading) return (<ContentLoader />);
    return (
        <>
            {
                divSection === "error" ?
                    <>
                        <p>Portfolio loading err </p>
                        <Button onClick={loadPortfolio}>Try Again</Button>
                    </>
                    :
                    <>
                        <p> Net Worth :{portfolioData?.netWorth}</p>
                        <p>Assets :{portfolioData?.totalAssets}</p>
                        <p> Liablities :{portfolioData?.totalLiablites}</p>

                        <Button variant="primary" onClick={reverseProp}>
                            Reverse Prop
                        </Button>


                        <Button variant="primary" onClick={handleShow}>
                            Add Transaction
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Transaction Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </>
            }
        </>
    )
}

export default PortfolioStats