"use client";

type TextFlippingBoardProps = {
  text: string;
};

export function TextFlippingBoard({
  text,
}: TextFlippingBoardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-black/10

        bg-white/60

        px-6
        py-4

        text-sm
        font-medium
        leading-7

        tracking-wide

        text-[var(--foreground)]

        whitespace-pre-line
      "
    >
      {text}
    </div>
  );
}