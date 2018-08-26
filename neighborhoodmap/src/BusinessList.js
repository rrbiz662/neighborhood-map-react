import React from "react";
import PropTypes from "prop-types";

class BusinessList extends React.Component{
    static propTypes = {
       businessList: PropTypes.array
    }

    /**
     * @description Triggers map marker animation.
     * @param event The triggered event.
     */
    triggerMarkerAnimation = (event) => {
        let key = event.target.getAttribute("data-key");

        let foundBusiness = this.props.businessList.find((business) => {
            return business.id === key;
        });

        window.google.maps.event.trigger(foundBusiness.marker, "click");
    }

    /**
     * @description Handles the list item click.
     * @param event The triggered event.
     */
    handleClick = (event) => {
        this.triggerMarkerAnimation(event);
    }

    /**
     * @description Handles the "enter" key press on a list item.
     * @param event The triggered event.
     */
    handleKeyUp = (event) => {
        // Check if the "enter" key was pressed.
        if(event.keyCode === 13){
            this.triggerMarkerAnimation(event);
        }
    }

    render(){
        return(
            <div>
                <ul id="locations-found" className="list-group mt-3" aria-label="business list" tabIndex="0">
                {
                    this.props.businessList.map((business) => (
                        <li key={business.id} data-key={business.id} className="list-group-item" onClick={this.handleClick} onKeyUp={this.handleKeyUp} tabIndex="0">{business.name}</li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default BusinessList;