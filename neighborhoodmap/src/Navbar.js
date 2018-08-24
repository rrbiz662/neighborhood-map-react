import React from 'react';

class NavBar extends React.Component{
    toggleSidebar = () => {
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("sidenav-toggle-off");
    }

    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <span className="navbar-brand">Neighborhood Map</span>
                <button className="navbar-toggler" type="button" onClick={this.toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default NavBar;