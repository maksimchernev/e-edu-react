import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import { useHttp } from '../hooks/http.hooks';
//import { useMessage } from '../hooks/message.hooks'
import { useHistory } from 'react-router-dom'


export const  SuppaModal =() => {


const {loading,request,error, clearError} = useHttp()
//const message = useMessage()
const history = useHistory()



const [form,setForm] = useState({
  firstName:'', secondName: '', lastName: '', mail: '', password: ''
})

const changeHandler = event => {
setForm({...form,[event.target.name]: event.target.value})
}

const subcribe = event => {

}

const registerHandler = async() =>{
  try{

      const data = await request('api/auth/register', 'POST', {...form}, /*{ 
        Authorization: `Bearer ${auth.token}`}*/)
       //message(data.message)

      history.push('/')
  } catch(e) {

  }
} 

      return(
        <div>
          <Modal.Dialog size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
              <Modal.Title><Modal.Header> Регистрация </Modal.Header></Modal.Title>
              <Modal.Body>
                 <h4>Ф.И.О.</h4>
                    <Row>
                      <Col>
                        <div className="form-group" style={{float:'left'}}>
                            <input type="name" className="form-control" placeholder="Имя" name="firstName" onChange = {changeHandler} />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group" style={{float:'left'}}>
                            <input type="surname" className="form-control" placeholder="Фамилия" name="secondName" onChange = {changeHandler}/>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group" style={{float:'left'}}>
                            <input type="Lastname" className="form-control" placeholder="Отчество(если есть)" name="lastName" onChange = {changeHandler} />
                        </div>
                      </Col>
                    </Row>
                    <h4>E-mail and Pass</h4>
                    <Row>
                      <Col>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" name="mail" onChange = {changeHandler}/>
                          </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" name="password" onChange = {changeHandler} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Подписаться на рассылку"  />
                        </Form.Group>
                      </Col>
                    </Row>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="light" onClick = {registerHandler}>Зарегистрироваться</Button>
              </Modal.Footer>
          </Modal.Dialog>
        </div>
      );
    }