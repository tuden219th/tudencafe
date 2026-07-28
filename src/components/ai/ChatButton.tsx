"use client";

type Props = {
  onClick: () => void;
};

export default function ChatButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-orange-500 text-white text-3xl shadow-xl hover:scale-105 transition"
      aria-label="Mở trợ lý AI"
    >
      ☕
    </button>
  );
}