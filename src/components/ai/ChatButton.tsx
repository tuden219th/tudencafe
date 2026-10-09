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
        bg-[#18181B]
        px-4
        py-2.5
        text-white
        shadow-[0_10px_25px_rgba(0,0,0,0.25)]
        transition-all
        duration-200
        hover:bg-black
        hover:scale-105
        active:scale-95
        sm:right-6
      "
      aria-label="Mở trợ lý AI Barista"
    >
      <span className="flex h-5 w-5 items-center justify-center text-sm">
        ☕
      </span>

      <span className="text-[13.5px] font-medium tracking-wide">
        Hỏi AI Barista
      </span>

      <span className="flex h-2 w-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </span>
    </button>
  );
}