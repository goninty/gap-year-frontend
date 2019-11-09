import React from "react";
import CountryPicker from "./components/CountryPicker";
import countryList from 'react-select-country-list';

// React bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DateSelector from "./components/DateSelector";

function CountrySelection({ props }) {
  const countries = countryList().getData();
  
  return (
    <Container className="my-4">
      
      <Row className="justify-content-center">
          <h5>When would you like to depart?</h5>
      </Row>
      
      <DateSelector years={[new Date().getFullYear(), new Date().getFullYear()+1]} />
      
      <Col className="my-4"> 
        <Row className="justify-content-center">
          <h5>Now, please pick the countries you'd like to visit.</h5>
        </Row>
      </Col>
      
      <CountryPicker />

    </Container>
  );
}

export default CountrySelection;
