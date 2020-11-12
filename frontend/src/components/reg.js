import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Modal, Form, Row, Col} from 'react-bootstrap';
import styles from '../App.css';
import GoogleLogin from 'react-google-login'
import { useHttp } from '../hooks/http.hooks';



export const  SuppaModal =() => {

const [flag, setFlag] = useState(false)
const {request} = useHttp()
const [form,setForm] = useState({
  login:'', password: ''

})



const handleLogin = async() =>{
    try{
        console.log({...form})
        const user = await request('api/auth/login', 'POST', {...form})

        const temp = user.token

        //const data = await request('api/data/verify','POST', {temp} )

       // auth.login(user.token, user.userId, data.user)
    } catch(e) {

    }
}



  const handleModal = () =>
  {
      setFlag(!flag)
  }




const changeHandler = event => {
setForm({...form,[event.target.name]: event.target.value})
}


  const responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);

  }
  const subcribe = event => {

  }
      return(
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Suppa Aggregator</Navbar.Brand>
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
          <Modal.Dialog size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
              <Modal.Title>Регистрация</Modal.Title>
              <Modal.Body>
                 <h>Ф.И.О.</h>
                    <Row>
                      <Col>
                        <div className="form-group" style={{float:'left'}}>
                            <input type="name" className="form-control" placeholder="Name" />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group" style={{float:'left'}}>
                            <input type="surname" className="form-control" placeholder="Surname"/>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group" style={{float:'left'}}>
                            <input type="Lastnname" className="form-control" placeholder="Lastname" />
                        </div>
                      </Col>
                    </Row>
                    <h>E-mail and Pass</h>
                    <Row>
                      <Col>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" name="login" onChange = {changeHandler}/>
                          </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" name="password" onChange = {changeHandler} />
                        </Form.Group>

                      </Col>
                    </Row>
                    <Row>
                      <div>
                        <input type="checkbox"/>Подписаться на рассылку
                      </div>
                    </Row>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="light">Зарегистрироваться</Button>
              </Modal.Footer>
          </Modal.Dialog>
        </div>
      );
    }