"use client";

type Props = {
  onClose: () => void;
};

export default function ChatHeader({ onClose }: Props) {
  return (
    <div
      className="
        border-b
        border-orange-100/70
        bg-white/95
        px-5
        py-4
        backdrop-blur-md
      "
    >
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-orange-500
              to-orange-600
              text-base
              font-semibold
              text-white
            "
          >
            ☕
          </div>

          {/* Title */}
          <div>
            <h2
              className="
                text-[16px]
                font-semibold
                tracking-tight
                text-[#3B2416]
              "
            >
              Từ Đến AI
            </h2>

            <div className="mt-1 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-green-500
                  "
                />
              </span>

              <span
                className="
                  text-xs
                  font-medium
                  text-gray-500
                "
              >
                Đang sẵn sàng hỗ trợ
              </span>
            </div>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ chat"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-gray-400
            transition-all
            duration-200
            hover:bg-orange-50
            hover:text-orange-600
            active:scale-95
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6L18 18M18 6L6 18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}