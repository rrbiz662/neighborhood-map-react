import React from "react";
import PropTypes from "prop-types";
import Map from "./Map"

class MapDisplay extends React.Component {
    static propTypes = {
        location: PropTypes.string,
        businessList: PropTypes.array,
        filteredBusinessList: PropTypes.array
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="front-spacer" className="col-2"></div>
                    <Map
                        location={this.props.location}
                        businessList={this.props.businessList}
                        filteredBusinessList={this.props.filteredBusinessList}
                    />
                    <div id="back-spacer" className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MapDisplay;