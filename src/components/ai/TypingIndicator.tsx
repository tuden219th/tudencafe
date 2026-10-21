"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.2 }}
      className="my-2 flex w-full items-start gap-3"
    >
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3A2417] to-[#1E120A] text-white shadow-[0_4px_12px_rgba(42,29,21,0.16)] ring-1 ring-[#D8B996]/40">
        <Coffee className="h-3.5 w-3.5 text-[#F5DEBE] animate-pulse" />
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-[#EDE2D2] bg-white/80 px-3.5 py-2 shadow-xs backdrop-blur-xs">
        <div className="flex items-center gap-1.5 py-0.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#C96A2B]" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#C96A2B]"
            style={{ animationDelay: "160ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#C96A2B]"
            style={{ animationDelay: "320ms" }}
          />
        </div>
        <span className="ml-1 text-[12px] font-medium text-[#7C5E4B]">
          AI Barista đang soạn câu trả lời...
        </span>
      </div>
    </motion.div>
  );
}