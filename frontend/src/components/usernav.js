import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from'./logo.jpg'
import { AuthContext } from '../context/AuthContext';


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
          <Navbar expand="lg">
            <Navbar.Brand href="/mainPage">
                <img className="logo"  src={logo} />
            </Navbar.Brand>
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


