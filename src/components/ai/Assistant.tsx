"use client";

import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { Message } from "./types";

const INITIAL_WELCOME_MESSAGE: Message = {
  id: 1,
  role: "assistant",
  content: `Chào bạn! Mình là **AI Barista** của quán cà phê Từ Đến.

Mình có thể hỗ trợ bạn tìm hiểu nhanh:
- ☕ **Tư vấn đồ uống**: Espresso, Americano, Latte Art, Trà, Bánh...
- 🥐 **Menu bánh & ăn nhẹ**: Bánh ngọt, bánh mì, donut hôm nay
- 📶 **Không gian quán**: Chỗ ngồi yên tĩnh làm việc, ổ cắm & wifi
- 📍 **Địa chỉ & giờ mở**: 219 Tô Hiệu, mở cửa 7:00 - 22:00

Bạn muốn khám phá điều gì cùng Từ Đến hôm nay?`,
};

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Welcome message hiển thị ngay khi mở AI
  const [messages, setMessages] = useState<Message[]>([INITIAL_WELCOME_MESSAGE]);

  // Mỗi khách sẽ có 1 Session ID riêng
  const sessionId = useRef(uuid());

  function resetConversation() {
    sessionId.current = uuid();
    setMessages([INITIAL_WELCOME_MESSAGE]);
  }

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

      let reply = data.reply;
      if (!reply || typeof reply !== "string" || reply.includes("empty response")) {
        reply = "Dạ, hiện tại đường truyền tới AI đang bị chậm một chút. Bạn có thể hỏi lại giúp mình câu hỏi vừa rồi được không ạ? ☕";
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Dạ, hiện tại kết nối mạng đang bị gián đoạn. Bạn thử lại giúp mình sau ít phút nhé! ☕",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && <ChatButton onClick={() => setOpen(true)} />}

      <ChatWindow
        open={open}
        onClose={() => setOpen(false)}
        onReset={resetConversation}
        messages={messages}
        loading={loading}
        onSend={sendMessage}
      />
    </>
  );
}