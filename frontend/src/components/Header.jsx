import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>
        <NavLink to="/wellcome">
          Home
        </NavLink>
      </h1>
      <h1>
        <NavLink to="/settings">
          Settings
        </NavLink>
      </h1>
    </header>
  );
}
