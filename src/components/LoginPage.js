// Login.js

import '../LoginPage.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';     
const LoginPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <Link to='/home'>
      <input type="submit" value="Submit" />
      </Link>
    </form>
  );
};
export default LoginPage