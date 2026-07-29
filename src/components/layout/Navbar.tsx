"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Câu chuyện", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Kiến thức", href: "/coffee" },
  { name: "Về chúng tôi", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-4"
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
            <h1 className="font-[var(--font-playfair)] text-2xl leading-none text-[#3B2416]">
              TỪ ĐẾN COFFEE
            </h1>

            <p className="mt-1 text-[11px] text-[#7A6857]">
              From where you are,
              <br />
              To where you want to be.
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 md:flex">
          {menu.map((item) => {
            const isActive =
              item.href.startsWith("/") && pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
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
            );
          })}

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
              hover:scale-105
              hover:bg-[#6B8E23]
            "
          >
            Ghé quán →
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="text-[#3B2416] md:hidden"
          aria-label="Open menu"
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