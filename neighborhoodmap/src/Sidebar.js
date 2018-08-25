import React from 'react';
import PropTypes from "prop-types"
import BusinessList from './BusinessList';
import FilterList from './FilterList';
import LocationForm from './LocationForm';

class Sidebar extends React.Component{
    static propTypes = {
        initLists: PropTypes.func,
        updateFilteredBusinesses: PropTypes.func,
        updateLocation: PropTypes.func,
        businessList: PropTypes.array,
        filters: PropTypes.array,
        filteredBusinessList: PropTypes.array
    }

    constructor(props){
        super(props);
        this.sidebarRef = React.createRef();
    }

    handleMediaQuery = (mediaQuery) => {
        const sidebar = this.sidebarRef.current;

        if(mediaQuery.matches)
            sidebar.classList.add("sidenav-toggle-off");
        else
            sidebar.classList.remove("sidenav-toggle-off");
    }

    componentDidMount(){
        const query = window.matchMedia("(max-width: 768px)");
        this.handleMediaQuery(query);
        query.addListener(this.handleMediaQuery);
    }

    render(){
        return(
            <div id="sidebar" className="sidenav bg-dark" ref={this.sidebarRef}>
                <LocationForm
                    initLists={this.props.initLists}
                    updateLocation={this.props.updateLocation}
                />
                <FilterList
                    filterList={this.props.filters}
                    businessListToFilter={this.props.businessList}
                    updateFilteredBusinesses={this.props.updateFilteredBusinesses}
                />
                <BusinessList businessList={this.props.filteredBusinessList}/>
            </div>
        );
    }

}

export default Sidebar;