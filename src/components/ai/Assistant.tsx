"use client";

import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { Message } from "./types";

export default function Assistant() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  // Mỗi khách sẽ có 1 Session ID riêng
  const sessionId = useRef(uuid());

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
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
          message: text,
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
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "Không thể kết nối tới AI.",
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