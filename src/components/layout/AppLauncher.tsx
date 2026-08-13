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

const KoreanIcon = ({ size = 24, strokeWidth = 1.7, ...props }: { size?: number | string; strokeWidth?: number; [key: string]: any }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth={strokeWidth} fill="none" />
    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize={Math.max(10, (Number(size) || 24) * 0.55)} fill="currentColor" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial">한</text>
  </svg>
);

type Props = {
  open: boolean;
  onClose: () => void;
};

const apps = [
  {
    icon: BookOpen,
    title: "Learning",
    href: "https://english.tudencafe.com",
  },
  {
    icon: KoreanIcon,
    title: "Học tiếng Hàn",
    href: "https://korean.tudencafe.com",
  },
  {
    icon: Cpu,
    title: "Công nghệ",
    href: "/congnghe",
  },
  {
    icon: Compass,
    title: "Hành trình",
    href: "#journey",
  },
  {
    icon: BookOpen,
    title: "Kiến thức",
    href: "/coffee",
  },
  {
    icon: Newspaper,
    title: "Bài viết",
    href: "/blog",
  },
  {
    icon: Users,
    title: "Về chúng tôi",
    href: "/about",
  },
  {
    icon: MapPin,
    title: "Liên hệ",
    href: "/contact",
  },
];

export default function AppLauncher({
  open,
  onClose,
}: Props) {
  return (
    <>
      {/* Overlay - click bên ngoài để đóng */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[97]

          bg-black/10
          backdrop-blur-[2px]

          transition-all
          duration-500

          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          }
        `}
      />

      <section
        className={`
          fixed
          top-[80px]
          bottom-4
          left-4
          right-4
          z-[98]

          md:top-24
          md:bottom-20
          md:left-[120px]
          md:right-20

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
              : "invisible translate-x-6 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          aria-label="Close apps"
          className="
            absolute
            right-5
            top-5
            z-[110]

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            text-2xl
            text-[#6B5D52]

            transition-all
            duration-300

            hover:bg-[#EFE5DA]
            hover:text-[var(--primary)]
            hover:rotate-90
          "
        >
          ×
        </button>

        <div className="flex min-h-full w-full max-w-[1100px] flex-col px-8 py-12 lg:px-14 lg:py-16">

          {/* Header */}

          <div
            className={`
              relative
              top-[-108px]

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
                translate-x-7
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
                mb-8
                translate-x-8
                w-[calc(100vw-80px)]
                max-w-xl

                text-sm
                leading-7
                text-[#6B5D52]
              "
            >
              Khám phá những trải nghiệm và không gian khác nhau trong hệ sinh thái Từ Đến.
            </p>
          </div>

          {/* Apps */}

          <div className="relative -top-22 grid w-fit translate-x-4 grid-cols-3 gap-x-2 gap-y-4 min-[430px]:grid-cols-4 lg:grid-cols-5">
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

                    flex
                    flex-col
                    items-center

                    transition-all
                    duration-500

                    hover:-translate-y-1

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
                      size={37}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      text-xs
                      font-semibold
                      text-[#3B2416]

                      transition-colors
                      duration-300

                      group-hover:text-[var(--primary)]
                    "
                  >
                    {app.title}
                  </h3>
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
    </>
  );
}