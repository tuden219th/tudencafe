"use client";

import { useState } from "react";


type Props = {
  id:number;
  status:string;
};


export default function OrderActions({
  id,
  status,
}:Props){

  const [loading,setLoading]=useState(false);



  async function updateStatus(
    newStatus:string
  ){

    setLoading(true);


    await fetch(
      "/api/order/status",
      {
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          id,
          status:newStatus,
        }),
      }
    );


    window.location.reload();

  }



  if(status==="pending"){

    return (
      <button
        onClick={()=>updateStatus("preparing")}
        className="
        mt-5
        w-full
        rounded-full
        bg-[#294A3A]
        py-3
        text-white
        "
      >
        Nhận đơn
      </button>
    )

  }



  if(status==="preparing"){

    return (
      <button
        onClick={()=>updateStatus("completed")}
        className="
        mt-5
        w-full
        rounded-full
        bg-[#C96A2B]
        py-3
        text-white
        "
      >
        Hoàn thành
      </button>
    )

  }


  return (
    <div
      className="
      mt-5
      text-center
      text-sm
      text-green-700
      "
    >
      Đã hoàn thành ✓
    </div>
  )

}