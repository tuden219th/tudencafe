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
        bottom-6
        right-6
        z-50

        flex
        h-[min(720px,calc(100vh-48px))]
        w-[min(440px,calc(100vw-32px))]
        flex-col

        overflow-hidden

        rounded-[28px]

        border
        border-orange-100

        bg-white

        shadow-[0_24px_80px_rgba(0,0,0,0.18)]

        animate-in
        fade-in
        slide-in-from-bottom-5
      "
    >

      {/* Header */}
      <ChatHeader
        onClose={onClose}
      />


      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto

          bg-[#FFF8F1]

          px-4
          py-5

          scrollbar-thin
        "
      >

        <ChatMessages
          messages={messages}
          loading={loading}
          onSuggestion={onSend}
        />

      </div>


      {/* Input */}
      <div
        className="
          border-t
          border-orange-100

          bg-white

          px-4
          py-3
        "
      >

        <ChatInput
          onSend={onSend}
        />

      </div>


    </div>
  );
}