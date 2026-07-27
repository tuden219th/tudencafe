"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  tableNumber: string;
};


export default function Cart({
  tableNumber,
}: Props) {
  const {
    items,
    clearCart,
  } = useCart();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (count === 0) return null;

  async function handleSendOrder() {
    setLoading(true);

    try {

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        tableNumber,
        items,
        total,
      }),
      });

      const result = await response.json();

        if (!result.success) {
          console.error("API Response:", result);
          alert(result.message || "Không thể gửi đơn");
          return;
        }

        alert(`✅ Đơn #${result.orderId} đã được gửi!`);

        clearCart();
        setOpen(false);

    } catch (error) {

      console.error(error);

      alert("❌ Gửi đơn thất bại.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div
      className="
        fixed
        bottom-4
        left-0
        right-0
        z-50
        px-4
      "
    >
      <div
        className="
          mx-auto
          max-w-md
          overflow-hidden
          rounded-3xl
          bg-[#294A3A]
          text-white
          shadow-2xl
        "
      >
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            w-full
            items-center
            justify-between
            px-5
            py-4
          "
        >
          <div>

            <p className="text-sm opacity-80">
              🛒 {count} món đã chọn
            </p>

            <h3 className="text-2xl font-bold">
              {total.toLocaleString("vi-VN")}đ
            </h3>

          </div>

          <div
            className="text-2xl transition-transform duration-300"
            style={{
              transform: open
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          >
            ▲
          </div>
        </button>

        {/* Detail */}
        {open && (
          <div className="border-t border-white/10 px-5 pb-5">

            <div className="mt-4 space-y-3">

              {items.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span>
                    {item.name}
                  </span>

                  <span>
                    x{item.quantity}
                  </span>

                </div>

              ))}

            </div>

            <button
              disabled={loading}
              onClick={handleSendOrder}
              className="
                mt-5
                w-full
                rounded-full
                bg-[#C96A2B]
                py-3
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-[#B45D23]
                disabled:opacity-60
              "
            >
              {loading
                ? "Đang gửi..."
                : "Gửi đến quầy"}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}