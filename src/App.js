import React from 'react';
import './App.css'; // Import CSS file
import NavbarComponent from './Navbar';
import CardLayout from './CardLayout'; // Import CardLayout component

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CardLayout /> {/* Include the CardLayout component */}
    </div>
  );
}

export default App;
