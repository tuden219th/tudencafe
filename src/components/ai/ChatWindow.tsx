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
      {/* Backdrop mờ nhẹ trên mobile để tạo chiều sâu */}
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

          /* Mobile: Full viewport 100dvh với safe-area hoàn hảo */
          inset-0
          h-[100dvh]
          w-full
          bg-[#FAF6F0]

          /* Desktop / Tablet: Cửa sổ nổi bo góc cao cấp */
          sm:inset-auto
          sm:bottom-6
          sm:right-6
          sm:h-[640px]
          sm:max-h-[calc(100dvh-48px)]
          sm:w-[410px]
          sm:max-w-[calc(100vw-48px)]
          sm:rounded-[28px]
          sm:border
          sm:border-[#E8DFD3]
          sm:shadow-[0_24px_60px_rgba(59,36,22,0.2)]

          overflow-hidden

          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
      >
        {/* Header với Safe-area top cho iPhone tai thỏ / Dynamic Island */}
        <div className="shrink-0 pt-safe sm:pt-0">
          <ChatHeader onClose={onClose} onReset={onReset} />
        </div>

        {/* Khung tin nhắn cuộn mượt */}
        <div className="chat-scrollbar flex-1 overflow-y-auto bg-gradient-to-b from-[#FAF6F0] to-[#F5ECE1]/60">
          <ChatMessages
            messages={messages}
            loading={loading}
            onSuggestion={onSend}
          />
        </div>

        {/* Khung soạn thảo tin nhắn duy nhất, tinh tế, có Safe-area bottom cho iPhone */}
        <div className="shrink-0 border-t border-[#EFE5DA] bg-white/95 px-3 py-2.5 pb-safe backdrop-blur-md sm:px-3.5 sm:py-3 sm:pb-3.5">
          <ChatInput onSend={onSend} loading={loading} />
        </div>
      </div>
    </>
  );
}