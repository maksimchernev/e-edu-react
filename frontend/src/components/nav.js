import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap';
import styles from '../App.css';
import { SuppaModal} from '../components/modal'


export const  SuppaNav =() => {

const [flag, setFlag] = useState(false)

const handleModal = () =>
  {
      setFlag(!flag)
  }

      return(
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="mainpage.js">Suppa Aggregator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about-us">О нас</Nav.Link>
                <Nav.Link href="#list-of-couses">Список курсов</Nav.Link>
                <Nav.Link href="#partners">Партнеры</Nav.Link>
                <Button variant="light" onClick={handleModal}>Вход</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <SuppaModal show={flag} onHide={handleModal}/>
        </div>
      );
    } 


