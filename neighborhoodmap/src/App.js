import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MapDisplay from "./MapDisplay";

class App extends Component {
  mediaQueryListener = (mediaQueryList) => {
    switch(mediaQueryList.media){
      case "(max-width: 850px)":
        let sidebar = document.getElementById("sidebar");

        if(mediaQueryList.matches)
          sidebar.classList.add("sidenav-toggle-off");
        else
          sidebar.classList.remove("sidenav-toggle-off");

        break;
      case "(max-width: 550px)":
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
    }
  }

  componentDidMount(){
    let mediaQueryList = [
      window.matchMedia("(max-width: 850px)"),
      window.matchMedia("(max-width: 550px)")
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
