import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Navbar, Nav, Form, Row, Col} from 'react-bootstrap'
import { LoginModal} from './modal'
import logo from'../images/navbar/logo.png'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks'
export const  Nav_ =() => {

const [flag, setFlag] = useState(false)
const {request,} = useHttp()
 const history = useHistory()
const [form,setForm] = useState({
      firstName:'', secondName: '', lastName: '', mail: '', password: ''
    })

const handleModal = () =>
  {
      setFlag(!flag)
  }
 const registerHandler = async() =>{
      try{

          await request('api/auth/register', 'POST', {...form},)

          history.push('/')
      } catch(e) {

      }
}

      return(
        <div>
          <Navbar expand="lg">
            <Navbar.Brand href="/mainPage">
                <img className="logo-head"  src={logo} />
            </Navbar.Brand>
            <Col>
                <Row>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </Row>
                <Row>
                    <a href="/courses"><p>Расширенный поиск</p></a>
                </Row>
            </Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Button variant="light" onClick={handleModal}>Вход</Button>
                <Nav.Link href="/RegisterPage"><Button variant="light" id="regButton">
                    Регистрация
                </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <LoginModal show={flag} onHide={handleModal}/>

        </div>
      );
    } 


