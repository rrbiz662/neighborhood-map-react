import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MapDisplay from "./MapDisplay";

const MEDIA_QUERY_MD = "(max-width: 768px)";
const MEDIA_QUERY_SM = "(max-width: 550px)";

class App extends Component {
  state = {
    map: null,
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

  addGoogleMapScript = () => {
    const script = document.createElement("script");

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpz3lEiM6sC23AMUOSJ6frxjjE95EXI50&callback=initMap";
    script.async = true;

    document.body.appendChild(script);

    window.initMap = this.initMap;
  }

  initMap = () => {
    let mapDiv = document.getElementById("map");

    this.setState({
      map: new window.google.maps.Map(mapDiv, {
        zoom: 6,
        center: {
          lat: 30.143347,
          lng: -97.833595
        }
      })
    });
  }

  componentDidMount(){
    this.setupMediaQueries();
    this.addGoogleMapScript();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar map={this.state.map}/>
        <MapDisplay/>
      </div>
    );
  }
}

export default App;
