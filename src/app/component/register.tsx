import React, { useState } from "react";
import "./login.css";
import {useForm} from 'react-hook-form'
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'

const Register = async () => {
  const supabase = createClient();
  const signUp = async () => {               
    await supabase.auth.signUp({
      email,
      password,
      options: {},
    });
  };
  const { error } = await supabase.auth.signUp(data);
  if (error) {
    redirect(`${location.origin}/blank`);
  }
  return (
    <div className="w-[60%] h-4/5 rounded-lg p-6">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <h1 className="text-4xl ">Create new account</h1>
        <div className="register-link">
          <p>
            Already A Member? <a href="#">Log in</a>
          </p>
        </div>
        {/* <div className="flex relative w-full h-16 mt-7">
          <h2 className="text-white">First Name</h2>
          <input
            type="text"
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3"
            required
          />
          <h2 className="text-white">Last Name</h2>
          <input
            type="text"
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3"
            required
          /> */}
        {/* </div> */}
        <div className="relative w-full h-16 mt-7">
          <h2>Username</h2>
          <input
            type="text"
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3"
            required
          />
        </div>
        <div className="relative w-full h-16 mt-7">
          <h2>Email</h2>
          <input
            type="email"
            // {...register("email")}
            className="w-full h-[60%] bg-transparent border-2 rounded border-red-50 text-xl p-3"
            placeholder="Email"
            required
          />
        </div>
        <div className="relative w-full h-16 mt-7">
          <h2>Password</h2>
          <input
            type="password"
            // {...register("password")}
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
            onClick={signUp}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
