import React, { Component } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import CountryItem from "./CountryItem";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { tsImportEqualsDeclaration } from "@babel/types";

class CountryPicker extends Component {
  
  constructor(props) {
    super(props);

    this.display = countryList().getValues() + countryList().getLabels();
    this.options = countryList().getData();

    this.state = {
      options: this.options,
      value: {},
      items: [{'':''}]
    };
  }

  changeHandler = value => {
    this.setState({ value });
    
    let items = [...this.state.items]
    items.push(value);
    this.setState({items});
    console.log(value);
  };

  render() {
    const items = this.state.items;
    console.log(items);
    return (
      <div>
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
      
      {this.state.items.map(i => (
        <CountryItem value={i} />
      ))}
      </div>

  )};

}

export default CountryPicker;
