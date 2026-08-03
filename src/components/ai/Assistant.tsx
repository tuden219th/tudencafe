"use client";

import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { Message } from "./types";

export default function Assistant() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  // Welcome message hiển thị ngay khi mở AI
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: `👋 Xin chào!

Mình là AI Barista của Từ Đến.

Mình có thể giúp bạn:

☕ Tư vấn đồ uống
📖 Chia sẻ kiến thức cà phê
📍 Địa chỉ & giờ mở cửa
💼 Không gian làm việc, wifi
💬 Giải đáp mọi thắc mắc về Từ Đến

Bạn muốn khám phá điều gì hôm nay?`,
    },
  ]);

  // Mỗi khách sẽ có 1 Session ID riêng
  const sessionId = useRef(uuid());

  async function sendMessage(text: string) {
    const message = text.trim();

    if (!message || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          sessionId: sessionId.current,
        }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.reply ??
          data.error ??
          "Xin lỗi, hiện tại mình chưa thể trả lời.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "⚠️ Không thể kết nối tới AI. Vui lòng thử lại sau ít phút.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ChatButton onClick={() => setOpen(true)} />

      <ChatWindow
        open={open}
        onClose={() => setOpen(false)}
        messages={messages}
        loading={loading}
        onSend={sendMessage}
      />
    </>
  );
}