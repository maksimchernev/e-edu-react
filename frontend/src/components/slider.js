import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Carousel, Modal, Form, Row, Col} from 'react-bootstrap';
import im from './12.jpg'
import im1 from './13.jpg'

export const Slider =() => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

      return(
        <div>
          	<Carousel activeIndex={index} onSelect={handleSelect}>
	  			<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={im}
				      alt="First slide"
				    />
	    			<Carousel.Caption className="p-slider">
				    <h3>First slide label</h3>
				    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	   				</Carousel.Caption>
	  			</Carousel.Item>
				<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={im1}
				      alt="Second slide"
				    />
				    <Carousel.Caption className="p-slider">
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src=""
				      alt="Third slide"
				    />
	    			<Carousel.Caption className="p-slider">
	      			<h3>Third slide label</h3>
	      			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
	    			</Carousel.Caption>
	  			</Carousel.Item>
			</Carousel>
        </div>
      );
    } 