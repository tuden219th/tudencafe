"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onSend: (text: string) => void;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading = false }: Props) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea theo lượng chữ (tối thiểu 42px, tối đa 140px ~ 5 dòng)
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const nextHeight = Math.min(Math.max(el.scrollHeight, 42), 140);
    el.style.height = `${nextHeight}px`;
  }, [text]);

  function send() {
    const message = text.trim();
    if (!message || loading) return;

    onSend(message);
    setText("");

    // Reset chiều cao sau khi gửi
    if (textareaRef.current) {
      textareaRef.current.style.height = "42px";
    }
  }

  const disabled = text.trim().length === 0 || loading;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
      className="relative flex w-full items-end gap-2 rounded-[22px] border border-[#E7DDD0] bg-white px-3.5 py-2 shadow-sm transition-all focus-within:border-[#C96A2B] focus-within:ring-2 focus-within:ring-[#C96A2B]/15"
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
        placeholder="Hỏi AI Barista (menu, không gian, vị trí...)"
        className="chat-scrollbar max-h-[140px] min-h-[42px] flex-1 resize-none bg-transparent px-1 py-2 text-[16px] leading-[1.5] text-[#3B2416] placeholder-[#9E8B7D] outline-none"
      />

      <button
        type="submit"
        disabled={disabled}
        aria-label="Gửi tin nhắn"
        className={`mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 active:scale-95 ${
          disabled
            ? "cursor-not-allowed bg-[#F2EDE6] text-[#B8AA9D]"
            : "bg-[#C96A2B] text-white shadow-md shadow-[#C96A2B]/25 hover:bg-[#B3581E] hover:scale-105"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          className="h-4.5 w-4.5 translate-x-0.5"
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