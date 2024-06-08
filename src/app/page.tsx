"use client"
import Image from "next/image";
import  Login  from "./component/login";
import  Register  from "./component/register";
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
import supabase from "../../config";


export default function Home() {
  // console.log(supabase)
  return (
    <Register />
  //  <Login />
  );
}
