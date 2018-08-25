import React from "react";
import PropTypes from "prop-types";

class BusinessList extends React.Component{
    static propTypes = {
       businessList: PropTypes.array
    }

    handleClick = (event) => {
        let key = event.target.getAttribute("data-key");

        let foundBusiness = this.props.businessList.find((business) => {
            return business.id === key;
        });

        window.google.maps.event.trigger(foundBusiness.marker, "click");
    }

    render(){
        return(
            <div>
                <ul id="locations-found" className="list-group mt-3">
                {
                    this.props.businessList.map((business) => (
                        <li key={business.id} data-key={business.id} className="list-group-item" onClick={this.handleClick}>{business.name}</li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default BusinessList;