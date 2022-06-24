import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import {
  FormGroup, Label, Input, Form, Button,
} from 'reactstrap';
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
      <Form className="login-form">
        <h1>D&D with Friends</h1>
        <FormGroup>
          <Label>username</Label>
          <Input
            type="email"
            placeholder="Email"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </FormGroup>
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
        <Button
          className="btn-lg btn-block"
          onClick={() => checkSignUp()}
          color="success"
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
}
