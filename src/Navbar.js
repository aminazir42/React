import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Navbar.css'; 
import logo from './logoo.png';

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <img
          src={logo} 
          height="100" 
          className="d-inline-block align-top" 
          alt="Logo" 
        />
     </Navbar.Brand>      
    </Navbar>
  );
}

export default NavbarComponent;
