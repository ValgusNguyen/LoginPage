import React, { useState } from "react";
import "./login.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import { z } from "zod";

const Login = () => {

  const {register, handleSubmit, formState: {errors} } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
          <div className="info">
            <input type="email" {...register("email")} placeholder="Email" required />
          </div>
          <div className="info">
            <input type="password" {...register("password")} placeholder="Password" required />
          </div>
        <div className="reme">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password? </a>
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
