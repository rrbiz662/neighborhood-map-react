import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MapDisplay from './MapDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <MapDisplay/>
      </div>
    );
  }
}

export default App;
