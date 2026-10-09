"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onSend: (text: string) => void;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading = false }: Props) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea theo lượng chữ (tối thiểu 40px, tối đa 130px)
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const nextHeight = Math.min(Math.max(el.scrollHeight, 40), 130);
    el.style.height = `${nextHeight}px`;
  }, [text]);

  function send() {
    const message = text.trim();
    if (!message || loading) return;

    onSend(message);
    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
    }
  }

  const disabled = text.trim().length === 0 || loading;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
      className="relative flex w-full items-end gap-2 rounded-[24px] border border-[#E4D7C8] bg-white px-3.5 py-2 shadow-xs transition-all focus-within:border-[#C96A2B] focus-within:ring-2 focus-within:ring-[#C96A2B]/15"
    >
      <textarea
        ref={textareaRef}
        rows={1}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            send();
          }
        }}
        placeholder="Hỏi AI Barista (menu, đồ uống, wifi, không gian...)"
        className="chat-scrollbar max-h-[130px] min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-[15px] sm:text-[16px] leading-[1.5] text-[#3B2416] placeholder:text-[#A8988B] outline-none"
      />

      <button
        type="submit"
        disabled={disabled}
        aria-label="Gửi tin nhắn"
        className={`mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 active:scale-95 ${
          disabled
            ? "cursor-not-allowed bg-[#F4EFEA] text-[#BFB0A2]"
            : "bg-[#C96A2B] text-white shadow-md shadow-[#C96A2B]/25 hover:bg-[#B3581E] hover:scale-105"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          className="h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5l7 7-7 7"
          />
        </svg>
      </button>
    </form>
  );
}