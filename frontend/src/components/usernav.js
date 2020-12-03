import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Dropdown} from 'react-bootstrap';
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
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Имя
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/myCourses">Мои курсы</Dropdown.Item>
                    <Dropdown.Item href="/settings">Настройки</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Выход</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } 


