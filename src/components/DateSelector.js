import React, { Component } from 'react';
import Select from 'react-select'

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
 
class DateSelector extends Component {
  constructor(props) {
    super(props)

    this.days = [];
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.years = [];

    for (var i=0; i<10; i++) {
      this.days[i] = "0" + (i+1).toString(10);
    }

    for (var i=10; i<31; i++) {
      this.days[i] = (i+1).toString(10);
    }

    this.years = this.props.years;
 
    this.state = {
      days: this.days.map(v => ({label: v, value: v})),
      months: this.months.map(v => ({label: v, value: v})),
      years: this.years.map(v => ({label: v, value: v})),
      valueDay: this.props.valueDay,
      valueMonth: this.props.valueMonth,
      valueYear: this.props.valueYear
    }
    console.log(this.state.days["29"]);
  }
 
  changeHandlerDay = valueDay => {
    if (valueDay < 10) {
      this.setState("0" + { valueDay })
    } else {
      this.setState({ valueDay })
    }
  }

  changeHandlerMonth = valueMonth => {
    this.setState({days: this.days.map(v => ({label: v, value: v}))})

    if (valueMonth < 10) {
      this.setState("0" + { valueMonth })
    } else {
      this.setState({ valueMonth })
    }
    
    if (valueMonth === "February") {
      delete this.state.days["28"];
      delete this.state.days["29"];
      delete this.state.days["30"]
    } else if (valueMonth === "September" || valueMonth === "April" || valueMonth === "June" || valueMonth === "November") {
      delete this.state.days["30"];
    }

  }

  changeHandlerYear = valueYear => {
    this.setState({ valueYear })
  }
 
  render() {
    return (
        <Form.Row>
            <Col>
                <Select
                options={this.state.days}
                value={this.state.valueDay}
                onChange={ e => {this.props.onChangeDay(e); this.changeHandlerDay(); }}
                />
            </Col>
        <Col>
        <Select
                options={this.state.months}
                value={this.state.valueMonth}
                onChange={ e => {
                  var monthNo = this.state.months.indexOf(e) + 1;
                  if (monthNo < 10) {
                    monthNo = "0" + monthNo.toString(10);
                  } else {
                    monthNo = monthNo.toString(10);
                  }
                  console.log(monthNo);
                  this.props.onChangeMonth(monthNo); 
                  this.changeHandlerMonth(); }}
                />
        </Col>
        <Col>
        <Select
                options={this.state.years}
                value={this.state.valueYear}
                onChange={ e => {this.props.onChangeYear(e); this.changeHandlerYear(); }}
                />
        </Col>
      </Form.Row>
    )
  }
}

export default DateSelector;