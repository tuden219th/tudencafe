"use client";

export default function TypingIndicator() {
  return (
    <div className="flex w-full items-start gap-2.5 justify-start animate-in fade-in duration-200">
      {/* Mini Barista Avatar */}
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D47A3D] to-[#994411] text-xs text-white shadow-xs">
        ☕
      </div>

      {/* Typing Bubble */}
      <div className="flex items-center gap-2.5 rounded-[20px] rounded-tl-[4px] border border-[#EAE1D5] bg-white px-4.5 py-3 shadow-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#D47A3D]" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#D47A3D]"
            style={{ animationDelay: "180ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#D47A3D]"
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