"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  House,
  Compass,
  Coffee,
  BookOpen,
  Sparkles,
  Newspaper,
  Cpu,
  Users,
  MapPin,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const menu = [
  { icon: House, title: "Trang chủ", href: "/" },
  { icon: Cpu, title: "Công nghệ", href: "/congnghe" },
  { icon: Compass, title: "Hành trình", href: "#journey" },
  { icon: Coffee, title: "Menu chọn món", href: "#menu" },
  { icon: BookOpen, title: "Kiến thức cà phê", href: "/coffee" },
  { icon: Sparkles, title: "Trợ lý ảo AI", href: "#assistant" },
  { icon: Newspaper, title: "Bài viết tản mạn", href: "/blog" },
  { icon: Users, title: "Về chúng tôi", href: "/about" },
  { icon: MapPin, title: "Liên hệ", href: "/contact" },
];

export default function Drawer({
  open,
  onClose,
}: Props) {
  /* Lock Body Scroll */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ESC Close */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[90]

          bg-black/30
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* App Launcher */}

      {/* Drawer */}

      <aside
        className={`
          fixed
          left-3
          right-3
          top-3
          z-[100]

          flex
          h-[66vh]
          flex-col

          rounded-lg
          overflow-hidden

          bg-[#F8F5F1]

          shadow-2xl

          transition-transform
          duration-500
          ease-out

          ${
            open
              ? "translate-x-0"
              : "-translate-x-[120%]"
          }

          lg:h-screen
          lg:w-[340px]
        `}
      >
        {/* Header */}

        <div
          className="
            relative

            border-b
            border-[#E8DDD2]

            bg-gradient-to-b
            from-white
            to-[#F8F5F1]

            !px-2
            !py-2
          "
        >
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              absolute
              right-5
              top-5

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              transition-all
              duration-300

              hover:bg-[#EFE5DA]
              hover:rotate-90
            "
          >
            ×
          </button>

          <div className="flex items-center gap-5">
            <Image
              src="/images/logo.png"
              alt="Từ Đến Coffee"
              width={72}
              height={72}
              className="rounded-full shadow-lg"
              priority
            />

            <div className="pt-4">
              <h2
                className="
                  logo-font
                  text-[34px]
                  leading-none
                  text-[var(--primary)]
                "
              >
                Từ đến
              </h2>

              <p
                className="
                  mt-2
                  translate-x-[4px]
                  text-[11px]
                  uppercase

                  tracking-[0.25em]

                  text-[#8B7765]
                "
              >
                COFFEE • AI • JOURNEY
              </p>

              <p
              className="
                mt-4
                text-sm
                italic
                leading-7
                text-[#6B5D52]
              "
            >
              <span className="font-semibold text-[var(--primary)]">
                From
              </span>{" "}
              where you are,{" "}
              <span className="font-semibold text-[var(--primary)]">
                To
              </span>{" "}
              where you want to be.
              <br />
            </p>

            </div>
          </div>
        </div>

        {/* Menu */}

        <nav className="flex-1 overflow-y-auto !px-4 !py-4">
          <div className="space-y-2">
            {menu.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    transitionDelay: `${index * 40}ms`,
                  }}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    px-5
                    py-4

                    text-base
                    font-medium

                    text-[#3B2416]

                    transition-all
                    duration-300

                    hover:bg-[#EFE5DA]
                    hover:text-[var(--primary)]
                    hover:translate-x-1
                    hover:shadow-md
                    hover:scale-[1.02]
                  "
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="
                        shrink-0
                        text-[#6B5D52]
                        transition-colors
                        duration-300
                        group-hover:text-[var(--primary)]
                      "
                    />

                    <span>{item.title}</span>
                  </div>

                  <span
                    className="
                      opacity-0

                      transition-all
                      duration-300

                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}

        <div
          className="
            border-t
            border-[#E8DDD2]

            !px-4
            !py-4
          "
        >
          <div
            className="
              mx-2  
              rounded-[6px]
              bg-white
              p-5
              shadow-sm
            "
          >
            <p
              className="
                !px-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#9B8A79]
              "
            >
              TỪ ĐẾN COFFEE
            </p>

            <p
              className="
                !px-2
                mt-4
                text-base
                font-semibold
                text-[#3B2416]
              "
            >
              219 Tô Hiệu, Hà Nội
            </p>

            <p
              className="
                mt-2
                !px-2
                text-sm
                leading-7
                text-[#6B5D52]
              "
            >
              📞 0981 815 219
              <br />
              🌐 tudencafe.com
            </p>
          </div>

          <div
            className="
              !mt-2
              flex
              gap-3
            "
          >
            <a
              href="https://facebook.com/cafetuden"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1

                rounded-[8px]
                border
                border-[#DED4C8]

                py-3

                text-center
                text-sm
                font-medium

                transition-all
                duration-300

                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
              "
            >
              Facebook
            </a>

            <a
              href="https://tudencafe.com"
              className="
                flex-1

                rounded-[8px]
                border
                border-[#DED4C8]

                py-3

                text-center
                text-sm
                font-medium

                transition-all
                duration-300

                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
              "
            >
              Website
            </a>
          </div>

          <p
            className="
              mt-6
              text-center
              text-xs
              tracking-[0.15em]
              text-[#9B8A79]
            "
          >
            © 2026 Từ Đến Coffee
          </p>
        </div>
      </aside>
    </>
  );
}