import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> My React App </h1>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <footer>
        <hr />
        parvathy-santhosh 2018
        </footer>
      </div>
    );
  }
}

export default App;
