import { supabase } from "@/lib/supabase";
import OrderActions from "@/components/kitchen/OrderActions";

export default async function KitchenPage() {

  const { data: orders } = await supabase
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
    .order("created_at", {
      ascending: false,
    });


  return (
    <main className="min-h-screen bg-[#F5EBDD] p-6 text-[#3B2416]">

      <div className="mx-auto max-w-3xl">

        <h1
          className="
          font-[var(--font-playfair)]
          text-4xl
          "
        >
          ☕ Kitchen Từ Đến
        </h1>


        <p className="mt-2 text-[#7B6B60]">
          Danh sách đơn hàng đang chờ pha chế
        </p>



        <div className="mt-8 space-y-5">


          {orders?.map((order:any)=>(

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

                {order.order_items.map(
                  (item:any)=>(
                  
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



              <div className="mt-5 font-bold text-[#C96A2B]">

                {order.total.toLocaleString("vi-VN")}đ

              </div>

          <OrderActions
            id={order.id}
            status={order.status}
          />
            </div>

          ))}


        </div>


      </div>

    </main>
  );
}