import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Modal, Form, Row, Col} from 'react-bootstrap';
import { useHttp } from '../hooks/http.hooks';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useMessage } from '../hooks/message.hooks';
import '../сss/modal.css'

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
          <Modal {...props}
          dialogClassName="modal-90w">
          <h5 class="modal-title text-center" id="exampleModalLabel"> Вход </h5>
            <Modal.Body id = "auth_modal">
              <Form>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Введите ваш логин" name="login" onChange = {changeHandler}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Введите ваш пароль" name="password" onChange = {changeHandler} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Запомнить меня"  />
                        </Form.Group>
                    </Col>
                    <Col className="text-right">
                        <a href="#Forgot-your-password">Забыли пароль?</a>
                    </Col>
                </Row>
              <Row className="text-right">
                <Col className = 'col-sm-8'>
                  <Button variant="outline-dark" id="enterButton" onClick={handleLogin}>
                  Войти
                  </Button>
                </Col>
                <Col  id = "sizeBtn">
                  <Button variant="dark" href="/RegisterPage" className="button-reg" id="regButton" onClick={handleLogin}>
                  Регистрация
                  </Button>
                </Col>
              </Row>

            </Form>
            </Modal.Body>
          </Modal>
        </div>
      );
    } 



