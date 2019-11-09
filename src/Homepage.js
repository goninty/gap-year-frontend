import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Background from "./img/city-skyline.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./Homepage.css"

function Homepage() {
  return (
    <div className="main">
      
      <Carousel>
        <Carousel.Item>
          <Image className="bg" src={Background} fluid />
          <Carousel.Caption>
            <h1>Let us do the work for you.</h1>
            <br/>
            <Button size="xl" variant="info">Let's go</Button>
            <Button size="xl" variant="info">Let's go</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    <br />

      <Container>
        <Col>
          <h1>Welcome to your gap year made easy.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p></p>
        </Col>
      </Container>
      
    </div>

  );
}

export default Homepage;
