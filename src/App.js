import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import WelcomePage from './WelcomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WelcomePage />
      </div>
    );
  }
}

export default App;
