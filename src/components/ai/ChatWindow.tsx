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
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs sm:hidden"
        aria-hidden="true"
      />

      <div
        className="
          fixed
          z-50
          flex
          flex-col
          overflow-hidden

          /* Mobile: toàn màn hình chuẩn 100dvh */
          inset-0
          h-[100dvh]
          w-full
          bg-[#FAFAFA]

          /* Desktop / Laptop: Cửa sổ nổi Antigravity IDE */
          sm:inset-auto
          sm:bottom-6
          sm:right-6
          sm:h-[650px]
          sm:max-h-[calc(100dvh-48px)]
          sm:w-[430px]
          sm:rounded-2xl
          sm:border
          sm:border-gray-200/90
          sm:shadow-[0_20px_60px_rgba(0,0,0,0.15)]

          animate-in
          fade-in
          duration-200
        "
      >
        {/* Header tối giản */}
        <div className="shrink-0 bg-white" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
          <ChatHeader onClose={onClose} onReset={onReset} />
        </div>

        {/* Luồng hội thoại mở, cuộn mượt */}
        <div className="chat-scrollbar flex-1 overflow-y-auto overflow-x-hidden bg-[#FAFAFA]">
          <ChatMessages
            messages={messages}
            loading={loading}
            onSuggestion={onSend}
          />
        </div>

        {/* Khung Input Card nổi phía dưới */}
        <div
          className="shrink-0 bg-[#FAFAFA] px-3.5 pt-1 pb-3 sm:px-4 sm:pb-3.5"
          style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 12px))" }}
        >
          <ChatInput onSend={onSend} loading={loading} />
        </div>
      </div>
    </>
  );
}