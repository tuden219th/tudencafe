"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function ChatButton({ onClick }: Props) {
  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 20 }}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      onClick={onClick}
      className="
        fixed
        bottom-[max(20px,env(safe-area-inset-bottom,20px))]
        right-4
        z-40
        group
        flex
        items-center
        gap-2.5
        rounded-full
        border border-[#D7B690]/70
        bg-gradient-to-r from-[#241710] via-[#321F14] to-[#452818]
        px-4.5
        py-3
        text-white
        shadow-[0_16px_36px_rgba(36,23,16,0.32),0_4px_16px_rgba(201,106,43,0.2)]
        backdrop-blur-md
        transition-shadow
        duration-300
        hover:shadow-[0_20px_42px_rgba(36,23,16,0.4),0_6px_22px_rgba(201,106,43,0.3)]
        sm:right-6
      "
      aria-label="Mở trợ lý AI Barista Từ Đến"
    >
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#523320]/80 text-[#FCEBD8] shadow-inner">
        <Coffee className="h-4 w-4 text-[#F7D8B5] transition-transform duration-300 group-hover:rotate-[-6deg]" />
        <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-amber-300 animate-pulse" />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[13.5px] font-semibold tracking-wide text-[#FFFDF9] drop-shadow-xs">
          Hỏi AI Barista
        </span>
        <span className="text-[10px] font-medium text-[#D3B497] -mt-0.5">
          Tư vấn thực đơn & chỗ ngồi
        </span>
      </div>

      <span className="relative flex h-2.5 w-2.5 items-center justify-center ml-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
    </motion.button>
  );
}