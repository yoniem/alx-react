// src/Login/Login.js
import React from 'react';
import './Login.css';

const Login = () => (
  <React.Fragment>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button>OK</button>
    </div>
  </React.Fragment>
);

export default Login;
