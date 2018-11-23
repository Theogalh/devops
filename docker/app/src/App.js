import React, { Component } from "react";
import "./App.css";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      res: null
    };
  }

  componentDidMount() {
    const url = process.env.REACT_APP_API_URL || "localhost";
    const port = process.env.REACT_APP_API_PORT || 3000;

    console.log(`GET http://${url}:${port}`);

    axios
      .get(`http://${url}:${port}`)
      .then(response => {
        // handle success
        console.log(response);
        this.setState({ res: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.res ? (
            <span>{this.state.res}</span>
          ) : (
            <span>Loading...</span>
          )}
        </header>
      </div>
    );
  }
}

export default App;
