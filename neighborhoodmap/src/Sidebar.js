import React from 'react';

class Sidebar extends React.Component{
    state ={
        value: ""
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

    handleSubmit = (event) => {
        this.zoomToArea(this.state.value);
        event.preventDefault();
    }

    handleClear = (event) => {

    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return(
            <div id="sidebar" className="sidenav bg-dark">
                <form id="location-form" className="form-group" onSubmit={this.handleSubmit}>
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" className="form-control" placeholder="Austin, TX" onChange={this.handleChange}>
                    </input>
                    <button id="submit-btn" className="btn btn-light mt-3" type="submit">Search</button>
                    <button id="clear-btn" className="btn btn-light mt-3" type="button">Clear</button>
                </form>
                <div>
                    <select name="filter" id="filter" className="btn"></select>
                </div>
                <div>
                    <ul id="locations-found" className="list-group mt-3">
                        <li className="list-group-item"></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Sidebar;