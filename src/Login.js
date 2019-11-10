import React, { Component } from "react";
import $ from "jquery";

// React bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { withRouter } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    
    let details = {
      "email": form.elements.formEmail.value,
      "pwd": form.elements.formPassword.value,
    };

    console.log(details);

    $.ajax({
      headers: { 
        'Content-Type': 'application/json' 
      },
      url: 'http://35.199.0.172/gyear/login',
      dataType: 'application/json',
      type: 'POST',
      data: JSON.stringify(details),
      success: function(data){alert(data);},
      error: 'oof ya did a bad',
    });
    
    this.props.history.push('/country-selection');
  }

  render() {
    return (
      <Row className="justify-content-center m-5">
        <Col
          sm="10"
          style={{
            border: "1px solid lightgrey",
            borderRadius: "25px",
            padding: "2em"
          }}
        >
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                  Login
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Login);
