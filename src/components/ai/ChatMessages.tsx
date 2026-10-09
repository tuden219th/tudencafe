"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
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
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-full overflow-x-hidden p-4 pb-6 sm:p-5 sm:pb-8">
      {/* Danh sách tin nhắn dạng luồng mở */}
      {messages.map((m) => (
        <ChatMessage key={m.id} message={m} />
      ))}

      {/* Hiệu ứng đang soạn tin */}
      {loading && <TypingIndicator />}

      {/* Điểm neo cuộn */}
      <div ref={bottomRef} className="h-2 shrink-0" />
    </div>
  );
}