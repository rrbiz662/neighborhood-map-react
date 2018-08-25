import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MapDisplay from "./MapDisplay";

const MEDIA_QUERY_MD = "(max-width: 768px)";
const MEDIA_QUERY_SM = "(max-width: 550px)";

class App extends Component {
  state = {
    businessList: [],
    filteredBusinessList: [],
    filterList: [],
    location: ""
  }

  setupMediaQueries = () => {
    let mediaQueryList = [
      window.matchMedia(MEDIA_QUERY_MD),
      window.matchMedia(MEDIA_QUERY_SM)
    ];

    mediaQueryList.forEach((query) => {
      this.handleMediaQuery(query);
      query.addListener(this.handleMediaQuery);

    })
  }

  handleMediaQuery = (mediaQueryList) => {
    switch(mediaQueryList.media){
      case MEDIA_QUERY_MD:
        let sidebar = document.getElementById("sidebar");

        if(mediaQueryList.matches)
          sidebar.classList.add("sidenav-toggle-off");
        else
          sidebar.classList.remove("sidenav-toggle-off");

        break;
      case MEDIA_QUERY_SM:
        let frontSpacer = document.getElementById("front-spacer");
        let map = document.getElementById("map");
        let backSpacer = document.getElementById("back-spacer");

        if(mediaQueryList.matches){
          frontSpacer.classList.remove("col-2");
          backSpacer.classList.remove("col-2");
          map.classList.replace("col-8", "col-12");
        }
        else{
          frontSpacer.classList.add("col-2");
          backSpacer.classList.add("col-2");
          map.classList.replace("col-12", "col-8");
        }

        break;
      default:
        // On default do nothing.
        break;    }
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

  componentDidMount(){
    this.setupMediaQueries();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar
          businessList={this.state.businessList}
          filteredBusinessList={this.state.filteredBusinessList}
          filters={this.state.filterList}
          initLists={this.initLists}
          updateFilteredBusinesses={this.updateFilteredBusinesses}
          updateLocation={this.updateLocation}
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
