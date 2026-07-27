"use client";

import { useState } from "react";

type Props = {
  id: number;
  status: string;
};

export default function OrderActions({
  id,
  status,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function updateStatus(newStatus: string) {
    setLoading(true);

    try {
      const response = await fetch("/api/order/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert("❌ Không thể cập nhật trạng thái.");
        return;
      }

      // Tạm thời vẫn reload.
      // Bước sau mình sẽ bỏ hẳn reload và chuyển sang realtime.
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("❌ Có lỗi khi cập nhật trạng thái.");
    } finally {
      setLoading(false);
    }
  }

  // NEW
  if (status === "new") {
    return (
      <button
        disabled={loading}
        onClick={() => updateStatus("preparing")}
        className="
          mt-5
          w-full
          rounded-full
          bg-[#294A3A]
          py-3
          font-semibold
          text-white
          transition
          hover:opacity-90
          disabled:opacity-60
        "
      >
        {loading ? "Đang cập nhật..." : "🧑‍🍳 Nhận đơn"}
      </button>
    );
  }

  // PREPARING
  if (status === "preparing") {
    return (
      <button
        disabled={loading}
        onClick={() => updateStatus("ready")}
        className="
          mt-5
          w-full
          rounded-full
          bg-[#C96A2B]
          py-3
          font-semibold
          text-white
          transition
          hover:opacity-90
          disabled:opacity-60
        "
      >
        {loading ? "Đang cập nhật..." : "☕ Pha xong"}
      </button>
    );
  }

  // READY
  if (status === "ready") {
    return (
      <button
        disabled={loading}
        onClick={() => updateStatus("completed")}
        className="
          mt-5
          w-full
          rounded-full
          bg-green-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-green-700
          disabled:opacity-60
        "
      >
        {loading ? "Đang cập nhật..." : "✅ Đã giao khách"}
      </button>
    );
  }

  // COMPLETED
  return (
    <div
      className="
        mt-5
        rounded-xl
        border
        border-green-300
        bg-green-100
        py-3
        text-center
        font-semibold
        text-green-700
      "
    >
      ✅ Hoàn thành
    </div>
  );
}