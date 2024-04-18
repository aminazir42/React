// SignIn.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignIn = () => {
    // Basic form validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Simulated API call for sign-in, replace with actual API call
    // For simplicity, assume sign-in is successful and move to OTP verification directly
    history.push('/otp');
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
