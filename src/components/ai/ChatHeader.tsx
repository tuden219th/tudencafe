"use client";

import { Coffee, RotateCcw, Minus, X, ChevronLeft, Sparkles } from "lucide-react";

type Props = {
  onClose: () => void;
  onReset?: () => void;
  onMinimize?: () => void;
};

export default function ChatHeader({ onClose, onReset, onMinimize }: Props) {
  return (
    <div
      style={{ padding: "14px 22px" }}
      className="relative flex items-center justify-between border-b border-[#EEDFCD]/90 bg-[#FFFDF9]/95 backdrop-blur-md"
    >
      {/* Ambient warm top highlight */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C96A2B]/40 to-transparent" />

      <div className="flex items-center gap-3">
        {/* Mobile close / back button */}
        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6B4D3B] transition hover:bg-[#F3E7D8] hover:text-[#2A1D15] active:scale-95 sm:hidden"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Avatar Barista */}
        <div
          style={{ borderRadius: "10px" }}
          className="relative flex h-9 w-9 items-center justify-center bg-gradient-to-br from-[#3D2518] via-[#2A1D15] to-[#1F140E] text-white shadow-[0_6px_16px_rgba(42,29,21,0.25)] ring-1 ring-[#D8B996]/50"
        >
          <Coffee className="h-4.5 w-4.5 text-[#F5DEBE]" />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-white ring-1 ring-white">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <h2 className="text-[14.5px] font-bold tracking-tight text-[#2A1D15]">
              AI Barista Từ Đến
            </h2>
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          </div>
          <p className="text-[11px] font-medium text-[#8A6C57]">
            Tư vấn đồ uống & chỗ ngồi trực tuyến
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {onReset && (
          <button
            onClick={onReset}
            title="Đoạn chat mới"
            aria-label="Làm mới cuộc trò chuyện"
            className="group flex h-8 w-8 items-center justify-center rounded-lg text-[#7A5C49] transition hover:bg-[#F3E7D8] hover:text-[#2A1D15] active:scale-95"
          >
            <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-90 text-[#7A5C49] group-hover:text-[#2A1D15]" />
          </button>
        )}

        {onMinimize && (
          <button
            onClick={onMinimize}
            title="Thu nhỏ cửa sổ"
            aria-label="Thu nhỏ cửa sổ"
            className="hidden h-8 w-8 items-center justify-center rounded-lg text-[#7A5C49] transition hover:bg-[#F3E7D8] hover:text-[#2A1D15] active:scale-95 sm:flex"
          >
            <Minus className="h-4 w-4" />
          </button>
        )}

        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          title="Đóng"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#7A5C49] transition hover:bg-[#F3E7D8] hover:text-[#2A1D15] active:scale-95"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}