import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MapDisplay from "./MapDisplay";

const MEDIA_QUERY_MD = "(max-width: 768px)";
const MEDIA_QUERY_SM = "(max-width: 550px)";

class App extends Component {
  mediaQueryListener = (mediaQueryList) => {
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
          frontSpacer.classList.remove("col-1");
          backSpacer.classList.remove("col-1");
          map.classList.replace("col-10", "col-12");
        }
        else{
          frontSpacer.classList.add("col-1");
          backSpacer.classList.add("col-1");
          map.classList.replace("col-12", "col-10");
        }

        break;
    }
  }

  componentDidMount(){
    let mediaQueryList = [
      window.matchMedia(MEDIA_QUERY_MD),
      window.matchMedia(MEDIA_QUERY_SM)
    ];

    mediaQueryList.forEach((query) => {
      this.mediaQueryListener(query);
      query.addListener(this.mediaQueryListener);

    })
  }

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
