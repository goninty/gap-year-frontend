import React, { Component } from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import ReactCountryFlag from 'react-country-flag';


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class CountryItem extends Component {
  constructor(props) {
    super(props);
    this.code = this.props.value["value"];
    this.name = this.props.value["label"];
    this.metadata = this.props.metadata;
    this.removal = this.props.removal;
    
    this.state = {
      code: this.code,
      name: this.name,
      metadata: this.metadata
    }

    console.log(this.code);
  }

  updateList() {
    this.state.code = this.props.value["value"]
    this.state.name = this.props.value["label"]
  }
  

  render() {
    return (
      <Col className="justify-content-center my-2" align="center">
      <Row className="justify-content-center">
        <Button variant="outline-danger" 
        >
          <ReactCountryFlag code={this.state.code} />
          {this.state.name}
        </Button>
      </Row>
      {this.state.metadata}
      
      </Col> 

    );
  }
}

export default CountryItem;
