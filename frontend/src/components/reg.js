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
                    <form data-toggle="validator">
                        <Row>
                          <Col>
                            <div className="form-group has-feedback " style={{float:'left'}}>
                                <input type="name" class="form-control" id="input-name"
               data-required-error="Поле не заполнено" placeholder="Имя" onChange = {changeHandler} required/>
                            </div>
                          </Col>
                          <Col>
                            <div className="form-group has-feedback" style={{float:'left'}}>
                                <input type="surname" className="form-control" data-required-error="Поле не заполнено" placeholder="Фамилия" name="secondName" onChange = {changeHandler} required/>
                            </div>
                          </Col>
                          <Col>
                            <div className="form-group has-feedback" style={{float:'left'}}>
                                <input type="Lastname" className="form-control" data-required-error="Поле не заполнено" placeholder="Отчество(если есть)" name="lastName" onChange = {changeHandler} required/>
                            </div>
                          </Col>
                        </Row>
                    </form>
                    <h4>E-mail and Pass</h4>
                    <Row>
                      <Col>
                         <input type="email" class="form-control" id="email"
               pattern="[_0-9a-z][-_.0-9a-z]*@[0-9a-z][-.0-9a-z]*[0-9a-z]\.[a-z]{2,}"
               data-pattern-error="Поле должно соответствовать формату somebody@somewhere.com"
               data-required-error="Поле не заполнено" placeholder="Адрес почты" required/>

                      </Col>
                      <Col>
                        <input type="password" class="form-control" id="input-password"
               data-required-error="Поле не заполнено" placeholder="Password" required/>
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