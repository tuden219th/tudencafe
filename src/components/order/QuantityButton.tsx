"use client";

import { useCart } from "@/context/CartContext";


type QuantityButtonProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};


export default function QuantityButton({
  id,
  name,
  price,
  quantity,
}: QuantityButtonProps) {


  const {
    addItem,
    removeItem,
  } = useCart();



  return (

    <div
      className="
        flex
        items-center
        overflow-hidden
        rounded-full
        border
        border-[#E9DDCF]
      "
    >


      <button

        onClick={() =>
          removeItem(id)
        }

        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          text-xl
          hover:bg-[#F5EBDD]
        "

      >
        −
      </button>



      <div
        className="
          flex
          h-11
          min-w-10
          items-center
          justify-center
          font-semibold
        "
      >

        {quantity}

      </div>



      <button

        onClick={() =>
          addItem({
            id,
            name,
            price,
            quantity: 1,
          })
        }

        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          bg-[#6B8E23]
          text-xl
          text-white
          hover:bg-[#5F7F1F]
        "

      >

        +

      </button>


    </div>

  );
}