// OTPVerification.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function OTPVerification() {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleVerifyOTP = () => {
    // Basic OTP validation
    if (!otp || otp.length !== 6 || !/^\d+$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    
    // Simulated API call for OTP verification, replace with actual API call
    // For simplicity, assume OTP verification is successful and move to success page directly
    history.push('/success');
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
}

export default OTPVerification;
