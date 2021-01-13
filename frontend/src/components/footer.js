import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap';
import '../сss/footer.css'

export const Footer =() => {
	return(
    <footer className="footer-grid ">

      <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
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