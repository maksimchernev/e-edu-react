import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Modal, Form, Row, Col} from 'react-bootstrap';
import { useHttp } from '../hooks/http.hooks';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useMessage } from '../hooks/message.hooks';

export const LoginModal =(props) => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {request} = useHttp()
    const [form,setForm] = useState({
      login:'', password: ''
  
})

const handleLogin = async() =>{
    try{
        const user = await request('api/auth/login', 'POST', {...form})
        message(user.message)
        auth.login(user.token, user.userId)
    } catch(e) {

    }
}


const changeHandler = event => {
    setForm({...form,[event.target.name]: event.target.value})
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

                </Col>

              </Row>
              <a href="#Forgot-your-password">Забыли пароль?</a>
            </Form>
            </Modal.Body>
          </Modal>
        </div>
      );
    } 



