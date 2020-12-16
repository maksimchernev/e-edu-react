import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Navbar, Nav, Form} from 'react-bootstrap'
import { LoginModal} from './modal'
import logo from'./logo.jpg'
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
                <img className="logo"  src={logo} />
            </Navbar.Brand>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
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


