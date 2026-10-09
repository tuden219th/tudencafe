"use client";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { Message } from "./types";

type Props = {
  open: boolean;
  onClose: () => void;
  messages: Message[];
  loading: boolean;
  onSend: (text: string) => void;
  onReset?: () => void;
};

export default function ChatWindow({
  open,
  onClose,
  messages,
  loading,
  onSend,
  onReset,
}: Props) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop mờ nhẹ trên mobile */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs sm:hidden"
        aria-hidden="true"
      />

      <div
        className="
          fixed
          z-50
          flex
          flex-col
          overflow-hidden

          /* Mobile: chiếm trọn viewport 100dvh */
          inset-0
          h-[100dvh]
          w-full
          bg-[#FAF6F0]

          /* Desktop / Laptop: cửa sổ nổi góc phải */
          sm:inset-auto
          sm:bottom-6
          sm:right-6
          sm:h-[640px]
          sm:max-h-[calc(100dvh-48px)]
          sm:w-[420px]
          sm:rounded-[28px]
          sm:border
          sm:border-[#E8DFD3]
          sm:shadow-[0_20px_50px_rgba(59,36,22,0.18)]

          animate-in
          fade-in
          duration-200
        "
      >
        {/* Header */}
        <div className="shrink-0 bg-white" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
          <ChatHeader onClose={onClose} onReset={onReset} />
        </div>

        {/* Khung tin nhắn cuộn - cấm tràn ngang overflow-x-hidden */}
        <div className="chat-scrollbar flex-1 overflow-y-auto overflow-x-hidden bg-[#FAF6F0]">
          <ChatMessages
            messages={messages}
            loading={loading}
            onSuggestion={onSend}
          />
        </div>

        {/* Khung soạn thảo tin nhắn - có đệm đáy an toàn và nền trắng đặc */}
        <div
          className="shrink-0 border-t border-[#EFE5DA] bg-white px-3.5 pt-3 pb-3.5 sm:px-4 sm:pt-3.5 sm:pb-4"
          style={{ paddingBottom: "max(14px, env(safe-area-inset-bottom, 14px))" }}
        >
          <ChatInput onSend={onSend} loading={loading} />
        </div>
      </div>
    </>
  );
}