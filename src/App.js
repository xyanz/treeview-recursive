import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LargeCollection from './LargeCollection/LargeCollection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Tree Collection</h1>
        <LargeCollection />
      </div>
    );
  }
}

export default App;
