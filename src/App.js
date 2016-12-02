import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TolearnApp from './components/TolearnApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Struggle Is Real!!!</h2>
        </div>
        <TolearnApp />
      </div>
    );
  }
}

export default App;
