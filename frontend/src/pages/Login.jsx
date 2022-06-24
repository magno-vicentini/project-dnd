import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  FormGroup, Label, Input, Form, Button,
} from 'reactstrap';
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
      <Form className="login-form">
        <h1>D&D with Friends</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="pass-login"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormGroup>
        <Button className="btn-lg btn-block" onClick={() => checkLogin()}>Log in</Button>
        <div className="text-center pt-3">Or</div>
        <NavLink to="/signup">
          Sign up
        </NavLink>
      </Form>
    </div>
  );
}
