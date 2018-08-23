import React from 'react';

let sidebar;

class NavBar extends React.Component{
    toggleSidebar = () => {
        if(sidebar.classList.contains("sidenav-toggle-off"))
            sidebar.classList.toggle("sidenav-toggle-off", false);
        else
            sidebar.classList.toggle("sidenav-toggle-off", true);
    }

    componentDidMount(){
        sidebar = document.getElementById("sidebar");
    }

    render(){
        return (
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <span className="navbar-brand">Neighborhood Map</span>
                <button className="navbar-toggler" type="button" onClick={this.toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default NavBar;