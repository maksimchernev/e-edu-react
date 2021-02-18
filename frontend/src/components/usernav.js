import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Dropdown,
  InputGroup,
  FormControl,
  Container, Collapse
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../сss/navbar.css";
import person1 from "../images/navbar/person1.png";
import logo from "../images/navbar/Эмблемка.svg";
import Union from "../images/navbar/Union.png";
import feedback from "../images/navbar/feedback.png";
import book from "../images/navbar/book.png";
import bookmark from "../images/navbar/bookmark.png";
import comparison from "../images/navbar/comparison.png";
import horn from "../images/navbar/horn.png";
import user from "../images/navbar/user.png";
import unknownuser from "../images/navbar/unknownuser.png";
import {Filters} from '../components/filters'
import my_courses from '../images/navbar/my_courses.png'
import settings from '../images/navbar/settings.png'
import sign_out from '../images/navbar/sign_out.png'

export const Usernav = () => {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
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
          <button className="navButton navLink">
            <img src={feedback} alt="feedback" /> Обратная связь
          </button>
        </Nav>
        {/* </Container> */}
      </Navbar>

      
      <Navbar className="nav-background p-2" expand="lg">
        {/* <Container> */}
       
        <Col sm="2" className="colNavButtons">
        <Navbar.Brand href="/courses">
          <Button variant="primary" size="lg" className="coursesButton">
            <img src={book} alt="Courses" /> Курсы
          </Button>
          </Navbar.Brand>
        </Col>
       

        <Col sm="6" className="colNavButtons">
          <Form.Row inline className="justify-content-center">
            <InputGroup className="mb-3" className="search">
              <FormControl type="search" placeholder="Search" />
              <InputGroup.Append className="appendButton ml-0">
                <button variant="outline-success" className="navButton">
                  <img src={Union} alt="Search" />
                </button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Row>

          <Row className="justify-content-center">
                <Button onClick={() => setOpen(!open)} className="navButton" variant="link" aria-controls="collapse" aria-expanded={open} >
                    <p className="navLink" >Расширенный поиск</p>
                </Button>
            </Row>
        </Col>

        <Col className="colNavButtons">
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="navButton"
              id="dropdown-basic"
              block
            >
              <img className="person1-head imgButton" src={person1} /*TODO: [ER-15] Отображение имени пользователя*//>
              <p>Имя </p>
            </Dropdown.Toggle>
            <Dropdown.Menu
              id="dropdown-menu-right"
              style={{ right: "auto", left: "auto" }}
            >
              <Dropdown.Item href="/myCourses"><img src={my_courses} alt="Courses" className="dropDownIcon"/>Мои курсы</Dropdown.Item>
              <Dropdown.Item href="/settings"><img src={settings} alt="Courses" className="dropDownIcon"/>Настройки</Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler}><img src={sign_out} alt="Courses" className="dropDownIcon"/>Выход</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="colNavButtons">
          <Button className="navButton" variant="link">
            <img src={bookmark} alt="bookmark" className="imgButton" />
            <p>Избранное</p>
          </Button>
        </Col>
        <Col className="colNavButtons">
          <Button className="navButton" variant="link">
            <img src={comparison} alt="comparison" className="imgButton" />
            <p>Сравнение</p>
          </Button>
        </Col>
        <Col className="colNavButtons">
          <Button className="navButton" variant="link" href="/specialOffers">
            <img src={horn} alt="horn" className="imgButton" />
            <p>Акции</p>
          </Button>
        </Col>
        {/* </Container> */}
      </Navbar>

      {/* <Navbar className = "nav-background" expand="lg">

            <Navbar.Brand href="/mainPage">
                <img className="logo-head" src={logo} />
            </Navbar.Brand>

            <Col sm="9" className="searchArea">
            <Form.Row inline className="justify-content-center">
              <InputGroup className="mb-3" className="search">
                <FormControl type="text" placeholder="Search"/>  
                <InputGroup.Append>
                  <Button variant="outline-success" className="searchButton">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Row>
                <Row className="justify-content-center">
                    <a href="/courses"><p>Расширенный поиск</p></a>
                </Row>
            </Col>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Dropdown>
                  <Dropdown.Toggle variant="dark" className="custom-btn textColor" id="dropdown-basic">
                    <img className="person1-head"  src={person1} />
                    Имя
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="dropdown-menu-right" style={{right: 0, left:"auto"}}>
                    <Dropdown.Item href="/myCourses">Мои курсы</Dropdown.Item>
                    <Dropdown.Item href="/settings">Настройки</Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler}>Выход</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>

          </Navbar> */}
          <Collapse in={open} className="filters">
                    <div id="collapse" fluid={true}>
                         <Filters />
                    </div>
          </Collapse>
    </React.Fragment>
  );
};
