"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menu = [
  { name: "Câu chuyện", href: "#story" },
  { name: "Cà phê", href: "#coffee" },
  { name: "Menu", href: "#menu" },
  { name: "Nhật ký", href: "#journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#F5EBDD]/90 backdrop-blur-xl shadow-md border-b border-[#3B2416]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 group"
          aria-label="Từ Đến Coffee"
        >
          <Image
            src="/images/logo.png"
            alt="Từ Đến Coffee"
            width={82}
            height={82}
            priority
            className="rounded-full transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
          />

          <div className="hidden md:block">
            <h2 className="font-[var(--font-playfair)] text-2xl text-[#3B2416] leading-none">
              TỪ ĐẾN
            </h2>

            <p className="text-xs tracking-[0.18em] uppercase text-[#7A6857] mt-1">
              From where you are.
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-sm
                uppercase
                tracking-widest
                text-[#3B2416]
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#6B8E23]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#footer"
            className="
              ml-4
              rounded-full
              bg-[#3B2416]
              px-6
              py-3
              text-[#F5EBDD]
              transition-all
              duration-300
              hover:bg-[#6B8E23]
              hover:scale-105
            "
          >
            Ghé quán →
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-[#3B2416]"
          aria-label="Open Menu"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 8h22M4 15h22M4 22h22" />
          </svg>
        </button>
      </div>
    </header>
  );
}