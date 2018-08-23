import React from 'react';
import {Navbar as Navigationbar, Nav, NavItem} from 'react-bootstrap';

//let sidebar = document.getElementById("sidebar");

class NavBar extends React.Component{
    toggleSidebar = () => {
        console.log("Menu clicked");
        // width = sidebar.css("width");

        // if(width === "0px")
        //     sidebar.css("width", "250px");
        // else
        //     sidebar.css("width", "0");
    }

    render(){
        return (
            <Navigationbar>
                <Navigationbar.Header>
                    <Navigationbar.Brand>
                        Neighborhood Map
                    </Navigationbar.Brand>
                </Navigationbar.Header>
                <Nav pullRight>
                    <NavItem onClick={this.toggleSidebar}>
                        Menu
                    </NavItem>
                </Nav>
            </Navigationbar>
        );
    }
}

export default NavBar;