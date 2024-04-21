import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Navbar.css'; // Import CSS file
import logo from './logo.png';

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <img
          src={logo} // Path to your logo image file
          height="80" // Adjust the height as needed
          className="d-inline-block align-top" // Align the logo vertically
          alt="Logo" // Alternative text for accessibility
        />
{/*         <span className="brand-text">Nails art</span>
 */}      </Navbar.Brand>      
    </Navbar>
  );
}

export default NavbarComponent;
