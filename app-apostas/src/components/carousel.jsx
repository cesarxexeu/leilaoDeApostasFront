import React from "react";
import { Carousel } from "react-bootstrap";
import slideOne from '../images/slideOne.png';
import slideTwo from '../images/slideTwo.png';

class Carousell extends React.Component {
  render() {
    return(
        <Carousel id="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ slideOne }
              alt="First slide"
             />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ slideTwo }
              alt="Second slide"
             />
          </Carousel.Item>
        </Carousel>
    )
  }
}

export default Carousell;