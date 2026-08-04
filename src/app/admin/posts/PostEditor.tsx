"use client";

import { useState } from "react";
import PostForm from "./PostForm";

export default function PostEditor() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: any) {
    try {
      setLoading(true);

      const res = await fetch("/api/posts", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!json.success) {
        alert(json.message ?? "Có lỗi xảy ra");

        return;
      }

      alert("Đăng bài thành công");

      location.href = "/admin/posts";
    } catch (err) {
      console.error(err);

      alert("Không thể kết nối server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PostForm
      loading={loading}
      onSubmit={onSubmit}
    />
  );
}