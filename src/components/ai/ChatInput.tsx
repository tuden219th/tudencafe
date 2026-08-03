"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function send() {
    const message = text.trim();

    if (!message) return;

    onSend(message);
    setText("");
  }

  const disabled = text.trim().length === 0;

  return (
    <div className="flex items-end gap-3">
      <input
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
        placeholder="Hỏi về menu, cà phê hoặc Từ Đến..."
        className="
          flex-1
          rounded-2xl
          border
          border-orange-100
          bg-white
          px-5
          py-3.5
          text-[15px]
          text-[#3B2416]
          shadow-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-gray-400
          focus:border-[var(--primary)]
          focus:ring-4
          focus:ring-orange-100
        "
      />

      <button
        onClick={send}
        disabled={disabled}
        className={`
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          transition-all
          duration-200
          active:scale-95

          ${
            disabled
              ? `
                cursor-not-allowed
                bg-orange-200
                text-white/70
              `
              : `
                bg-[var(--primary)]
                text-white
                hover:scale-105
                hover:shadow-lg
              `
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h11"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 4l8 8-8 8"
          />
        </svg>
      </button>
    </div>
  );
}