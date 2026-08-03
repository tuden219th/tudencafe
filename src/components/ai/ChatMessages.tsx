"use client";

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
  const isEmpty = messages.length === 0;

  return (
    <div
      className={`
        flex
        flex-col
        px-3
        py-4
        ${isEmpty ? "min-h-full justify-center" : "gap-4"}
      `}
    >
      {isEmpty && (
        <div
          className="
            flex
            flex-col
            items-center
            text-center
            animate-in
            fade-in
            slide-in-from-bottom-3
          "
        >
          {/* AI Avatar */}
          <div
            className="
              mb-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-orange-500
              to-orange-600
              text-xl
              text-white
            "
          >
            ☕
          </div>

          <h2
            className="
              text-lg
              font-semibold
              tracking-tight
              text-[#3B2416]
            "
          >
            Từ Đến AI
          </h2>

          <p
            className="
              mt-5
              w-full
              rounded-2xl
              border
              border-orange-100
              bg-white
              px-5
              py-4
              text-left
              text-[15px]
              leading-7
              text-[#3B2416]
              shadow-sm
            "
          >
            Xin chào 👋
            <br />
            <br />
            Hỏi mình về:
            <br />
            ☕ Menu & đồ uống
            <br />
            💼 Không gian làm việc
            <br />
            📍 Địa chỉ & giờ mở cửa
            <br />
            📚 Kiến thức cà phê
          </p>

          <p
            className="
              mt-5
              text-xs
              tracking-wide
              uppercase
              text-gray-400
            "
          >
            Hoặc chọn một gợi ý bên dưới
          </p>

          <div className="mt-3 w-full">
            <SuggestionCards
              onSelect={onSuggestion}
            />
          </div>
        </div>
      )}

      {messages.map((m) => (
        <ChatMessage
          key={m.id}
          message={m}
        />
      ))}

      {loading && <TypingIndicator />}
    </div>
  );
}