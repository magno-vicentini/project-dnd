import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import dndImage from '../images/dungeons-and-dragons.png';
import { validEmail, validPassword } from '../regex';
import { validateLogin } from '../services/login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function checkLogin() {
    try {
      if (!validEmail.test(email)) throw new Error('Email is not a válid email');
      if (!validPassword.test(password)) throw new Error('Password is not a válid password');

      const validLogin = await validateLogin({ email });
      if (validLogin.message) return validLogin;

      return navigate('/wellcome');
    } catch (err) {
      return console.error(err);
    }
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
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="button" onClick={() => checkLogin()}>Log In</button>
        <button type="button" onClick={() => navigate('/signup')}>Sign Up</button>

      </div>
    </div>
  );
}
