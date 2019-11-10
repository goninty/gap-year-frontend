import React, { Component } from "react";
import CountrySelector from "./components/CountrySelector";
import DateSelector from "./components/DateSelector";
import $ from 'jquery';

// React bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { withRouter } from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      country: "",
      day: "",
      month: "",
      year: ""
    }

    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
  }

  onChangeCountry(newCountry) {
    this.setState({country: newCountry})
  }

  onChangeDay(newDay) {
    this.setState({day: newDay})
  }

  onChangeMonth(newMonth) {
    this.setState({month: newMonth})
  }

  onChangeYear(newYear) {
    this.setState({year: newYear})
  }

  generateYears() {
    // create the array that will hold the years we want to display
    var years = [];
    var j = 0;
    
    for (var i=new Date().getFullYear(); i>1902; i--) {
      years[j] = i;
      j++;
    }
  
    return years;
  };

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    
    let details = {
      "email": form.elements.formEmail.value,
      "name": form.elements.formName.value,
      "pwd": form.elements.formPassword.value,
      "country": this.state.country["label"],
      "phoneNo": form.elements.formPhoneNumber.value,
      "birthDate": this.state.year["value"] + "-" + this.state.month + "-" + this.state.day["value"]
    };

    console.log(details);

    $.ajax({
      headers: { 
        'Content-Type': 'application/json' 
      },
      url: 'http://35.199.0.172/gyear/register',
      dataType: 'application/json',
      type: 'POST',
      data: JSON.stringify(details),
      success: function(data){alert(data);},
      error: 'oof ya did a bad',
    });

    this.props.history.push('/country-selection');
  }

  render () {

    return (
        <Row className="justify-content-center m-5">
          <Col sm="10" style={{border: "1px solid lightgrey", borderRadius: "25px", padding: "2em"}}>
            <Form onSubmit={this.onSubmit}>
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
                <DateSelector 
                valueDay={this.state.day} 
                valueMonth={this.state.month} 
                valueYear={this.state.year}
                onChangeDay={this.onChangeDay}
                onChangeMonth={this.onChangeMonth}
                onChangeYear={this.onChangeYear} 
                years={this.generateYears()} />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group controlId="formCountry">
                <Form.Label>Country of residence</Form.Label>
                <CountrySelector onChange={this.onChangeCountry} country={this.state.country}/>
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
};

export default withRouter(Register);