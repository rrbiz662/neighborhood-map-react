import React from "react";
import PropTypes from "prop-types";

const API_KEY = "zboWotd5QomCFouN96e-YRf7deALxng825rC-GpXWbeoTGZmaOYtCyl6U9eMOEJd09KNTzo6H12cbxoQb_jetLKrD_NHDf1fqVfYmAlEgvG6TZdx2qvNPiVmLWvqWnYx";
const LIMIT = 5;
const RADIUS = 1000;

class LocationForm extends React.Component{
    static propTypes = {
        map: PropTypes.object,
        initLists: PropTypes.func
    }

    state ={
        inputValue: "",
    }

    zoomToArea = (address) => {
        if(!this.props.map)
            return;

        let geoCoder = new window.google.maps.Geocoder();

        geoCoder.geocode({
            address: address
        }, (results, status) => {
            if(status === window.google.maps.GeocoderStatus.OK){
                this.props.map.setCenter(results[0].geometry.location);
                this.props.map.setZoom(10);
            }
        });
    }

    getBusinesses = (address) => {
        const config = {
            headers: {
                "Authorization": "Bearer " + API_KEY
            }
        };

        let params = {
                term: "",
                location: address,
                limit: LIMIT,
                radius: RADIUS
            };

        // Add search params to URL.
        let url = new URL("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search");
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        fetch(url, config
        ).then((res) => {
            return res.json();
        }).then((json) => {
            let businesses = [];
            let filters = [];

            for (const business of json.businesses) {
                businesses.push({
                    id: business.id,
                    name: business.name,
                    img: business.image_url,
                    phone: business.display_phone,
                    address: {
                        street: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code
                    },
                    latitude: business.coordinates.latitude,
                    longitude: business.coordinates.longitude,
                    categories: business.categories,
                });

                business.categories.forEach((category) => {
                    if(filters.indexOf(category.title) === -1)
                        filters.push(category.title);
                });
            }

            let filteredBusinesses = businesses.slice(0);

            this.props.initLists(businesses, filters, filteredBusinesses);
        }).catch((e) => {
            console.log("Error" + e);
        });
    }

    handleSubmit = (event) => {
        this.zoomToArea(this.state.inputValue);
        this.getBusinesses(this.state.inputValue);
        event.preventDefault();
    }

    handleClear = (event) => {

    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render(){
        return(
            <form id="location-form" className="form-group" onSubmit={this.handleSubmit}>
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" id="location" className="form-control" placeholder="Austin, TX" onChange={this.handleChange}>
                </input>
                <button id="submit-btn" className="btn btn-light mt-3" type="submit">Search</button>
                <button id="clear-btn" className="btn btn-light mt-3" type="button">Clear</button>
            </form>
        );
    }
}

export default LocationForm;