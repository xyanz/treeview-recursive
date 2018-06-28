import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LargeCollection from './LargeCollection/LargeCollection';
import 'react-virtualized/styles.css'
import 'react-virtualized-tree/lib/main.css'
import 'material-icons/css/material-icons.css'


class App extends Component {
  render() {
    const divStyle = {
      height: '500px'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Tree Collection</h1>
        <div style={divStyle}>
          <LargeCollection />
        </div>
      </div>
    );
  }
}

export default App;
