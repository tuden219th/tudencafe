"use client";

type Props = {
  onClick: () => void;
};

export default function ChatButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-[max(20px,env(safe-area-inset-bottom,20px))]
        right-4
        z-40
        flex
        items-center
        gap-2.5
        rounded-full
        bg-gradient-to-r
        from-[#D47A3D]
        to-[#B6561B]
        px-4.5
        py-3
        text-white
        shadow-[0_12px_28px_rgba(212,122,61,0.35)]
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_16px_34px_rgba(201,106,43,0.48)]
        active:scale-95
        sm:right-6
      "
      aria-label="Mở trợ lý AI Barista"
    >
      {/* Icon cốc cafe với hiệu ứng pulse */}
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-base">
        ☕
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-200 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
      </span>

      {/* Label rõ ràng, thân thiện */}
      <span className="text-[14px] font-semibold tracking-wide">
        Hỏi AI Barista
      </span>
    </button>
  );
}