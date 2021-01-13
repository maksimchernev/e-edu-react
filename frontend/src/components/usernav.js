import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from'../images/navbar/logo.png'
import { AuthContext } from '../context/AuthContext';
import '../сss/navbar.css'


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
                <img className="logo-head"  src={logo} />
            </Navbar.Brand>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
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


