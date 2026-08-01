"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/Button";
import Drawer from "@/components/layout/Drawer";

const menu = [
  { name: "Hành trình", href: "#journey" },
  { name: "Menu", href: "#menu" },
  { name: "Blog", href: "/coffee" },
  { name: "Về chúng tôi", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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
              ? "bg-[#F8F5F1]/90 backdrop-blur-xl border-b border-[#3B2416]/10 shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            px-6

            transition-all
            duration-500

            ${scrolled ? "h-[76px]" : "h-24"}
          `}
        >
          {/* Left */}

          <div className="flex items-center gap-4">

            {/* Drawer Button */}

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                border
                border-[#DED4C8]

                bg-white/80

                backdrop-blur

                transition-all
                duration-300

                hover:border-[var(--primary)]
                hover:bg-white
              "
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
            </button>

            {/* Logo */}

            <Link
              href="/"
              className="
                group
                flex
                items-center
                gap-4
              "
              aria-label="Từ Đến Coffee"
            >
              <Image
                src="/images/logo.png"
                alt="Từ Đến Coffee"
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
                    logo-font
                    text-[34px]
                    leading-none
                    text-[var(--primary)]
                  "
                >
                  Từ đến
                </h1>

                <p
                  className={`
                    mt-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-[#8B7765]
                    transition-all
                    duration-300

                    ${
                      scrolled
                        ? "opacity-0 h-0 overflow-hidden"
                        : ""
                    }
                  `}
                >
                  FROM WHERE YOU ARE
                </p>
              </div>
            </Link>

          </div>
                  {/* Desktop */}

        <nav
          className="
            hidden
            items-center
            gap-8

            lg:flex
          "
        >
          {menu.map((item) => {
            const active =
              item.href.startsWith("/") &&
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`
                  group
                  relative

                  text-sm
                  font-medium

                  tracking-[0.08em]

                  transition-colors
                  duration-300

                  ${
                    active
                      ? "text-[var(--primary)]"
                      : "text-[#3B2416] hover:text-[var(--primary)]"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-1/2

                    h-0.5

                    bg-[var(--primary)]

                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full -translate-x-1/2"
                    }
                  `}
                />
              </Link>
            );
          })}

          <Button
            href="#assistant"
            className="ml-3"
          >
            Trò chuyện AI
          </Button>
        </nav>

      </div>
    </header>

    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    />
    </>
  );
}