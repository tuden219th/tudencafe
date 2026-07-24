"use client";

import QuantityButton from "./QuantityButton";
import { useCart } from "@/context/CartContext";


type MenuCardProps = {

  id: number;

  name: string;

  description: string;

  price: number;

};


export default function MenuCard({

  id,

  name,

  description,

  price,

}: MenuCardProps) {


  const { items } = useCart();



  const currentItem = items.find(
    (item) => item.id === id
  );



  const quantity = currentItem?.quantity ?? 0;



  return (

    <div

      className="
        rounded-[28px]
        border
        border-[#E9DDCF]
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "

    >


      <div className="flex items-start gap-4">


        <div

          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#F5EBDD]
            text-2xl
          "

        >

          ☕

        </div>



        <div className="flex-1">


          <h3 className="text-xl font-semibold">

            {name}

          </h3>



          <p className="mt-1 text-sm text-[#7B6B60]">

            {description}

          </p>



          <div className="mt-5 flex items-center justify-between">


            <p className="text-xl font-bold text-[#C96A2B]">

              {price.toLocaleString("vi-VN")}đ

            </p>



            <QuantityButton

              id={id}

              name={name}

              price={price}

              quantity={quantity}

            />


          </div>


        </div>


      </div>


    </div>

  );

}