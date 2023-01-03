import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.scss';

export default function AppNavbar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <div className="d-flex align-items-center">
          <Nav.Link href="" className="me-2 text-secondary">
            <span className="material-symbols-outlined">
              menu
            </span>
          </Nav.Link>
          <Nav.Link href="#home">
            <img src="https://uat-bkndcdn.npfs.co/static/theme/v1/images/npfLogo.svg" alt="Brand Logo" className="img-fluid" style={{ height: '30px' }} />
          </Nav.Link>
        </div>
        <Navbar id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <span className="material-symbols-outlined">
                question_mark
              </span>
            </Nav.Link>
            <Nav.Link href="#link">
              <span className="material-symbols-outlined">
                notifications_active
              </span>
            </Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle id="dropdown-basic" className="rounded-circle" ></Dropdown.Toggle>
              <Dropdown.Menu className="p-0 mt-1">
                <div className="bg-light p-3">
                  <Row>
                    <Col xs={2}>
                      <div className="profile-menu-img bg-primary p-1 rounded-circle w-10 h-10 text-white d-flex profile align-items-center justify-content-center"></div>
                    </Col>
                    <Col xs={10}>
                    </Col>
                  </Row>
                </div>
                <Dropdown.Item href="#/action-1" className="d-flex p-3">
                  <span className="material-symbols-outlined mr-2">
                    password
                  </span>
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="d-flex p-3">
                  <span className="material-symbols-outlined mr-2">
                    logout
                  </span>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}