import React from "react"
import PropTypes from "prop-types"

class Map extends React.Component{
    static propTypes = {
        location: PropTypes.string,
        businessList: PropTypes.array,
        filteredBusinessList: PropTypes.array
    }

    constructor(props){
        super(props);
        this.state = {
            map: {},
            infoWindow: {}
        }

        this.MapRef = React.createRef();
    }

    addGoogleMapScript = () => {
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpz3lEiM6sC23AMUOSJ6frxjjE95EXI50&callback=initMap";
        script.async = true;

        document.body.appendChild(script);

        window.initMap = this.initMap;
    }

    initMap = () => {
        let map = new window.google.maps.Map(this.MapRef.current, {
            zoom: 6,
            center: {
                lat: 30.143347,
                lng: -97.833595
            }
        });

        this.setState({
            map: map,
            infoWindow: new window.google.maps.InfoWindow()
        });
    }

    zoomToArea = (address) => {
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

    createMarker = (business) => {
        let position = {
            lat: business.latitude,
            lng: business.longitude
        };

        let marker = new window.google.maps.Marker({
            position: position,
            title: business.name,
            animatation: window.google.maps.Animation.DROP
        });

        marker.setMap(this.state.map);

        marker.addListener("click", () => {
            this.populateInfoWindow(marker, business);
            this.toggleBounce(marker);
        });

        return marker;
    }

    populateInfoWindow = (marker, business) => {

        let infoWindow = this.state.infoWindow;

        if(infoWindow.marker === null){
            infoWindow.marker = marker;

            infoWindow.addListener("closeclick", () => {
                infoWindow.marker = null;
            });
        }

        let content = `
                        <div><b>${business.name}</b><br>
                        ${business.phone}<br>
                        ${business.address.street}<br>
                        ${business.address.city}<br>
                        <a href="https:www.yelp.com"><img src="./yelp.png"></a></div>
                        `;

        infoWindow.setContent(content);
        infoWindow.open(this.state.map, marker);
    }

    toggleBounce = (marker) => {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => {
            marker.setAnimation(null)
        }, 750);
    }

    toggleMarkers = (businessList, toggleOn) => {
        businessList.forEach((business) => {
            if(toggleOn)
                business.marker.setMap(this.state.map);
            else
                business.marker.setMap(null);
        });
    }

    componentDidMount() {
        this.addGoogleMapScript();
    }

    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location)
            this.zoomToArea(this.props.location);

        if(this.props.businessList !== prevProps.businessList){
            this.toggleMarkers(prevProps.businessList, false);
            this.props.businessList.forEach((business) => {
                business["marker"] = this.createMarker(business);
            });
        }
        else if(this.props.filteredBusinessList !== prevProps.filteredBusinessList){
            this.toggleMarkers(prevProps.filteredBusinessList, false);
            this.toggleMarkers(this.props.filteredBusinessList, true);
        }
    }

    render(){
        return(
            <div ref={this.MapRef} id="map" className="col-8">Loading map...</div>
        );
    }
}

export default Map;