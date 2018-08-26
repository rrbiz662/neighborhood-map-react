import React from "react";
import PropTypes from "prop-types";

class NavBar extends React.Component{
    static propTypes = {
        sidebarRef: PropTypes.object
    }

    toggleSidebar = () => {
        let sidebar = this.props.sidebarRef.current.sidebarRef.current;
        let attr = sidebar.getAttribute("hidden");

        if(attr !== null){
            sidebar.removeAttribute("hidden");
            sidebar.setAttribute("aria-expanded", "true");
        }
        else{
            sidebar.setAttribute("hidden", "true");
            sidebar.setAttribute("aria-expanded", "false");
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark" role="banner">
                <span className="navbar-brand" tabIndex="0">Neighborhood Map</span>
                <button className="navbar-toggler" type="button" onClick={this.toggleSidebar} aria-controls="sidebar" aria-label="toggle search bar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default NavBar;