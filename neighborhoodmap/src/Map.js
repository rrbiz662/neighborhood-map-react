import React from "react"
import PropTypes from "prop-types"
import YelpImg from "./yelp.png"

class Map extends React.Component{
    static propTypes = {
        location: PropTypes.string,
        businessList: PropTypes.array,
        filteredBusinessList: PropTypes.array
    }


    /**
     * @description Initializes component.
     * @param props The component properties.
     */
    constructor(props){
        super(props);
        this.state = {
            map: null,
            infoWindow: null
        }

        this.MapRef = React.createRef();
    }

    /**
     * @description Adds google map script to the DOM.
     */
    addGoogleMapScript = () => {
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpz3lEiM6sC23AMUOSJ6frxjjE95EXI50&callback=initMap";
        script.async = true;
        script.onerror = this.handleGoogleMapError;
        document.body.appendChild(script);

        window.initMap = this.initMap;
    }

    /**
     * @description Initializes the map object.
     */
    initMap = () => {
        let map = new window.google.maps.Map(this.MapRef.current, {
            zoom: 6,
            center: {
                lat: 30.143347,
                lng: -97.833595
            }
        });

        // Update the state.
        this.setState({
            map: map,
            infoWindow: new window.google.maps.InfoWindow()
        });
    }

    /**
     * @description Handles errors that may occur retrieving map.
     * @param e The error event.
     */
    handleGoogleMapError = (e) => {
        if(e.type === "error")
            alert("Error retrieving map from Google.");
    }

    /**
     * @description Zooms map to the passed in location.
     * @param address The location to zoom to.
     */
    zoomToArea = (address) => {
        if(this.state.map !== null){
            let geoCoder = new window.google.maps.Geocoder();

            geoCoder.geocode({
                address: address
            }, (results, status) => {
                if(status === window.google.maps.GeocoderStatus.OK){
                    this.state.map.setCenter(results[0].geometry.location);
                    this.state.map.setZoom(10);
                }
            });
        }
    }

    /**
     * @description Creates a map marker for the passed in business.
     * @param business The business to create a map marker for.
     */
    createMarker = (business) => {
        let position = {
            lat: business.latitude,
            lng: business.longitude
        };

        let marker = new window.google.maps.Marker({
            position: position,
            title: business.name,
            animation: window.google.maps.Animation.DROP
        });

        marker.setMap(this.state.map);

        marker.addListener("click", () => {
            this.populateInfoWindow(marker, business);
            this.toggleBounce(marker);
        });

        return marker;
    }

    /**
     * @description Populates map info window for the passed in marker with information from the passed in business.
     * @param marker The marker to populate an info window for.
     * @param business The business to get data from.
     */
    populateInfoWindow = (marker, business) => {

        let infoWindow = this.state.infoWindow;

        // Make sure only one info window is displayed at a time.
        if(infoWindow.marker === null){
            infoWindow.marker = marker;

            infoWindow.addListener("closeclick", () => {
                infoWindow.marker = null;
            });
        }

        // Business info to display in info window.
        let content = `
                        <div><b>${business.name}</b><br>
                        ${business.phone}<br>
                        ${business.address.street}<br>
                        ${business.address.city}<br>
                        <a href="https:www.yelp.com"><img src="${YelpImg}" alt="yelp image"></a></div>
                        `;

        infoWindow.setContent(content);
        infoWindow.open(this.state.map, marker);
    }

    /**
     * @description Toggles bounce on for .75 seconds then toggles it off.
     * @param marker The marker to toggle the bounce for.
     */
    toggleBounce = (marker) => {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => {
            marker.setAnimation(null)
        }, 750);
    }

    /**
     * @description Toggles business markers on/off.
     * @param businessList The businesses that need toggling.
     * @param toggleOn Boolean value indicating whether to toggle markers on/off.
     */
    toggleMarkers = (businessList, toggleOn) => {
        businessList.forEach((business) => {
            if(toggleOn)
                business.marker.setMap(this.state.map);
            else
                business.marker.setMap(null);
        });
    }

    /**
     * @description Adds Google Maps script to the DOM.
     */
    componentDidMount() {
        this.addGoogleMapScript();
    }

    /**
     * Handles changes to component properties.
     * @param prevProps The previous properties.
     */
    componentDidUpdate(prevProps){
        // Zoom to new location.
        if(this.props.location !== prevProps.location)
            this.zoomToArea(this.props.location);

        // New business list, toggle old list markers off and create new markers for new list.
        if(this.props.businessList !== prevProps.businessList){
            this.toggleMarkers(prevProps.businessList, false);
            this.props.businessList.forEach((business) => {
                business["marker"] = this.createMarker(business);
            });
        }
        // New filtered list, toggle old list markers off and toggle new list markers on.
        else if(this.props.filteredBusinessList !== prevProps.filteredBusinessList){
            this.toggleMarkers(prevProps.filteredBusinessList, false);
            this.toggleMarkers(this.props.filteredBusinessList, true);
        }
    }

    render(){
        return(
            <div ref={this.MapRef} id="map" className="col-8" role="application" aria-label="map">Loading map...</div>
        );
    }
}

export default Map;