import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Modal, Form, Row, Col} from 'react-bootstrap';
import styles from '../App.css';

export default class SuppaModal extends React.Component {
  constructor() 
  {
    super()
    this.state={
      show:false
    }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  render() {
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
                <Button variant="light" onClick={()=>{this.handleModal()}}>Вход</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Modal show={this.state.show} onHide={()=>{this.handleModal()}}>
            <Modal.Header closeButton> Вход </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Запомнить меня" />
                </Form.Group>
              <Row>
                <Col>
                  <Button variant="dark" type="submit" id="enterButton">
                  Войти
                  </Button>
                </Col>
                <Col className="ml-auto">
                  <Button variant="primary" className="ml-auto" id="regButton">
                    Регистрация
                  </Button>
                </Col>
              </Row>
              <a href="#">Забыли пароль?</a>
            </Form>
            </Modal.Body>
          </Modal>
        </div>
      );
    } 
}

