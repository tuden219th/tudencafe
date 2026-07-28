"use client";

import { Message } from "./types";

type Props = {
  message: Message;
};

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  // Render markdown đơn giản
  const formatMessage = (text: string) => {
    return text.split("\n").map((line, index) => (
      <p key={index}>
        {line.split("**").map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i}>{part}</strong>
          ) : (
            part
          )
        )}
      </p>
    ));
  };


  return (
    <div
      className={`
        flex
        w-full
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >

      <div
        className={`
          max-w-[85%]

          px-6
          py-4

          text-[15px]
          leading-7

          transition-all
          duration-200

          animate-in
          fade-in
          slide-in-from-bottom-2

          break-words

          ${
            isUser
              ? `
                rounded-2xl
                rounded-br-md

                bg-orange-500

                text-white

                shadow-md
              `
              : `
                rounded-2xl
                rounded-bl-md

                border
                border-[#EAD8C2]

                bg-white

                text-[#3B2416]

                shadow-sm
              `
          }
        `}
      >
        {formatMessage(message.content)}
      </div>

    </div>
  );
}