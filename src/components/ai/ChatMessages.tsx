"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import SuggestionCards from "./SuggestionCards";
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

  const showSuggestions = messages.length <= 1;

  return (
    <div className="flex flex-col gap-3.5 px-3 py-3 sm:px-4 sm:py-4">
      {/* Danh sách tin nhắn */}
      {messages.map((m) => (
        <ChatMessage key={m.id} message={m} />
      ))}

      {/* Gợi ý nhanh hiển thị khi vừa mở chat */}
      {showSuggestions && !loading && (
        <div className="mt-2 space-y-2 animate-in fade-in duration-300">
          <p className="px-1 text-[11px] font-semibold tracking-wider uppercase text-[#9E8B7D]">
            Gợi ý câu hỏi nhanh:
          </p>
          <SuggestionCards onSelect={onSuggestion} />
        </div>
      )}

      {/* Hiệu ứng đang soạn tin */}
      {loading && <TypingIndicator />}

      <div ref={bottomRef} className="h-1" />
    </div>
  );
}