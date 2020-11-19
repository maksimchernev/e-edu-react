import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Modal, Form, Row, Col} from 'react-bootstrap';
import styles from '../App.css';
import GoogleLogin from 'react-google-login';
import { useHttp } from '../hooks/http.hooks';
import {AuthContext} from '../context/AuthContext'
import { useContext } from "react";

export const SuppaModal =(props) => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [form,setForm] = useState({
      login:'', password: ''
  
})

const handleLogin = async() =>{
    try{
        //console.log({...form})
        const user = await request('api/auth/login', 'POST', {...form})
        auth.login(user.token, user.userId)
    } catch(e) {

    }
}


const changeHandler = event => {
    setForm({...form,[event.target.name]: event.target.value})
}
  
const responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

      return(
        <div>
          <Modal {...props}>
            <Modal.Header closeButton> Вход </Modal.Header>
            <Modal.Body>
              <Form>
                
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" name="login" onChange = {changeHandler}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" name="password" onChange = {changeHandler} />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Запомнить меня"  />
                </Form.Group>
              <Row>
                <Col>
                  <Button variant="dark" id="enterButton" onClick={handleLogin}>
                  Войти
                  </Button>

                  <GoogleLogin
                    clientId="272019474369-kophotlk5a37las0qp48o4db5qs8uu1a.apps.googleusercontent.com"
                    buttonText="Войти"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

                </Col>
                <Col className="ml-auto">
                  <Nav.Link href="/RegisterPage"><Button variant="primary" className="ml-auto" id="regButton">
                    Регистрация
                  </Button>
                  </Nav.Link>
                </Col>
              </Row>
              <a href="#Forgot-your-password">Забыли пароль?</a>
            </Form>
            </Modal.Body>
          </Modal>
        </div>
      );
    } 



