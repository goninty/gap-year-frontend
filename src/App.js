import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Register from "./Register";
import Login from "./Login";
import CountrySelection from "./CountrySelection";
import DisplayTrip from "./DisplayTrip";

import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
    <NavBar bg="info" expand="lg">
      <NavBar.Collapse id="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </NavBar>

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/country-selection">
          <CountrySelection />
        </Route>
        <Route path="/view-trip">
          <DisplayTrip />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
