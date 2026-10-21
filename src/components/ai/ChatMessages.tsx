"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import WelcomeCard from "./WelcomeCard";
import TypingIndicator from "./TypingIndicator";
import { Message } from "./types";

type Props = {
  messages: Message[];
  loading: boolean;
  onSuggestion: (text: string) => void;
};

export default function ChatMessages({
  messages,
  loading,
  onSuggestion,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div
      style={{ padding: "24px 24px 32px 24px" }}
      className="flex flex-col gap-4.5 w-full max-w-full overflow-x-hidden"
    >
      {/* Danh sách tin nhắn */}
      {messages.map((m, idx) => {
        // Tin nhắn mở đầu hiển thị dưới dạng WelcomeCard sang trọng
        if (m.id === 1 || (idx === 0 && m.role === "assistant")) {
          return <WelcomeCard key={m.id} onSelectPrompt={onSuggestion} />;
        }

        return <ChatMessage key={m.id} message={m} />;
      })}

      {/* Hiệu ứng đang soạn tin */}
      {loading && <TypingIndicator />}

      {/* Điểm neo cuộn */}
      <div ref={bottomRef} className="h-2 shrink-0" />
    </div>
  );
}