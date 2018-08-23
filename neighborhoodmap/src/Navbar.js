import React from 'react';
import {Navbar as Navigationbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return (
            <Navigationbar>
                <Navigationbar.Header>
                    <Navigationbar.Brand>
                        Neighborhood Map
                    </Navigationbar.Brand>
                </Navigationbar.Header>
                <Nav pullRight>
                    <NavItem>
                        Menu
                    </NavItem>
                </Nav>
            </Navigationbar>
        );
    }
}

export default NavBar;