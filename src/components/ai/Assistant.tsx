"use client";

import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { Message } from "./types";

const INITIAL_WELCOME_MESSAGE: Message = {
  id: 1,
  role: "assistant",
  content: `👋 **Xin chào bạn!**

Mình là **AI Barista** của quán cà phê Từ Đến. Mình có thể hỗ trợ bạn:

☕ **Tư vấn đồ uống** theo khẩu vị và sở thích
🥐 **Các loại bánh ngọt & đồ ăn nhẹ**
📶 **Không gian làm việc, ổ cắm & mật khẩu wifi**
📍 **Địa chỉ quán & khung giờ mở cửa**

Hôm nay bạn muốn khám phá điều gì cùng Từ Đến?`,
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