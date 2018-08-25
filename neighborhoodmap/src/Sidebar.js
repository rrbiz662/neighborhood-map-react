import React from 'react';
import PropTypes from "prop-types"
import BusinessList from './BusinessList';
import FilterList from './FilterList';
import LocationForm from './LocationForm';

class Sidebar extends React.Component{
    static propTypes = {
        map: PropTypes.object,
        setBusinesses: PropTypes.func
    }

    render(){
        return(
            <div id="sidebar" className="sidenav bg-dark">
                <LocationForm map={this.props.map} setBusinesses={this.props.setBusinesses}/>
                <FilterList filterList={this.props.filters}/>
                <BusinessList businessList={this.props.businesses}/>
            </div>
        );
    }

}

export default Sidebar;