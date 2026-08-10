"use client";

import Link from "next/link";
import {
  Coffee,
  Sparkles,
  Cpu,
  Compass,
  BookOpen,
  Newspaper,
  Users,
  MapPin,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const apps = [
  {
    icon: Coffee,
    title: "Menu",
    description: "Khám phá menu Từ Đến",
    href: "#menu",
  },
  {
    icon: Sparkles,
    title: "Trợ lý AI",
    description: "Trò chuyện cùng Từ Đến",
    href: "#assistant",
  },
  {
    icon: Cpu,
    title: "Công nghệ",
    description: "Khám phá thế giới công nghệ",
    href: "/congnghe",
  },
  {
    icon: Compass,
    title: "Hành trình",
    description: "Câu chuyện của Từ Đến",
    href: "#journey",
  },
  {
    icon: BookOpen,
    title: "Kiến thức",
    description: "Thế giới cà phê",
    href: "/coffee",
  },
  {
    icon: Newspaper,
    title: "Bài viết",
    description: "Những câu chuyện tản mạn",
    href: "/blog",
  },
  {
    icon: Users,
    title: "Về chúng tôi",
    description: "Tìm hiểu Từ Đến",
    href: "/about",
  },
  {
    icon: MapPin,
    title: "Liên hệ",
    description: "Ghé thăm Từ Đến",
    href: "/contact",
  },
];

export default function AppLauncher({
  open,
  onClose,
}: Props) {
  return (
    <section
      className={`
        fixed
        !top-10
        !bottom-10
        !left-[390px]
        !right-10
        z-[95]

        rounded-[12px]

        overflow-y-auto

        bg-gradient-to-r from-[#DCCBB9] via-[#EEE5DC] to-[#FAF8F5]
        backdrop-blur-xl

        transition-all
        duration-500
        ease-out

        ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-6 opacity-0"
        }
      `}
    >
      <div className="flex min-h-full w-full max-w-[1100px] flex-col px-8 py-12 lg:px-14 lg:py-16">

        {/* Header */}

        <div
          className={`
            mb-10

            transition-all
            duration-500
            delay-100

            ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          <p
            className="
              text-xs
              translate-x-4
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#9B8A79]
            "
          >
            TỪ ĐẾN
          </p>

          <h2
            className="
              logo-font
              mt-2
              translate-x-10
              text-4xl
              text-[var(--primary)]
              lg:text-5xl
            "
          >
            Apps & Experiences
          </h2>

          <p
            className="
              mt-3
              translate-x-10
              max-w-xl
              whitespace-nowrap
              text-sm
              leading-7
              text-[#6B5D52]
            "
          >
            Khám phá những trải nghiệm và không gian khác nhau trong hệ sinh thái Từ Đến.
          </p>
        </div>

        {/* Apps */}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {apps.map((app, index) => {
            const Icon = app.icon;

            return (
              <Link
                key={app.title}
                href={app.href}
                onClick={onClose}
                style={{
                  transitionDelay: `${150 + index * 50}ms`,
                }}
                className={`
                  group
                  translate-x-9
                  rounded-3xl
                  border
                  border-[#E8DDD2]

                  bg-white

                  p-5
                  lg:p-6

                  shadow-sm

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[var(--primary)]
                  hover:shadow-xl

                  ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#F8F5F1]

                    text-[#6B5D52]

                    transition-all
                    duration-300

                    group-hover:bg-[var(--primary)]
                    group-hover:text-white
                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-base
                    font-semibold
                    text-[#3B2416]

                    transition-colors
                    duration-300

                    group-hover:text-[var(--primary)]
                  "
                >
                  {app.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    min-h-[42px]

                    text-xs
                    leading-5

                    text-[#8B7765]
                  "
                >
                  {app.description}
                </p>

                {/* Arrow */}

                <div
                  className="
                    mt-4
                    text-sm
                    text-[#B7A797]

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:text-[var(--primary)]
                  "
                >
                  Mở ứng dụng →
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}

        <div className="mt-auto pt-14">
          <div
            className="
              border-t
              border-[#E8DDD2]
              pt-6

              text-center
              text-xs
              tracking-[0.15em]
              text-[#9B8A79]
            "
          >
            FROM WHERE YOU ARE · TO WHERE YOU WANT TO BE
          </div>
        </div>
      </div>
    </section>
  );
}