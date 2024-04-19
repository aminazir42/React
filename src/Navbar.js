import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import CSS file
import logo from './logo.png';

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo} // Path to your logo image file
          height="30" // Adjust the height as needed
          className="d-inline-block align-top" // Align the logo vertically
          alt="Logo" // Alternative text for accessibility
        />
        React Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
