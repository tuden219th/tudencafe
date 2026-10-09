"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onSend: (text: string) => void;
  loading?: boolean;
};

const QUICK_PROMPTS = [
  { label: "☕ Menu", prompt: "Quán Từ Đến có những món cà phê và đồ uống đặc sắc nào?" },
  { label: "🥐 Bánh ngọt", prompt: "Hôm nay quán có những loại bánh nào ăn kèm cà phê?" },
  { label: "📶 Wifi & Ổ cắm", prompt: "Quán có không gian yên tĩnh để làm việc, ổ cắm và wifi mạnh không?" },
  { label: "📍 Địa chỉ & Giờ mở", prompt: "Địa chỉ cụ thể và giờ mở cửa của Từ Đến Coffee thế nào?" },
];

export default function ChatInput({ onSend, loading = false }: Props) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea theo lượng chữ (tối thiểu 36px, tối đa 140px)
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const nextHeight = Math.min(Math.max(el.scrollHeight, 36), 140);
    el.style.height = `${nextHeight}px`;
  }, [text]);

  function send() {
    const message = text.trim();
    if (!message || loading) return;

    onSend(message);
    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "36px";
    }
  }

  const disabled = text.trim().length === 0 || loading;

  return (
    <div className="w-full">
      {/* Khung Input chuẩn Card 2 tầng Antigravity IDE */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-xs transition-all duration-200 focus-within:border-gray-400 focus-within:shadow-md"
      >
        {/* Tầng 1: Vùng gõ chữ thênh thang, không bị chèn ép */}
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
          placeholder="Nhập câu hỏi cho AI Barista..."
          className="chat-scrollbar max-h-[140px] min-h-[36px] w-full resize-none bg-transparent px-1 py-1 text-[15px] leading-relaxed text-gray-900 placeholder:text-gray-400 outline-none"
        />

        {/* Tầng 2: Hàng công cụ tích hợp (Quick Chips + Nút gửi ↑) */}
        <div className="mt-2 flex items-center justify-between gap-2 pt-1 border-t border-gray-50">
          {/* Quick chips cuộn ngang nhẹ */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q.label}
                type="button"
                onClick={() => onSend(q.prompt)}
                className="shrink-0 rounded-full bg-gray-50 px-2.5 py-1 text-[12px] font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 active:scale-95"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Nút gửi mũi tên lên ↑ chuẩn Antigravity / Claude */}
          <button
            type="submit"
            disabled={disabled}
            aria-label="Gửi tin nhắn"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-200 active:scale-95 ${
              disabled
                ? "cursor-not-allowed bg-gray-100 text-gray-300"
                : "bg-gray-900 text-white hover:bg-black shadow-xs"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </form>

      {/* Dòng ghi chú nhỏ tối giản */}
      <p className="mt-1.5 text-center text-[11px] text-gray-400">
        AI Barista có thể có sai sót. Vui lòng kiểm tra lại với nhân viên quán.
      </p>
    </div>
  );
}