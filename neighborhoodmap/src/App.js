import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MapDisplay from "./MapDisplay";

class App extends Component {
    /**
   * @description Initializes component.
   * @param props The component properties.
   */
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

  /**
   * @description Initializes lists for use by othe components.
   * @param businesses A list of all business.
   * @param filters A list of filters to filter by.
   * @param filteredBusinesses A list of busineses filtered by category.
   */
  initLists = (businesses, filters, filteredBusinesses) => {
    this.setState({
      businessList: businesses,
      filteredBusinessList: filteredBusinesses,
      filterList: filters
    });
  }

  /**
   * @description Updates the filtered businesses list.
   * @param filteredBusinesses A list of businesses filtered by category.
   */
  updateFilteredBusinesses = (filteredBusinesses) => {
    this.setState({
      filteredBusinessList: filteredBusinesses
    });
  }

  /**
   * @description Updates the current location.
   * @param address The new location.
   */
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
