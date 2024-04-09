import React from 'react';
import { Link } from 'react-router-dom';
import '../../LoginPage.css';

const LoginPage = () => {
  const handleSubmit = () => { 
    alert("now editing "); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">
          Username:
          <input type="text" value={`username`} className="login-input" />
        </label>
        <label className="login-label">
          Password:
          <input type="password" value={`password`} className="login-input" />
        </label>
        <Link to='/home' className="login-link">
          <input type="submit" value="Submit" className="login-submit-btn" />
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
