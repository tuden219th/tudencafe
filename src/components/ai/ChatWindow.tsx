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
};

export default function ChatWindow({
  open,
  onClose,
  messages,
  loading,
  onSend,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        bottom-3
        right-3
        z-50

        flex
        h-[76vh]
        w-[calc(100vw-24px)]
        max-w-[370px]
        flex-col

        overflow-hidden

        rounded-3xl

        border
        border-orange-100/70

        bg-white/95
        backdrop-blur-xl

        shadow-[0_12px_40px_rgba(0,0,0,0.12)]

        animate-in
        fade-in
        slide-in-from-bottom-5

        sm:bottom-6
        sm:right-6
        sm:h-[min(720px,calc(100vh-48px))]
        sm:max-w-[420px]
      "
    >
      {/* Header */}
      <div className="shrink-0">
        <ChatHeader onClose={onClose} />
      </div>

      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto

          bg-gradient-to-b
          from-white
          to-orange-50/70

          px-4
          py-4

          scrollbar-thin
        "
      >
        <ChatMessages
          messages={messages}
          loading={loading}
          onSuggestion={onSend}
        />
      </div>

      {/* Floating Input */}
      <div
        className="
          shrink-0
          bg-white/90
          backdrop-blur
          px-3
          pb-3
          pt-2
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-orange-100
            bg-white
            px-3
            py-2
            shadow-sm
          "
        >
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </div>
  );
}