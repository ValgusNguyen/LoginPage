"use client"
import Image from "next/image";
import  Login  from "./component/login";
import  Register  from "./component/register";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createClient } from '@/utils/supabase/server';

// export default async function Notes() {
//   const supabase = createClient();
//   const { data: notes } = await supabase.from("notes").select();
//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }
export default function Home() {
  return (
    <Register />
  //  <Login />
  );
}
