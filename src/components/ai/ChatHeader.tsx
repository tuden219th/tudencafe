"use client";

type Props = {
  onClose: () => void;
  onReset?: () => void;
};

export default function ChatHeader({ onClose, onReset }: Props) {
  return (
    <div className="border-b border-[#EFE7DE] bg-white px-4 py-3.5 sm:px-5">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Avatar + Title */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C96A2B] to-[#994411] text-base text-white shadow-xs">
            ☕
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[15px] font-bold text-[#3B2416]">
                AI Barista Từ Đến
              </h2>
              <span className="rounded-full bg-[#FAF0E6] px-2 py-0.5 text-[10px] font-semibold text-[#C96A2B]">
                24/7
              </span>
            </div>
            <p className="text-[12px] text-[#8B7765]">
              Sẵn sàng tư vấn & giải đáp
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5">
          {onReset && (
            <button
              onClick={onReset}
              title="Làm mới cuộc trò chuyện"
              aria-label="Làm mới cuộc trò chuyện"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#8B7765] transition hover:bg-[#FAF4EE] hover:text-[#C96A2B] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4.5 w-4.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          )}

          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ chat"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#8B7765] transition hover:bg-[#FAF4EE] hover:text-[#C96A2B] active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}