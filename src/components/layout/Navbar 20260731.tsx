"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Hành trình", href: "#journey" },
  { name: "Menu", href: "#menu" },
  { name: "Blog", href: "/coffee" },
  { name: "Về chúng tôi", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-[#F8F5F1]/90 backdrop-blur-xl shadow-lg border-b border-[#3B2416]/10"
            : "bg-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto
          max-w-7xl
          px-6
          flex
          items-center
          justify-between
          transition-all
          duration-500
          ${scrolled ? "h-[76px]" : "h-24"}
        `}
      >
        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-4"
          aria-label="Từ Đến"
        >
          <Image
            src="/images/logo.png"
            alt="Từ Đến"
            width={scrolled ? 58 : 68}
            height={scrolled ? 58 : 68}
            priority
            className="
              rounded-full
              transition-all
              duration-500
              group-hover:scale-105
            "
          />

          <div className="hidden md:block">
            <h1
              className="
                font-[var(--font-playfair)]
                text-[28px]
                leading-none
                text-[#2E2018]
              "
            >
              TỪ ĐẾN
            </h1>

            <p
              className={`
                mt-1
                text-[11px]
                tracking-[0.22em]
                uppercase
                text-[#8B7765]
                transition-all
                duration-300
                ${scrolled ? "opacity-0 h-0 overflow-hidden" : ""}
              `}
            >
              Coffee • AI • Journey
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-10">
          {menu.map((item) => {
            const active =
              item.href.startsWith("/") && pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="
                  group
                  relative
                  text-[13px]
                  uppercase
                  tracking-[0.22em]
                  text-[#3B2416]
                  transition-colors
                  duration-300
                  hover:text-[#C96A2B]
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-4
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#C96A2B]
                    opacity-0
                    -translate-x-1/2
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>
            );
          })}

          <Link
            href="#assistant"
            className="
              ml-2
              rounded-full
              bg-[#2E2018]
              px-6
              py-3
              text-sm
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#C96A2B]
            "
          >
            Trò chuyện AI
          </Link>
        </nav>

        {/* Mobile */}

        <button
          className="md:hidden text-[#2E2018]"
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>
    </header>
  );
}