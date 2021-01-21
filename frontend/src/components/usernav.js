import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Form, Row, Col, Dropdown, InputGroup, FormControl} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import logo from'../images/navbar/logo.png'
import { AuthContext } from '../context/AuthContext';
import '../сss/navbar.css'
import person1 from '../images/navbar/person1.png'

export const  Usernav =() => {

  const auth = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = event => { 
    event.preventDefault()
    auth.logout()
    history.push('/')
}

      return(
        <div>
          <Navbar className = "nav-background" expand="lg">

            <Navbar.Brand href="/mainPage">
                <img className="logo-head" src={logo} />
            </Navbar.Brand>

            <Col sm="9" className="searchArea">
            <Form.Row inline className="justify-content-center">
              <InputGroup className="mb-3" className="search">
                <FormControl type="text" placeholder="Search"/>  
                <InputGroup.Append>
                  <Button variant="outline-success" className="searchButton">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Row>
                <Row className="justify-content-center">
                    <a href="/courses"><p>Расширенный поиск</p></a>
                </Row>
            </Col>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Dropdown>
                  <Dropdown.Toggle variant="dark" className="custom-btn textColor" id="dropdown-basic">
                    <img className="person1-head"  src={person1} />
                    Имя
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="dropdown-menu-right" style={{right: 0, left:"auto"}}>
                    <Dropdown.Item href="/myCourses">Мои курсы</Dropdown.Item>
                    <Dropdown.Item href="/settings">Настройки</Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler}>Выход</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      );
    } 


