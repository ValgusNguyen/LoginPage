import React, { useState } from "react";
import "./login.css";
import { FaUserCircle, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrap">
      <form action="">
        <h1>Sign Up</h1>
          <div className="info">
            <FaUserCircle className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="info">
            <FaLock className="icon" />
            <input type="password" placeholder="password" required />
          </div>
        <div className="submit">
          <button type="submit">Login</button>
        </div>
        <div className="register-link">
          <p>
            Don&quot;t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
