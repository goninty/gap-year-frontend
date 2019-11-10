import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
 
class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: this.props.country,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    return (
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={ e => {this.props.onChange(e); this.changeHandler() }}
      />
    )
  }
}

export default CountrySelector;