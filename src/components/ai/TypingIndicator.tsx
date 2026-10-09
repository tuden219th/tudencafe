"use client";

export default function TypingIndicator() {
  return (
    <div className="flex w-full items-start gap-3 my-2 animate-in fade-in duration-200">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2A1D15] text-xs text-white shadow-xs">
        ☕
      </div>

      <div className="flex items-center gap-1.5 py-1.5 text-gray-400">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
        <span
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "180ms" }}
        />
        <span
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "360ms" }}
        />
        <span className="ml-1.5 text-[12px] font-medium text-gray-400">
          Đang suy nghĩ...
        </span>
      </div>
    </div>
  );
}