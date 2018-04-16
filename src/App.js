import React, { Component } from "react";
import { CountrySelect } from "./CountrySelect";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>Country selector</h3>
        <CountrySelect />
      </div>
    );
  }
}

export default App;
