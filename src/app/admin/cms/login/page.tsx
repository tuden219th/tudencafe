"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase/client";


export default function CmsLoginPage() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");


  async function login(){

    setError("");

    const {
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });


    if(error){

      setError("Sai email hoặc mật khẩu");
      return;

    }


    router.push("/admin/cms");

  }



  return (

    <main className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-[#f7f8fa]
    ">

      <div className="
        w-full
        max-w-md
        rounded-2xl
        bg-white
        p-8
        shadow
      ">


        <h1 className="
          mb-6
          text-2xl
          font-bold
        ">
          Từ Đến CMS Login
        </h1>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="
            mb-4
            w-full
            rounded-lg
            border
            p-3
          "
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="
            mb-4
            w-full
            rounded-lg
            border
            p-3
          "
        />


        {
          error && (
            <p className="mb-4 text-red-500">
              {error}
            </p>
          )
        }


        <button
          onClick={login}
          className="
            w-full
            rounded-full
            bg-[#294A3A]
            py-3
            text-white
          "
        >
          Đăng nhập
        </button>


      </div>

    </main>

  );

}