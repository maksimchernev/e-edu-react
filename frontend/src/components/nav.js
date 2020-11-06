import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Modal, Form, Row, Col} from 'react-bootstrap';
import styles from '../App.css';
import GoogleLogin from 'react-google-login'
import { useHttp } from '../hooks/http.hooks';



export const  SuppaModal =() => {
  /*constructor() 
  {
    super()
    this.state={
      show:false,
      login:'', 
      password: ''

    }

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

  }
 
 

  onChangeLogin(e) {
    var val = e.target.value;
    this.setState({login: val});
}

onChangePassword(e) {
  var val = e.target.value;
  this.setState({password: val});
}
*/

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

      console.log(flag)
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
          <Modal show={flag} onHide={handleModal}>
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
                  <Button variant="dark" id="enterButton" onClick={()=>{handleLogin()}}>
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
              <a href="#">Забыли пароль?</a>
            </Form>
            </Modal.Body>
          </Modal>
        </div>
      );
    } 


