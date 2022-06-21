import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import dndImage from '../images/dungeons-and-dragons.png';
import { validEmail, validPassword } from '../regex';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function checkLogin() {
    // console.log(validEmail.test(email));

    if (!validEmail.test(email)) return true;
    if (!validPassword.test(password)) return true;

    return false;
  }

  return (
    <div className="login-page">
      <img src={dndImage} alt="DnD Icon" />
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
        <button type="button" disabled={checkLogin()}>Log In</button>
        <button type="button" onClick={() => navigate('/signup')}>Sign Up</button>

      </div>
    </div>
  );
}
