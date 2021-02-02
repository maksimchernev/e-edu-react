import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Navbar, Nav} from 'react-bootstrap';
import '../сss/footer.css'
import fb from '../images/footer/Facebook - Negative.png'
import inst from '../images/footer/Instagram - Negative.png'
import tw from '../images/footer/Twitter - Negative.png'
import vk from '../images/footer/vk.png'
import yout from '../images/footer/YouTube - Negative.png'

export const Footer =() => {
	return(
    <footer className="footer-grid ">
      <Navbar expand="lg">
            <Row>
                <Col xs={2} className="colLinkls">
                    <a href="#"><img className="soc-net" src={fb} /></a>
                </Col>
                <Col xs={2} className="colLinkls">
                    <a href="#"><img className="soc-net" src={inst} /></a>
                </Col>
                <Col xs={2} className="colLinkls">
                    <a href="#"><img className="soc-net" src={tw} /></a>
                </Col>
                <Col xs={2} className="colLinkls">
                    <a href="#"><img className="soc-net" src={vk} /></a>
                </Col>
                <Col xs={2} className="colLinkls">
                    <a href="#"><img className="soc-net" src={yout} /></a>
                </Col>
            </Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto color-text">
                    <Nav.Link href="/opinions">Отзывы</Nav.Link>
                    <Nav.Link href="/aboutUs">О проекте</Nav.Link>
                    <Nav.Link href="/partners">Компаниям</Nav.Link>
                    <Nav.Link href="/vacancies">Вакансиии</Nav.Link>
                    <Nav.Link href="/help">Помощь</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>

    </footer>
		);
	}