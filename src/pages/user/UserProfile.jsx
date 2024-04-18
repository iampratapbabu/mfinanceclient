import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { createPortfolio } from '../../helper/httpHelper';



const UserProfile = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

  }, [])

  
  const clickMe = async () => {
    try {
      const res = await createPortfolio(2);
      console.log(res);

    } catch (err) {
      console.log(err);
    }

  }

  return (
    <>

      <div className='home-page'>

        <div className='tabs'>
          <Tabs
            defaultActiveKey="mf"
            id="fill-tab-example"
            className="mb-3"
            fill
          >

            <Tab eventKey="mf" title="Mutual Funds">

              <div className='single-portfolio'>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="info" size="lg" onClick={clickMe}>
                    + Add Mutual Fund
                  </Button>
                </div>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{"Motilal Oswal"}</Accordion.Header>

                    <Accordion.Body>
                      <div className='portfolio-detail'>
                        <h6>Name: <span>{"Motilal Oswal"}</span></h6>
                        <h6>Invested Amount: ₹ <span>{"3000"}</span></h6>
                        <h6>Investment Type: <span>{"sip"}</span></h6>
                        <h6>SIP Date: <span>{"23/10/2024"}</span></h6>
                        <Button variant='warning'>Edit</Button>
                        <Button variant='danger'>Delete</Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>


            </Tab>
            <Tab eventKey="stock" title="Stocks">
              <div className='single-portfolio'>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="info" size="lg" onClick={handleShow}>
                    + Add Stock
                  </Button>
                </div>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{"Unitech"}</Accordion.Header>

                    <Accordion.Body>
                      <div className='portfolio-detail'>
                        <h6>Name: <span>{"Motilal Oswal"}</span></h6>
                        <h6>Invested Amount: ₹ <span>{"3000"}</span></h6>
                        <h6>Investment Type: <span>{"sip"}</span></h6>
                        <h6>SIP Date: <span>{"23/10/2024"}</span></h6>
                        <Button variant='warning'>Edit</Button>
                        <Button variant='danger'>Delete</Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="account" title="Accounts">
              <div className='single-portfolio'>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="info" size="lg" onClick={handleShow}>
                    + Add Bank Account
                  </Button>
                </div>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{"Indusind Bank"}</Accordion.Header>

                    <Accordion.Body>
                      <div className='portfolio-detail'>
                        <h6>Name: <span>{"Motilal Oswal"}</span></h6>
                        <h6>Invested Amount: ₹ <span>{"3000"}</span></h6>
                        <h6>Investment Type: <span>{"sip"}</span></h6>
                        <h6>SIP Date: <span>{"23/10/2024"}</span></h6>
                        <Button variant='warning'>Edit</Button>
                        <Button variant='danger'>Delete</Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="loan" title="Loans">
              <div className='single-portfolio'>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="info" size="lg" onClick={handleShow}>
                    + Add Loan
                  </Button>
                </div>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{"Motilal Oswal"}</Accordion.Header>

                    <Accordion.Body>
                      <div className='portfolio-detail'>
                        <h6>Name: <span>{"Motilal Oswal"}</span></h6>
                        <h6>Invested Amount: ₹ <span>{"3000"}</span></h6>
                        <h6>Investment Type: <span>{"sip"}</span></h6>
                        <h6>SIP Date: <span>{"23/10/2024"}</span></h6>
                        <Button variant='warning'>Edit</Button>
                        <Button variant='danger'>Delete</Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="expense" title="Expenses">
              <div className='single-portfolio'>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="info" size="lg" onClick={handleShow}>
                    + Add Expense
                  </Button>
                </div>

                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{"Motilal Oswal"}</Accordion.Header>

                    <Accordion.Body>
                      <div className='portfolio-detail'>
                        <h6>Name: <span>{"Motilal Oswal"}</span></h6>
                        <h6>Invested Amount: ₹ <span>{"3000"}</span></h6>
                        <h6>Investment Type: <span>{"sip"}</span></h6>
                        <h6>SIP Date: <span>{"23/10/2024"}</span></h6>
                        <Button variant='warning'>Edit</Button>
                        <Button variant='danger'>Delete</Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>

          </Tabs>


        </div>




      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Record Expense</Modal.Title>
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

export default UserProfile