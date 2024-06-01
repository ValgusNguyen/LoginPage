import React, { useState } from "react";
import "./login.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import { z } from "zod";

const Login = () => {

  const {register, handleSubmit, formState: {errors} } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="w-[60%] h-4/5 rounded-lg p-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-5xl text-[#F6F4F4]">Log in</h1>
        <h2 className="mt-3 text-[#F6F4F4]">Welcome back</h2>
          <div className="relative w-full h-16 mt-7">
            <h2 className="text-[#F6F4F4]">Email</h2>
            <input type="email" {...register("email")} className="w-full h-[60%] placeholder-gray-400 bg-transparent border-2 rounded border-[#A4B2AB] text-l p-3 text-blue-300" placeholder="Email" required/>
          </div>
          <div className="relative w-full h-16 mt-7">
            <h2 className="text-[#F6F4F4]">Password</h2>
            <input type="password" {...register("password")} className="w-full h-[60%] placeholder-gray-400 bg-transparent border-2 rounded border-[#A4B2AB] text-l p-3" placeholder="Password" required />
          </div>
        <div className="flex justify-between text-l mt-2 mb-3 ">
          <label className="text-[#F6F4F4]"><input type="checkbox" /> Remember me</label>
          <a className="text-[#F6F4F4] hover:underline" href="#">Forgot password? </a>
        </div>
        <div className="grid place-items-center">
          <button className="w-[60%] h-10 border-2 rounded border-[#A4B2AB] text-[#F6F4F4]" type="submit">Login</button>
        </div>
        <div className="text-center m-3">
          <p className="text-[#F6F4F4]">
            Don&quot;t have an account? <a href="#" className="hover:underline">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
