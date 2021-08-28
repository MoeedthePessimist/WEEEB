import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; 
import '../CSS/NavBar.css';
import logo from '../images/logo.png'

function NavBar( { handleLogout } ) {

    

    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="myNav" variant="dark">
        <Navbar.Brand className = 'navbar_title' href="/">UC diagram generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
            
            </Nav>
            <Nav>
            <Nav.Link onClick = {handleLogout}>
                Logout
            </Nav.Link>
            </Nav>

            
        </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar
