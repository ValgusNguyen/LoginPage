"use client"
import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import supabase from "../../../config";
import { createClient } from "@supabase/supabase-js";


const Register =  () => {
  const {register, handleSubmit, formState: {errors} } = useForm()
  const onSubmit = (data: any) => registerUser(data)
  type registerUser = {
    username: string;
    email: string;
    password: string;
  }
  const registerUser  = (data: registerUser) => { 
    supabase.auth.signUp({
      email: data.email ,
      password: data.password,
      options: {
        data: {
          username: data.username,
        }
      }
    });
  };
  if (errors) {
    console.log(errors.error_description || errors.message)
  } else {
    console.log('Check your email for the link!')
  }

  return (
    <div className="w-[60%] h-4/5 rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl text-white ">Create new account</h1>
        <div className="register-link">
          <p className="text-[#F6F4F4">
            Already A Member? <a href="#">Log in</a>
          </p>
        </div>
        <div className="relative w-full h-16 mt-7">
          <h2>Username</h2>
          <input
            type="text" {...register("username", { required: true })}
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3"
            required
          />
        </div>
        <div className="relative w-full h-16 mt-7">
          <h2>Email</h2>
          <input
            type="email" {...register("email", { required: true })}
            name="email" 
            // value={email}
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3" 
            placeholder="Email" 
            required
          />
        </div>
        <div className="relative w-full h-16 mt-7">
          <h2>Password</h2>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-between text-l mt-2 mb-3 "></div>
        <div className="submit">
          <button
            className="w-[60%] h-10 border-2 rounded border-red-50"
            type="submit"
            // onClick={handleSubmit((data) => setData(JSON.stringify(data))}
          >
            Create Account
          </button>
          {/* {formError && <p>{formError}</p>} */}
        </div>
      </form>
    </div>
  );
};

export default Register;
