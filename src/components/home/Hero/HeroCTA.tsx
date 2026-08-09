import Link from "next/link";

import Button from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div
      className="
        mt-10
        flex
        flex-col
        items-start
        gap-4

        sm:flex-row
        sm:items-center
        sm:gap-5
      "
    >
      <Button
        href="/coffee"
        className="
          rounded-full
          bg-gradient-to-r
          from-[#A95125]
          via-[#C96A2B]
          to-[#D98245]
          px-7
          py-3.5
          text-[#F5EBDD]
          shadow-[0_8px_24px_rgba(59,36,22,0.18)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:brightness-105
          hover:shadow-[0_12px_30px_rgba(59,36,22,0.25)]
        "
      >
        Chọn một ly cà phê
      </Button>

      <Link
        href="#story"
        className="
          inline-flex
          items-center
          justify-center

          rounded-full
          border
          border-[var(--foreground)]/30
          bg-[var(--background)]/5
          px-7
          py-3.5

          text-[15px]
          font-medium
          text-[var(--foreground)]

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-[var(--primary)]
          hover:bg-[var(--primary)]/10
          hover:text-[var(--primary)]
        "
      >
        Câu chuyện của Từ Đến
      </Link>
    </div>
  );
}