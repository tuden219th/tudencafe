"use client";

import { useState } from "react";


export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {

  const [password, setPassword] = useState("");
  const [allow, setAllow] = useState(false);


  function checkPassword() {

    if (
      password ===
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setAllow(true);
    } else {
      alert("Sai mật khẩu");
    }

  }


  if (allow) {
    return children;
  }


  return (

    <div className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-[#F5EBDD]
    ">

      <div className="
        rounded-2xl
        bg-white
        p-8
        shadow
      ">

        <h1 className="
          mb-5
          text-xl
          font-bold
        ">
          Từ Đến Admin
        </h1>


        <input
          type="password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          className="
            mb-4
            rounded-lg
            border
            p-3
          "
          placeholder="Mật khẩu"
        />


        <button
          onClick={checkPassword}
          className="
            rounded-full
            bg-[#294A3A]
            px-6
            py-2
            text-white
          "
        >
          Đăng nhập
        </button>


      </div>

    </div>

  );

}