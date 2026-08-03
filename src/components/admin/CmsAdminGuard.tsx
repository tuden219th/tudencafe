"use client";

import { useState } from "react";


export default function CmsAdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {

  const [password, setPassword] = useState("");
  const [allow, setAllow] = useState(false);


  function login() {

    if (password === "tudencms2026") {
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
      bg-[#f7f8fa]
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
          Từ Đến CMS Admin
        </h1>


        <input
          type="password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          placeholder="Mật khẩu CMS"
          className="
            mb-4
            rounded-lg
            border
            p-3
          "
        />


        <button
          onClick={login}
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