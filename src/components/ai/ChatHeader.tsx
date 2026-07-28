"use client";

type Props = {
  onClose: () => void;
};

export default function ChatHeader({ onClose }: Props) {
  return (
    <div className="border-b border-orange-100 bg-white px-6 py-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow">
            TĐ
          </div>

          <div>

            <h2 className="text-lg font-bold text-[#3B2416]">
              Từ đến AI
            </h2>

            <div className="mt-1 flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-green-500"></div>

              <span className="text-xs text-gray-500">
                Barista Online
              </span>

            </div>

          </div>

        </div>

        <button
          onClick={onClose}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-gray-500
            transition
            hover:bg-orange-50
            hover:text-orange-600
          "
        >
          ✕
        </button>

      </div>

    </div>
  );
}