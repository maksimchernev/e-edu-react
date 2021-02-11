import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  InputGroup,
  FormControl, Collapse} from "react-bootstrap";
import { LoginModal } from "./modal";
import logo from "../images/navbar/Эмблемка.svg";
import Union from "../images/navbar/Union.png";
import feedback from "../images/navbar/feedback.png";
import book from "../images/navbar/book.png";
import bookmark from "../images/navbar/bookmark.png";
import comparison from "../images/navbar/comparison.png";
import horn from "../images/navbar/horn.png";
import unknownuser from "../images/navbar/unknownuser.png";
import {Filters} from '../components/filters'


import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hooks";

export const Nav_ = () => {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const { request } = useHttp();
  const history = useHistory();
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    mail: "",
    password: "",
  });

  const handleModal = () => {
    setFlag(!flag);
  };
  const registerHandler = async () => {
    try {
      await request("api/auth/register", "POST", { ...form });

      history.push("/");
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <Navbar className="nav-background p-2" expand="lg">
        {/* <Container> */}
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              className="changeStyleSwitch"
            />
          </Form>
          <Navbar.Brand href="/mainPage">
            <img className="logo-head" src={logo} />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <button className="navButton navLink"><img src={feedback} alt="feedback"/> Обратная связь</button>
          </Nav>
        {/* </Container> */}
      </Navbar>

      <Navbar className="nav-background p-2" expand="lg">
        {/* <Container> */}
          <Col sm="2" className="colNavButtons">
            <Button variant="primary" size="lg" className="coursesButton">
              <img src={book} alt="Courses"/> Курсы
            </Button>
          </Col>

          <Col sm="6" className="colNavButtons">
          <Form.Row inline className="justify-content-center">
              <InputGroup className="mb-3" className="search">
                <FormControl id = "search" type="search" placeholder="Search" />
                <InputGroup.Append className="appendButton">
                  <button variant = "outline-success" className="navButton"><img src={Union} alt="Search"/></button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Row>

            <Row className="justify-content-center">
                <Button onClick={() => setOpen(!open)} className="navButton" variant="link" aria-controls="collapse" aria-expanded={open} >
                    <p className="navLink" >Расширенный поиск</p>
                </Button>
                <Collapse in={open} className="filters">
                    <div id="collapse" fluid={true}>
                         <Filters />
                    </div>
                </Collapse>
            </Row>
          </Col>
          
          <Col className="colNavButtons">
            <Button className="navButton" variant="link" onClick={handleModal}>
              <img src={unknownuser} alt="user" className = "imgButton"/>
              <p>Войти</p>
            </Button>
          </Col>
          <Col className="colNavButtons"> 
            <Button className="navButton" variant="link">
              <img src={bookmark} alt="bookmark" className="imgButton"/>
              <p>Избранное</p>
            </Button>
          </Col>
          <Col className="colNavButtons"> 
            <Button className="navButton" variant="link">
              <img src={comparison} alt="comparison" className="imgButton"/>
              <p>Сравнение</p>
            </Button>
          </Col>
          <Col className="colNavButtons"> 
            <Button className="navButton" variant="link">
              <img src={horn} alt="horn" className="imgButton"/>
              <p>Акции</p>
            </Button>
          </Col>


        {/*  <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button variant="light" onClick={handleModal}>
                Вход
              </Button>
              <Nav.Link href="/RegisterPage">
                <Button variant="light" id="regButton">
                  Регистрация
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        {/* </Container> */}
      </Navbar>
      <LoginModal show={flag} onHide={handleModal} />
    </React.Fragment>
  );
};
