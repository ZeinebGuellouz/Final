import React, { useState } from 'react';

const AccessForm = ({ onAccessGranted }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === '123') { // Replace '123' with your actual access code
      onAccessGranted();
    } else {
      alert('Access Denied');
    }
  };

  return (
    <div className="access-container">
      <form onSubmit={handleSubmit} className="access-form">
        <input
          type="password"
          className="access-input" // New class for styling
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter access code"
        />
        <button type="submit" className="access-button">Submit</button>
      </form>
    </div>
  );
};

export default AccessForm;
