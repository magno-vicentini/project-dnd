import React, { useEffect } from 'react';
import Header from '../components/Header';

export default function Wellcome() {
  useEffect(() => {
    console.log(localStorage.getItem('user'));
  }, []);
  return (
    <div>
      <Header />
      <p>Games</p>
    </div>
  );
}
