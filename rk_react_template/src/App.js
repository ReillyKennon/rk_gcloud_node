import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HELLO FROM RK REACT SERVER!!</h1>
        </header>
        <p className="App-intro">
          If you are reading me I'm working!
        </p>
      </div>
    );
  }
}

export default App;
