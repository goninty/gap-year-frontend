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
      countries: [],
      year: "",
      month: "",
      day: ""
    };

    this.onPickCountry = this.onPickCountry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemoveCountry = this.onRemoveCountry.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
  }

  onSubmit() {
    var depDate = new Date(this.state.year["value"] + "-" + this.state.month + "-" + this.state.day["value"]);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
      dd = '0'+dd
    } 
    
    if(mm<10) {
      mm = '0'+mm
    } 
    
    var today = new Date(yyyy + "-" + mm + "-" + dd);
    
    var diff = depDate.getTime() - today.getTime();
    diff = diff / (1000*60*60*24);
    console.log(today)

    var depDateTime = depDate.getTime();
    console.log(depDateTime);

    let details = {"countries": [],
                   "country": localStorage.getItem('userCountry'),
                    "departureDate": depDateTime,
                    "numOfDaysInbetween": diff
                    }
    let countries_list = []

    for (var i=0; i<this.state.countries.length; i++) {
      countries_list[i] = this.state.countries[i]["label"]
    }

    details["countries"] = countries_list;
    console.log(details);

    
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "http://212.201.44.245:8080/banana/countries",
      dataType: "json",
      type: "POST",
      data: JSON.stringify(details),
      success: function(response) {
        console.log(response);
        localStorage.removeItem('destinations');
        localStorage.setItem('destinations', response);
      },
      error: "oof ya did a bad"
    });
    

    this.props.history.push('/view-trip');
  };

  onPickCountry = newCountry => {
    let cnts = [...this.state.countries];
    cnts.push(newCountry);
    this.setState({countries: cnts});
  }

  onRemoveCountry = country => {
    let cnts = this.state.countries;
    console.log(cnts);

    for (var i=0; i<cnts.length; i++) {
      if (cnts[i]["labels"] === country) {
        console.log(cnts[i])
        cnts.splice(i, 1);
        break;
      }
    }
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
  
  render() {
    //list of countries
    console.log(this.state.countries);

    return (
      <Container className="my-4">
        
        <Row className="justify-content-center">
            <h5>When would you like to depart?</h5>
        </Row>
        
        <DateSelector 
          years={[new Date().getFullYear(), new Date().getFullYear()+1]}
          valueDay={this.state.day} 
          valueMonth={this.state.month} 
          valueYear={this.state.year}
          onChangeDay={this.onChangeDay}
          onChangeMonth={this.onChangeMonth}
          onChangeYear={this.onChangeYear}
        />
        
        <Col className="my-4"> 
          <Row className="justify-content-center">
            <h5>Now, please pick the countries you'd like to visit.</h5>
          </Row>
        </Col>
        
        <CountryPicker items={this.state.countries}
        onPickCountry={this.onPickCountry}
        removeItem={this.onRemoveCountry}  />

        <Row className="justify-content-center my-4">
            <Button variant="info" onClick={this.onSubmit}>Submit</Button>
        </Row>

      </Container>
    );
  }
}

export default withRouter(CountrySelection);
