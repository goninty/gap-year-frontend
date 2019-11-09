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
    
    this.state = {
      code: this.code,
      name: this.name,
    }

    console.log(this.code);
  }
  

  render() {
    return (
      <Row className="justify-content-center my-2">
        <Button variant="outline-info">
          <ReactCountryFlag code={this.state.code} />
          {this.state.name}
        </Button>
        
      </Row>

    );
  }
}

export default CountryItem;
