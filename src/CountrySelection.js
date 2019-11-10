import React, { Component } from "react";
import CountryPicker from "./components/CountryPicker";
import countryList from 'react-select-country-list';
import $ from 'jquery';

// React bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DateSelector from "./components/DateSelector";

import { withRouter } from 'react-router';

class CountrySelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };

    this.onPickCountry = this.onPickCountry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    let details = {"countries": []}
    let countries_list = []

    for (var i=0; i<this.state.countries.length; i++) {
      countries_list[i] = this.state.countries[i]["label"]
    }

    details["countries"] = countries_list;
    //console.log(details);

    
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "http://35.199.0.172/gyear/countries",
      dataType: "application/json",
      type: "POST",
      data: JSON.stringify(details),
      success: function(data) {
        alert(data);
      },
      error: "oof ya did a bad"
    });
    
    this.props.history.push('/');
  };

  onPickCountry = newCountry => {
    let cnts = [...this.state.countries];
    cnts.push(newCountry);
    this.setState({countries: cnts});
  }
  
  render() {
    //list of countries
    //console.log(this.state.countries);

    return (
      <Container className="my-4">
        
        <Row className="justify-content-center">
            <h5>When would you like to depart?</h5>
        </Row>
        
        <DateSelector 
        years={[new Date().getFullYear(), new Date().getFullYear()+1]}
        />
        
        <Col className="my-4"> 
          <Row className="justify-content-center">
            <h5>Now, please pick the countries you'd like to visit.</h5>
          </Row>
        </Col>
        
        <CountryPicker items={this.state.countries}
        onPickCountry={this.onPickCountry}/>

        <Row className="justify-content-center my-4">
            <Button variant="info" onClick={this.onSubmit}>Submit</Button>
        </Row>

      </Container>
    );
  }
}

export default withRouter(CountrySelection);
