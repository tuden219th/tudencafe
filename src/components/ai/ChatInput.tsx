"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

type Props = {
  onSend: (text: string) => void;
  loading?: boolean;
};

const QUICK_PROMPTS = [
  { label: "☕ Thực đơn", prompt: "Quán Từ Đến có những món cà phê và đồ uống đặc sắc nào?" },
  { label: "🥐 Bánh ngọt", prompt: "Hôm nay quán có những loại bánh nào ăn kèm cà phê?" },
  { label: "📶 Wi-Fi & Bàn", prompt: "Quán có không gian yên tĩnh để làm việc, ổ cắm và wifi mạnh không?" },
  { label: "📍 Địa chỉ", prompt: "Địa chỉ cụ thể và giờ mở cửa của Từ Đến Coffee thế nào?" },
];

export default function ChatInput({ onSend, loading = false }: Props) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const nextHeight = Math.min(Math.max(el.scrollHeight, 40), 140);
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
    <div className="w-full">
      {/* Quick Prompts Strip - Just the right breathing space */}
      <div style={{ marginBottom: "10px" }} className="relative">
        <div
          style={{ gap: "8px", paddingTop: "2px", paddingBottom: "2px" }}
          className="flex items-center overflow-x-auto scrollbar-none"
        >
          <span
            style={{ marginRight: "4px" }}
            className="flex items-center gap-1 shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#A0816C]"
          >
            <Sparkles className="h-3 w-3 text-amber-500" />
            Gợi ý:
          </span>
          {QUICK_PROMPTS.map((q) => (
            <button
              key={q.label}
              type="button"
              onClick={() => onSend(q.prompt)}
              disabled={loading}
              style={{
                padding: "5px 12px",
                borderRadius: "10px",
                lineHeight: "1.4",
              }}
              className="shrink-0 border border-[#E4D2BF] bg-[#FFFDF9] text-[12.5px] font-medium text-[#4D3325] shadow-xs transition-all hover:border-[#C96A2B] hover:bg-[#FFF4E8] hover:text-[#C96A2B] active:scale-95 disabled:opacity-50"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Input Box - Crisp, balanced padding */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        style={{
          padding: "7px 8px 7px 15px",
          borderRadius: "14px",
          gap: "10px",
        }}
        className="relative flex items-center border-2 border-[#DEC8B0] bg-white shadow-[0_4px_16px_rgba(42,29,21,0.05)] transition-all duration-200 focus-within:border-[#C96A2B] focus-within:ring-4 focus-within:ring-[#C96A2B]/12 focus-within:shadow-[0_6px_20px_rgba(201,106,43,0.12)]"
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
          placeholder="Hỏi về cà phê, menu bánh, không gian..."
          style={{
            minHeight: "36px",
            paddingTop: "6px",
            paddingBottom: "6px",
            lineHeight: "1.5",
          }}
          className="chat-scrollbar max-h-[140px] w-full resize-none bg-transparent text-[14.5px] text-[#2A1D15] placeholder:text-[#9E8270] outline-none"
        />

        <button
          type="submit"
          disabled={disabled}
          aria-label="Gửi tin nhắn"
          style={{
            borderRadius: "10px",
            width: "36px",
            height: "36px",
            flexShrink: 0,
          }}
          className={`flex items-center justify-center transition-all duration-200 active:scale-95 ${
            disabled
              ? "cursor-not-allowed border border-[#E6D4BF] bg-[#F8EFE4] text-[#A68872]"
              : "bg-gradient-to-tr from-[#B8581B] via-[#C96A2B] to-[#E5803A] text-white shadow-[0_4px_14px_rgba(201,106,43,0.38)] hover:scale-105"
          }`}
        >
          <ArrowUp className="h-4.5 w-4.5 stroke-[2.5]" />
        </button>
      </form>

      <p
        style={{
          marginTop: "9px",
          marginBottom: "2px",
          textAlign: "center",
          fontSize: "11px",
          color: "#9A7D69",
          lineHeight: "1.4",
        }}
      >
        AI Barista có thể nhầm lẫn • Vui lòng kiểm tra lại với nhân viên quán ☕
      </p>
    </div>
  );
}