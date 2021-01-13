import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import im from '../images/12.jpg'
import im1 from '../images/13.jpg'
import '../сss/slider.css'

export const Slider =() => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

      return(
        <div className="slider-head">
          	<Carousel activeIndex={index} onSelect={handleSelect}>
	  			<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={im}
				      alt="First slide"
				    />
	    			<Carousel.Caption className="p-slider">
	   				</Carousel.Caption>
	  			</Carousel.Item>
				<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={im1}
				      alt="Second slide"
				    />
				    <Carousel.Caption className="p-slider">
				    </Carousel.Caption>
				</Carousel.Item>
			</Carousel>
        </div>
      );
    } 