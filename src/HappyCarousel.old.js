import React from "react";
import { Carousel } from "react-bootstrap";
import landscape1 from "./img/landscape1.jpg";
import landscape2 from "./img/landscape2.jpg";
import landscape3 from "./img/landscape3.jpeg";

// A nice, simple, happy little carousel.
const HappyCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img width={1351} height={600} alt="900x500" src={landscape1} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1351} height={600} alt="900x500" src={landscape2} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1351} height={600} alt="900x500" src={landscape3} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HappyCarousel;
