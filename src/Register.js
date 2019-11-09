import React from "react";
import CountrySelector from "./components/CountrySelector";
import DateOfBirthSelector from "./components/DateOfBirthSelector";

// React bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Register() {
  return (
      <Row className="justify-content-center m-5">
        <Col sm="10" style={{border: "1px solid lightgrey", borderRadius: "25px", padding: "2em"}}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlID="formDOB">
              <Form.Label>Date of birth</Form.Label>
              <DateOfBirthSelector />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country of residence</Form.Label>
              <CountrySelector />
              <Form.Text className="text-muted">This will be used as your starting location.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Please enter a password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group controlId="formPasswordAgain">
              <Form.Label>Please enter your password again</Form.Label>
              <Form.Control type="password"/ >
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    
  );
}

export default Register;