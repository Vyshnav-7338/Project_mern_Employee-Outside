import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../Image/image1.jpg";
import image2 from "../../Image/image2.jpg";
import image3 from "../../Image/image3.jpg";
import "./Carousels.css";
function Carousels() {
  return (
    <section>
      <Carousel data-bs-theme="light">
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Carousels;
