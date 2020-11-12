import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import styles from '../App.css';


export const  SuppaModal =() => {

const [form,setForm] = useState({
  login:'', password: ''

})

const changeHandler = event => {
setForm({...form,[event.target.name]: event.target.value})
}

const subcribe = event => {

}
      return(
        <div>
          <Modal.Dialog size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
              <Modal.Title><Modal.Header> Регистрация </Modal.Header></Modal.Title>
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
                      <Col>
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Подписаться на рассылку"  />
                        </Form.Group>
                      </Col>
                    </Row>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="light">Зарегистрироваться</Button>
              </Modal.Footer>
          </Modal.Dialog>
        </div>
      );
    }