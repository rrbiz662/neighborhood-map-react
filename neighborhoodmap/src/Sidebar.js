import React from 'react';

class Sidebar extends React.Component{

    render(){
        return(
            <div id="sidebar" className="sidenav bg-dark">
                <form id="location-form" className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" className="form-control" placeholder="Austin, Tx">
                    </input>
                    <button id="submit-btn" className="btn btn-light mt-3" type="submit"  data-bind="click: getBusinesses">Search</button>
                    <button id="clear-btn" className="btn btn-light mt-3" type="button" data-bind="click: clearBusinesses">Clear</button>
                </form>
                <div>
                    <select name="filter" id="filter" className="btn" data-bind="options: filters, value: selectedFilter"></select>
                </div>
                <div>
                    <ul id="locations-found" className="list-group mt-3" data-bind="foreach: filteredBusinesses">
                        <li className="list-group-item" data-bind="text: $data.name, click: $parent.selectBusiness"></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Sidebar;