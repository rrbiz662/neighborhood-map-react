import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
