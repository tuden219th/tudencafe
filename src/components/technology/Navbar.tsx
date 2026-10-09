import Link from "next/link";
import { Menu, Search, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e1db] bg-[#F8F5F1]/95 backdrop-blur">
      <div className="mx-auto flex h-[64px] max-w-[1320px] items-center justify-between px-4 sm:h-[70px] sm:px-5 lg:px-10">
        {/* Logo */}
        <Link
          href="/congnghe"
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="leading-none">
            <div className="text-[25px] font-bold tracking-[-0.04em] text-[#1f1f1f] transition group-hover:text-[#C96A2B] sm:text-[28px]">
              Từ Đến
            </div>

            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#777]">
              CÔNG NGHỆ
            </div>
          </div>

          <span className="hidden h-7 w-px bg-[#d8d2ca] sm:block" />

          <span className="hidden text-sm font-medium text-[#555] sm:block">
            Technology
          </span>
        </Link>

        {/* Search */}
        <div className="mx-6 hidden h-9 max-w-[360px] flex-1 items-center border-b border-[#cfc8bf] md:flex">
          <Search
            size={17}
            strokeWidth={1.8}
            className="shrink-0 text-[#777]"
          />

          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="
              ml-3
              w-full
              bg-transparent
              py-2
              text-sm
              text-[#222]
              outline-none
              placeholder:text-[#999]
            "
          />
        </div>

        {/* Actions */}
        <div className="flex items-center">
          <button
            type="button"
            aria-label="Tìm kiếm"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              text-[#444]
              transition
              hover:text-[#C96A2B]
              md:hidden
            "
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Tài khoản"
            className="
              hidden
              h-9
              w-9
              items-center
              justify-center
              text-[#444]
              transition
              hover:text-[#C96A2B]
              sm:flex
            "
          >
            <UserRound size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Menu"
            className="
              ml-1
              flex
              h-9
              w-9
              items-center
              justify-center
              text-[#444]
              transition
              hover:text-[#C96A2B]
            "
          >
            <Menu size={21} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}