import React, { Component } from "react";
import CountryPicker from "./components/CountryPicker";
import countryList from "react-select-country-list";
import GoogleMapReact from "google-map-react";
import $ from "jquery";
import CountryItem from "./components/CountryItem";

import MyGreatPlace from './components/MyGreatPlace.jsx';

// React bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

require("dotenv").config();

class DisplayTrip extends Component {
  constructor(props) {
    super(props);

    this.userEmail = localStorage.getItem('userEmail');
    this.startCountry = localStorage.getItem('userCountry');

    this.state = {
      email: this.userEmail,
      country: this.startCountry,
      center: {"lat": 51.469721, "lng": -0.454080}
    };
  }


  render() {
    return (
      <Row className="m-3">
        <Col style={{ height: "90vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            defaultCenter={ this.state.center }
            defaultZoom={4}
          >
            <MyGreatPlace lat={51.469721} lng={-0.454080} text={'1'} />
            <MyGreatPlace lat={53.046932} lng={8.786298} text={'2'} />
            <MyGreatPlace lat={38.952236} lng={-77.459538} text={'3'} />

            <MyGreatPlace lat={50.041635} lng={8.559922} text={'4'} />
          </GoogleMapReact>
        </Col>

        <Col align="center" >
          <h3>Your trip...</h3>
          <br />
          <CountryItem value={{"value":"GB", "label":"United Kingdom"}}metadata={"2019-11-11 at 14:40"} />
          <br />
          <CountryItem value={{"value":"DE", "label":"Germany"}}metadata={"2019-11-15 at 11:00"} />
          <br />
          <CountryItem value={{"value":"US", "label":"United States"}}metadata={"2019-11-19 at 17:20"} />
          <br />
          <CountryItem value={{"value":"DE", "label":"Germany"}}metadata={"2019-11-23 at 13:15"} />
        </Col>
      </Row>
    );
  }
}

export default DisplayTrip;
