"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onSend: (text: string) => void;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading = false }: Props) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Tự động giãn nở textarea theo nội dung (tối thiểu 40px, tối đa 130px ~ 4-5 dòng)
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
      className="relative flex w-full items-end gap-2 rounded-[24px] border border-[#E3D6C9] bg-[#F9F6F1] px-3.5 py-1.5 transition-all duration-200 focus-within:border-[#D47A3D] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#D47A3D]/15"
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
        className="chat-scrollbar max-h-[130px] min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-[15px] sm:text-[16px] leading-[1.5] text-[#3B2416] placeholder:text-[#A8988B] outline-none"
      />

      <button
        type="submit"
        disabled={disabled}
        aria-label="Gửi tin nhắn"
        className={`mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 active:scale-95 ${
          disabled
            ? "cursor-not-allowed bg-[#ECE5DD] text-[#B8AAA0]"
            : "bg-[#D47A3D] text-white shadow-md shadow-[#D47A3D]/25 hover:bg-[#BF6930] hover:scale-105"
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}