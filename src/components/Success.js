// Success.js
import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div>
      <h2>Successful Login!</h2>
      <p>Welcome!</p>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default Success;
