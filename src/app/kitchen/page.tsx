import { supabase } from "@/lib/supabase";
import KitchenClient from "@/components/kitchen/KitchenClient";


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



        <KitchenClient
          initialOrders={orders ?? []}
        />


      </div>


    </main>

  );
}