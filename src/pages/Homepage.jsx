import React, { useContext, useState } from 'react';
import { Econtext } from '../context/Econtext';
import PortfolioStats from '../components/user/PortfolioStats';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HomePage = () => {
  const { authState } = useContext(Econtext);
  const { user } = authState;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const funToRun = (param) => {
    console.log("reverse ran from child component with param", param);
  }

  return (
    <>
      <div className='home-page'>
        <div className='home-container'>
          <h5>Hi, {user?.firstName} {user?.lastName}</h5>

          <button className='add-button' onClick={handleShow}>
            Create Transaction
          </button>

        </div>



        <PortfolioStats custom={"this is custom prop"} funProp={funToRun} />

      </div>

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
  )
}

export default HomePage;