"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text.trim());
    setText("");
  }

  return (
    <div className="flex items-center gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            send();
          }
        }}
        placeholder="Hỏi AI của Từ đến..."
        className="
          flex-1
          rounded-full
          border
          border-orange-200
          bg-[#FFF8F1]
          px-6
          py-3
          text-sm
          outline-none
          transition
          focus:border-orange-500
          focus:bg-white
          focus:ring-2
          focus:ring-orange-100
        "
      />

      <button
        onClick={send}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-orange-500
          text-lg
          font-bold
          text-white
          transition
          hover:bg-orange-600
          active:scale-95
        "
      >
        ↑
      </button>
    </div>
  );
}