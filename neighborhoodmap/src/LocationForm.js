import React from "react";
import ReactDOM from  "react-dom"
import PropTypes from "prop-types";

const API_KEY = "zboWotd5QomCFouN96e-YRf7deALxng825rC-GpXWbeoTGZmaOYtCyl6U9eMOEJd09KNTzo6H12cbxoQb_jetLKrD_NHDf1fqVfYmAlEgvG6TZdx2qvNPiVmLWvqWnYx";
const LIMIT = 5;
const RADIUS = 1000;

class LocationForm extends React.Component{
    static propTypes = {
        initLists: PropTypes.func,
        updateLocation: PropTypes.func
    }

    state ={
        inputValue: "",
    }

    baseState = this.state;

    getBusinesses = (address) => {
        if(address === "")
            this.props.initLists([], [], []);
        else{

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
            }).catch(() => {
                alert("Error connecting to Yelp.")
            });
        }
    }

    handleSubmit = (event) => {
        this.props.updateLocation(this.state.inputValue);
        this.getBusinesses(this.state.inputValue);
        event.preventDefault();
    }

    handleClear = () => {
        const node = ReactDOM.findDOMNode(this);
        const input = node.getElementsByTagName("input")[0];

        input.value = "";

        this.props.updateLocation(input.value);
        this.getBusinesses(input.value);
        this.setState({
            inputValue: input.value
        });
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render(){
        return(
            <form id="location-form" className="form-group" onSubmit={this.handleSubmit} role="search">
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" id="location" className="form-control" placeholder="Austin, TX" onChange={this.handleChange}>
                </input>
                <button id="submit-btn" className="btn btn-light mt-3" type="submit">Search</button>
                <button id="clear-btn" className="btn btn-light mt-3" type="button" onClick={this.handleClear}>Clear</button>
            </form>
        );
    }
}

export default LocationForm;