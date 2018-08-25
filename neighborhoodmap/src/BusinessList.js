import React from "react";
import PropTypes from "prop-types";

class BusinessList extends React.Component{
    static propTypes = {
       businessList: PropTypes.array
    }

    render(){
        return(
            <div>
                <ul id="locations-found" className="list-group mt-3">
                {
                    this.props.businessList.map((business) => (

                        <li key={business.id} className="list-group-item">{business.name}</li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default BusinessList;