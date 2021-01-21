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
  FormControl,
} from "react-bootstrap";
import { LoginModal } from "./modal";
import logo from "../images/navbar/Эмблемка.svg";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hooks";

export const Nav_ = () => {
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
      <Navbar className="nav-background p-0" expand="lg">
        <Navbar.Brand href="/mainPage">
          <div></div>
          <img className="logo-head" src={logo} />
        </Navbar.Brand>

        <Col sm="9" className="searchArea">
          <Form.Row inline className="justify-content-center">
            <InputGroup className="mb-3" className="search">
              <FormControl type="search" placeholder="Search" />
              <InputGroup.Append>
                <Button variant="outline-success" className="searchButton">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Row>
          <Row className="justify-content-center">
            <a href="/courses">
              <p>Расширенный поиск</p>
            </a>
          </Row>
        </Col>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

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
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={flag} onHide={handleModal} />
    </React.Fragment>
  );
};
