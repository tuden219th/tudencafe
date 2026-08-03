"use client";

import { Message } from "./types";

type Props = {
  message: Message;
};

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  const formatMessage = (text: string) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className={index > 0 ? "mt-2" : ""}>
        {line.split("**").map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-semibold">
              {part}
            </strong>
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
        items-end
        gap-2
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      {!isUser && (
        <div
          className="
            mb-1
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-orange-500
            to-orange-600
            text-sm
            text-white
          "
        >
          ☕
        </div>
      )}

      <div
        className={`
          max-w-[78%]
          lg:max-w-[72%]

          break-words

          px-5
          py-3.5

          text-[15px]
          leading-7

          transition-all
          duration-200

          animate-in
          fade-in
          slide-in-from-bottom-2

          ${
            isUser
              ? `
                rounded-2xl
                rounded-br-md
                bg-[var(--primary)]
                text-white
              `
              : `
                rounded-2xl
                rounded-bl-md
                border
                border-orange-100
                bg-white
                text-[#3B2416]
              `
          }
        `}
      >
        {formatMessage(message.content)}
      </div>
    </div>
  );
}