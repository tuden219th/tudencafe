"use client";

import Link from "next/link";
import { Menu, Search, CircleUserRound } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eceff3] bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between px-5">
        {/* Left */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/congnghe" className="shrink-0">
            <div className="leading-none">
              <div className="text-[24px] font-bold tracking-tight text-[#202124]">
                Từ Đến
              </div>

              <div className="mt-[2px] text-[10px] font-medium uppercase tracking-[0.24em] text-[#8d939c]">
                CÔNG NGHỆ
              </div>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden lg:flex h-[44px] w-[360px] items-center rounded-full bg-[#f4f6f9] px-4 transition-colors focus-within:bg-[#eef2f6]">
            <Search
              size={18}
              strokeWidth={2}
              className="text-[#8c939d]"
            />

            <input
              type="text"
              placeholder="Tìm bài viết, sản phẩm..."
              className="ml-3 w-full bg-transparent text-[14px] text-[#202124] outline-none placeholder:text-[#8c939d]"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-full
              bg-[#f4f6f9]
              transition
              hover:bg-[#e9edf2]
            "
          >
            <CircleUserRound
              size={22}
              strokeWidth={2}
              className="text-[#4b5563]"
            />
          </button>

          <button
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-full
              bg-[#f4f6f9]
              transition
              hover:bg-[#e9edf2]
            "
          >
            <Menu
              size={22}
              strokeWidth={2.2}
              className="text-[#4b5563]"
            />
          </button>
        </div>
      </div>
    </header>
  );
}