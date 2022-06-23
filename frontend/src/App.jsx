import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import Wellcome from './pages/Wellcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/wellcome" element={<Wellcome />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
