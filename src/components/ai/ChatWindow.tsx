"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Maximize2, X, Sparkles } from "lucide-react";

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
  isMinimized?: boolean;
  onToggleMinimize?: (minimized: boolean) => void;
};

export default function ChatWindow({
  open,
  onClose,
  messages,
  loading,
  onSend,
  onReset,
  isMinimized = false,
  onToggleMinimize,
}: Props) {
  useEffect(() => {
    if (!open || isMinimized) return;

    // Chỉ khóa scroll trang khi ở trên màn hình nhỏ (mobile)
    if (window.innerWidth < 640) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [open, isMinimized]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop mờ nhẹ trên mobile */}
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-[#1D130C]/30 backdrop-blur-[3px] sm:hidden"
              aria-hidden="true"
            />
          )}

          {/* Cửa sổ chat hoặc Thanh thu nhỏ */}
          {isMinimized ? (
            /* DOCK THU NHỎ (Desktop) */
            <motion.div
              key="minimized-dock"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="
                fixed
                z-50
                bottom-6
                right-6
                flex
                items-center
                gap-3
                rounded-xl
                border border-[#E4D1BA]
                bg-[#FFFDF9]/95
                px-4
                py-2.5
                shadow-[0_16px_36px_rgba(35,21,13,0.18)]
                backdrop-blur-xl
              "
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#3D2518] to-[#1F140E] text-white">
                <Coffee className="h-4 w-4 text-[#F5DEBE]" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>

              <div
                onClick={() => onToggleMinimize?.(false)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <p className="text-[13.5px] font-semibold text-[#2A1D15]">
                    AI Barista Từ Đến
                  </p>
                  <Sparkles className="h-3 w-3 text-amber-500" />
                </div>
                <p className="text-[10.5px] text-[#8A6C57]">
                  Nhấn để mở rộng cuộc trò chuyện
                </p>
              </div>

              <div className="flex items-center gap-1 ml-2 border-l border-[#EFE2D2] pl-2">
                <button
                  onClick={() => onToggleMinimize?.(false)}
                  title="Phóng to"
                  aria-label="Phóng to cửa sổ"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-[#7A5C49] hover:bg-[#F3E7D8] hover:text-[#2A1D15] transition"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={onClose}
                  title="Đóng"
                  aria-label="Đóng cửa sổ"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-[#7A5C49] hover:bg-[#F3E7D8] hover:text-[#2A1D15] transition"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* CỬA SỔ CHAT TOÀN PHẦN */
            <motion.div
              key="full-chat-window"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
              style={{ transformOrigin: "bottom right" }}
              className="
                fixed
                z-50
                flex
                flex-col
                overflow-hidden
                inset-0
                h-[100dvh]
                w-full
                bg-[#FFFDF9]

                sm:inset-auto
                sm:bottom-6
                sm:right-6
                sm:h-[700px]
                sm:max-h-[calc(100dvh-36px)]
                sm:w-[480px]
                sm:rounded-[18px]
                sm:border
                sm:border-[#E2CEB7]
                sm:bg-[#FFFDF9]
                sm:shadow-[0_24px_70px_rgba(35,21,13,0.24),0_6px_20px_rgba(35,21,13,0.08)]
              "
            >
              {/* Header */}
              <div
                className="shrink-0 bg-[#FFFDF9]"
                style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
              >
                <ChatHeader
                  onClose={onClose}
                  onReset={onReset}
                  onMinimize={
                    onToggleMinimize ? () => onToggleMinimize(true) : undefined
                  }
                />
              </div>

              {/* Message Feed */}
              <div className="chat-scrollbar flex-1 overflow-y-auto overflow-x-hidden bg-[linear-gradient(180deg,#FFFDF9_0%,#FBF4EA_100%)]">
                <ChatMessages
                  messages={messages}
                  loading={loading}
                  onSuggestion={onSend}
                />
              </div>

              {/* Footer Input Bar */}
              <div
                className="shrink-0 border-t border-[#EDE1D1] bg-[#FFFDF9]"
                style={{
                  paddingTop: "12px",
                  paddingBottom: "max(14px, env(safe-area-inset-bottom, 14px))",
                  paddingLeft: "18px",
                  paddingRight: "18px",
                }}
              >
                <ChatInput onSend={onSend} loading={loading} />
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}