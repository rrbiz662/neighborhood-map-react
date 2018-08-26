import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MapDisplay from "./MapDisplay";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      businessList: [],
      filteredBusinessList: [],
      filterList: [],
      location: ""
    };

    this.sidebarRef = React.createRef();
  }

  initLists = (businesses, filters, filteredBusinesses) => {
    this.setState({
      businessList: businesses,
      filteredBusinessList: filteredBusinesses,
      filterList: filters
    });
  }

  updateFilteredBusinesses = (filteredBusinesses) => {
    this.setState({
      filteredBusinessList: filteredBusinesses
    });
  }

  updateLocation = (address) => {
    this.setState({
      location: address
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar sidebarRef={this.sidebarRef}/>
        <Sidebar
          businessList={this.state.businessList}
          filteredBusinessList={this.state.filteredBusinessList}
          filters={this.state.filterList}
          initLists={this.initLists}
          updateFilteredBusinesses={this.updateFilteredBusinesses}
          updateLocation={this.updateLocation}
          ref={this.sidebarRef}
        />
        <MapDisplay
          location={this.state.location}
          businessList={this.state.businessList}
          filteredBusinessList={this.state.filteredBusinessList}
        />
      </div>
    );
  }
}

export default App;
