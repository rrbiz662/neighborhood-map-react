import React from "react";
import PropTypes from "prop-types";

class MapDisplay extends React.Component {
    static propTypes = {
        setMap: PropTypes.func.isRequired,
        setInfoWindow: PropTypes.func.isRequired,
        map: PropTypes.object
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
        let map = new window.google.maps.Map(mapDiv, {
            zoom: 6,
            center: {
                lat: 30.143347,
                lng: -97.833595
            }
        });
        this.props.setMap(map);
        this.props.setInfoWindow(new window.google.maps.InfoWindow());
    }

    componentDidMount() {
        this.addGoogleMapScript();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="front-spacer" className="col-2"></div>
                    <div id="map" className="col-8"></div>
                    <div id="back-spacer" className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MapDisplay;