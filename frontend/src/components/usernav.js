import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap';
import styles from '../App.css';


export const  Usernav =() => {
      return(
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="mainpage.js">Suppa Aggregator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/aboutUs">О нас</Nav.Link>
                <Nav.Link href="/listOfCourses">Список курсов</Nav.Link>
                <Nav.Link href="/partners">Партнеры</Nav.Link>
                <Button href="/personalAccount" variant="light">Мой ЛК</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } 


