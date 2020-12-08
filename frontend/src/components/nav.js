import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap';
import styles from '../App.css';
import { LoginModal} from './modal'
import logo from'./logo.jpg'
export const  Nav_ =() => {

const [flag, setFlag] = useState(false)

const handleModal = () =>
  {
      setFlag(!flag)
  }

      return(
        <div>
          <Navbar expand="lg">
            <Navbar.Brand href="/loginPage">
                <img className="logo"  src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/aboutUs">О нас</Nav.Link>
                <Nav.Link href="/listOfCourses">Список курсов</Nav.Link>
                <Nav.Link href="/partners">Партнеры</Nav.Link>
                <Button variant="light" onClick={handleModal}>Вход</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <LoginModal show={flag} onHide={handleModal}/>
        </div>
      );
    } 


