"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import OrderActions from "@/components/kitchen/OrderActions";


type Order = {
  id: number;
  table_number: string;
  total: number;
  status: string;
  created_at: string;
  order_items: {
    product_name: string;
    quantity: number;
    price: number;
  }[];
};


export default function KitchenClient({
  initialOrders,
}: {
  initialOrders: Order[];
}) {


  const [orders, setOrders] = useState<Order[]>(
    initialOrders
  );



  useEffect(() => {


    const channel = supabase
      .channel("kitchen-orders")


      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "orders",
        },


        async (payload) => {


          console.log(
            "NEW ORDER EVENT:",
            payload
          );


          const newOrderId = payload.new.id;



          // tránh thêm trùng đơn
          const exists = orders.some(
            (order) => order.id === newOrderId
          );


          if (exists) return;



          // đợi order_items insert xong
          setTimeout(async () => {


            const { data, error } =
              await supabase
                .from("orders")
                .select(`
                  id,
                  table_number,
                  total,
                  status,
                  created_at,
                  order_items (
                    product_name,
                    quantity,
                    price
                  )
                `)
                .eq("id", newOrderId)
                .single();



            if (error) {

              console.error(
                "LOAD ORDER ERROR:",
                error
              );

              return;

            }



            if (data) {


              setOrders((prev) => [

                data as Order,

                ...prev,

              ]);


            }



          }, 1000);



        }

      )



      .subscribe((status) => {


        console.log(
          "REALTIME STATUS:",
          status
        );


      });



    return () => {


      supabase.removeChannel(
        channel
      );


    };


  }, [orders]);





  return (

    <div className="mt-8 space-y-5">


      {orders.map((order) => (


        <div
          key={order.id}
          className="
          rounded-3xl
          bg-white
          p-6
          shadow
          "
        >



          <div className="flex justify-between">


            <div>


              <h2 className="text-xl font-bold">

                Đơn #{order.id}

              </h2>



              <p>

                Bàn {order.table_number}

              </p>


            </div>




            <span
              className="
              rounded-full
              bg-[#F5EBDD]
              px-4
              py-2
              text-sm
              "
            >

              {order.status}

            </span>



          </div>





          <div className="mt-5 space-y-2">


            {order.order_items?.map(
              (item) => (


              <div
                key={item.product_name}
                className="
                flex
                justify-between
                "
              >


                <span>

                  {item.product_name}

                </span>



                <span>

                  x{item.quantity}

                </span>



              </div>


            ))}


          </div>





          <div
            className="
            mt-5
            font-bold
            text-[#C96A2B]
            "
          >

            {order.total.toLocaleString("vi-VN")}đ


          </div>





          <OrderActions
            id={order.id}
            status={order.status}
          />



        </div>


      ))}



    </div>

  );

}