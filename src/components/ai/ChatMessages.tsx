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
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        px-3
        py-4
      "
    >

      {messages.length === 0 && (
        <div
          className="
            flex
            flex-col
            items-center
            text-center
            pt-6
            animate-in
            fade-in
            slide-in-from-bottom-3
          "
        >

          {/* Logo / Icon */}
          <div
            className="
              mb-4
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-orange-500
              text-3xl
              shadow-lg
            "
          >
            ☕
          </div>


          <h2
            className="
              text-xl
              font-bold
              text-[#3B2416]
            "
          >
            Từ đến Coffee
          </h2>


          <p
            className="
              mt-2
              max-w-xs
              text-sm
              leading-6
              text-gray-500
            "
          >
            Hành trình từ một ly cà phê
            <br />
            đến những câu chuyện đẹp.
          </p>


          <div
            className="
              mt-5
              w-full
              rounded-3xl
              bg-orange-50
              px-5
              py-4
              text-left
            "
          >

            <p
              className="
                text-[15px]
                leading-7
                text-[#3B2416]
              "
            >
              Xin chào 👋

              <br />

              Mình có thể giúp bạn:

              <br />

              ☕ Khám phá menu
              <br />

              🌿 Gợi ý đồ uống phù hợp
              <br />

              📖 Tìm hiểu câu chuyện Từ đến
              <br />

              🛎 Hỗ trợ đặt món

            </p>

          </div>


          <SuggestionCards
            onSelect={onSuggestion}
          />

        </div>
      )}



      {messages.map((m) => (
        <ChatMessage
          key={m.id}
          message={m}
        />
      ))}



      {loading && (
        <TypingIndicator />
      )}

    </div>
  );
}