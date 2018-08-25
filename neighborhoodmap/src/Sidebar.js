import React from 'react';
import PropTypes from "prop-types"
import BusinessList from './BusinessList';
import FilterList from './FilterList';
import LocationForm from './LocationForm';

class Sidebar extends React.Component{
    static propTypes = {
        map: PropTypes.object,
        initLists: PropTypes.func,
        updateFilteredBusinesses: PropTypes.func,
        businessList: PropTypes.array,
        filters: PropTypes.array,
        filteredBusinessList: PropTypes.array

    }

    render(){
        return(
            <div id="sidebar" className="sidenav bg-dark">
                <LocationForm map={this.props.map} initLists={this.props.initLists}/>
                <FilterList filterList={this.props.filters} businessListToFilter={this.props.businessList} updateFilteredBusinesses={this.props.updateFilteredBusinesses}/>
                <BusinessList businessList={this.props.filteredBusinessList}/>
            </div>
        );
    }

}

export default Sidebar;