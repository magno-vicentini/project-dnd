import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { validEmail, validPassword } from '../regex';
import { createUser, validateLogin } from '../services/login';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  async function checkSignUp() {
    try {
      if (!validEmail.test(email)) throw new Error('Email is not a válid email');
      if (!validPassword.test(password)) throw new Error('Password is not a válid password');

      const validLogin = await validateLogin({ email });
      if (!validLogin.message) return validLogin;

      await createUser({
        email,
        password,
        username,
      });

      return navigate('/login');
    } catch (err) {
      return console.error(err);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>D&D with Friends</h1>
        <label htmlFor="user-name">
          username:
          <input
            type="email"
            name="user-name"
            placeholder="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
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
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="button" onClick={() => checkSignUp()}>Sign Up</button>
      </div>
    </div>
  );
}
