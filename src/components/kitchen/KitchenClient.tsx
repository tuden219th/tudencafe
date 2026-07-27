"use client";

import { useEffect, useRef, useState } from "react";
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
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Khởi tạo âm thanh
    audioRef.current = new Audio("/sounds/new-order.mp3");

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
          console.log("NEW ORDER:", payload);

          const newOrderId = payload.new.id;

          // Chờ order_items insert xong
          setTimeout(async () => {
            const { data, error } = await supabase
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
              console.error("LOAD ORDER ERROR:", error);
              return;
            }

            if (!data) return;

            setOrders((prev) => {
              const exists = prev.some(
                (order) => order.id === data.id
              );

              if (exists) return prev;

              // 🔔 Ting
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => {});
              }

              return [
                data as Order,
                ...prev,
              ];
            });
          }, 500);
        }
      )
      .subscribe((status) => {
        console.log("REALTIME:", status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  function renderStatus(status: string) {
    switch (status) {
      case "pending":
        return (
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            🟡 Chờ pha
          </span>
        );

      case "preparing":
        return (
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            🟠 Đang pha
          </span>
        );

      case "ready":
        return (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🟢 Chờ khách nhận
          </span>
        );

      default:
        return (
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
            ✅ Hoàn thành
          </span>
        );
    }
  }

  return (
    <div className="mt-8 space-y-5">
      {orders
        .filter((order) => order.status !== "completed")
        .map((order) => (
          <div
            key={order.id}
            className="
              rounded-3xl
              bg-white
              p-6
              shadow
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Đơn #{order.id}
                </h2>

                <p>
                  Bàn {order.table_number}
                </p>
              </div>

              {renderStatus(order.status)}
            </div>

            <div className="mt-5 space-y-2">
              {order.order_items?.map((item) => (
                <div
                  key={item.product_name}
                  className="flex justify-between"
                >
                  <span>{item.product_name}</span>

                  <span>x{item.quantity}</span>
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