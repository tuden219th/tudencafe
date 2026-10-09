"use client";

type Props = {
  onClose: () => void;
  onReset?: () => void;
};

export default function ChatHeader({ onClose, onReset }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 sm:px-5">
      {/* Left: Avatar + Title + Status */}
      <div className="flex items-center gap-2.5">
        {/* Mobile Back Button */}
        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 active:scale-95 sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="h-4.5 w-4.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Minimal Barista Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2A1D15] text-white text-sm shadow-xs">
          ☕
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <h2 className="text-[14px] font-semibold text-gray-900">
              AI Barista Từ Đến
            </h2>
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          </div>
          <p className="text-[11px] text-gray-400">
            Sẵn sàng hỗ trợ trực tuyến
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1">
        {onReset && (
          <button
            onClick={onReset}
            title="Đoạn chat mới"
            aria-label="Làm mới cuộc trò chuyện"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 active:scale-95 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
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
          aria-label="Đóng cửa sổ"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 active:scale-95 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}