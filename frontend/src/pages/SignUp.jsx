import React, { useState } from 'react';
import '../css/Login.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>D&D with Friends</h1>
        <label htmlFor="email-login">
          Email:
          <input
            type="email"
            name="email-login"
            id=""
            placeholder="Email Address"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="pass-login">
          Password:
          <input
            type="password"
            name="pass-login"
            placeholder="Password"
            id=""
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="button">Sign Up</button>

      </div>
    </div>
  );
}
