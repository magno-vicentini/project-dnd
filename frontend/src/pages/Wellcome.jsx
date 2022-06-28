import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Wellcome() {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(localStorage.getItem('user'));
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <div>
      <Header />
      <p>Games</p>
      { console.log(user)}
    </div>
  );
}
