"use client"
import Image from "next/image";
import  Login  from "./component/login";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


export default function Home() {
  return (
   <Login />
  );
}
