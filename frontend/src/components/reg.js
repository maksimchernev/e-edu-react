import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import { useHttp } from '../hooks/http.hooks';
//import { useMessage } from '../hooks/message.hooks'
import { useHistory } from 'react-router-dom'
import '../сss/reg.css'


export const  Reg =() => {


    const {request,} = useHttp()
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

          await request('api/auth/register', 'POST', {...form},)

          history.push('/')
      } catch(e) {

      }
}
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      return(
        <div>
          <Modal.Dialog dialogClassName="modal-90w"
              aria-labelledby="contained-modal-title-vcenter "
              centered>
              <h3 class="modal-title text-center" id="exampleModalLabel"> Регистрация </h3>
                <Modal.Body  className="all-elements">
                    <form data-toggle="validator">
                        <Row>
                            <div className="form-group has-feedback "  id="text" className="text" style={{float:'left'}}>
                                <input type="name"  className="inp form-control" id="input-name"
                                    data-required-error="Поле не заполнено" placeholder="Имя" name="firstName" onChange = {changeHandler} required/>
                            </div>
                        </Row>
                        <Row>
                            <div className="form-group has-feedback" id="text" style={{float:'left'}}>
                                <input type="surname" className="inp form-control" data-required-error="Поле не заполнено" placeholder="Фамилия" name="secondName" onChange = {changeHandler} required/>
                            </div>
                        </Row>
                        <Row>
                            <div className="form-group has-feedback" id="text" style={{float:'left'}}>
                                <input type="email"   className="inp form-control" id="email"
                                               pattern="[_0-9a-z][-_.0-9a-z]*@[0-9a-z][-.0-9a-z]*[0-9a-z]\.[a-z]{2,}"
                                               data-pattern-error="Поле должно соответствовать формату somebody@somewhere.com"
                                               data-required-error="Поле не заполнено" placeholder="Эл. почта" name="mail" onChange = {changeHandler} required/>
                            </div>
                        </Row>
                        <Row>
                            <Button id="btn" className="btn-save" variant="dark" onClick = {handleShow} data-toggle="modal" href="#stack2">Сохранить изменения</Button>
                        </Row>
                    </form>

                    <Modal show={show} onHide={handleClose} id="stack2" aria-labelledby="contained-modal-title-vcenter" centered  dialogClassName="modal-90w">
                        <h3 class="modal-title text-center" id="exampleModalLabel"> Регистрация </h3>
                        <Modal.Body>
                            <form data-toggle="validator">
                              <Row className="justify-content-center">
                                <Col>
                                    <Row>
                                        <div className="form-group has-feedback " id="text" className="text" style={{float:'left'}}>
                                            <input type="password"  className="inp form-control" id="input-password"
                                                data-required-error="Поле не заполнено" placeholder="Пароль" name="password" onChange = {changeHandler} required/>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="form-group has-feedback"  id="text" style={{float:'left'}}>
                                            <input type="password"  className="inp form-control" id="input-password"
                                                data-required-error="Поле не заполнено" placeholder="Повторите пароль" name="password" onChange = {changeHandler} required/>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="border" id="captcha">Капча</div>
                                    </Row>
                                    <Row>
                                        <Form.Group controlId="formBasicCheckbox">
                                          <Form.Check type="checkbox" label="Подписаться на рассылку"  />
                                        </Form.Group>
                                    </Row>
                                </Col>
                                <Col>
                                    <div className="border" id="rules">Инструкции по паролю</div>
                                </Col>
                              </Row>
                              <Row>
                                <Button variant="dark" className="btn-reg" id="btn" onClick = {registerHandler}>Регистрация</Button>
                              </Row>
                            </form>
                        </Modal.Body>
                    </Modal>
                </Modal.Body>
          </Modal.Dialog>

        </div>
      );

    }

