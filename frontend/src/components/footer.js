import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardDeck, Carousel, Modal, Form, Row, Col} from 'react-bootstrap';

export const Footer =() => {
	return(
		<div className="navbar-fixed-bottom footer-color">
      		<div className="navbar-inner">
          		<div className="container">
          			<p>this is the footer</p>
          		</div>
          	</div>
        </div>
		);
	}