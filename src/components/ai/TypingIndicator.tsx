"use client";

export default function TypingIndicator() {
  return (
    <div className="flex w-full items-end gap-2.5 justify-start animate-in fade-in duration-200">
      {/* Mini Barista Avatar */}
      <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C96A2B] to-[#994411] text-xs text-white shadow-xs">
        ☕
      </div>

      {/* Typing Bubble */}
      <div className="flex items-center gap-2 rounded-[20px] rounded-bl-xs border border-[#EADCCC] bg-white px-4 py-3 shadow-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#C96A2B]" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#C96A2B]"
            style={{ animationDelay: "180ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#C96A2B]"
            style={{ animationDelay: "360ms" }}
          />
        </div>
        <span className="text-[13px] font-medium text-[#8B7765]">
          AI Barista đang trả lời...
        </span>
      </div>
    </div>
  );
}