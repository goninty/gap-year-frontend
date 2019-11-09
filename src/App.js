import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
