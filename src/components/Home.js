// Home.js
import React from 'react';

function Home() {
  // Dummy user information
  const userInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user information as needed
  };

  return (
    <div>
      <h2>Welcome, {userInfo.name}!</h2>
      <p>Email: {userInfo.email}</p>
      {/* Display more user information here */}
    </div>
  );
}

export default Home;
