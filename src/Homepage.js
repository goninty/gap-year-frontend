// React imports
import React from "react";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Background from "./img/city-skyline.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// React Router Bootstrap import
import { LinkContainer } from 'react-router-bootstrap';

import "./Homepage.css"

function Homepage() {
  return (
    <div className="main">
      
      <Carousel>
        <Carousel.Item>
          <Image className="bg" src={Background} fluid />
          <Carousel.Caption>
            <h1 style={{color: "black"}}>Let us do the work for you.</h1>
            <br/>
              <LinkContainer to="/register">
                <Button className="mx-4" size="xl" variant="info">Get Started</Button>
              </LinkContainer>
              <LinkContainer to="/login">
                <Button className="mx-4" size="xl" variant="info">Login</Button>
              </LinkContainer>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    <br />

      <Container>
        <Col>
          <h2>Want to get away?</h2>
          <p>Do you want to plan a gap year travelling?</p>
          <p>Plan the adventure of a lifetime?</p>
          <p>Or even just plan a commute?</p>
          <p>We're here for you.</p>
          <p>Utilising tools and APIs provided by SkyScanner, we are taking you everywhere you want to go, for a price you want to pay.</p>
          <p>In the click a few buttons, you'll be away on a trap that will be unforgettable.</p> 
          <p>Get started above.</p>
          <br />
          <p>This was a project created for jacobsHack! 2019.</p>
          <p>The GitHub repo(s) can be found  
            <a href="https://github.com/Mallington/Gap-Year"> here </a>
            and <a href="https://github.com/goninty/gap-year-frontend">here</a>.
          </p>
        </Col>
      </Container>
      
    </div>

  );
}

export default Homepage;
