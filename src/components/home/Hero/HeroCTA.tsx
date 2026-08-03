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
      <Button href="/coffee">
        Chọn một ly cà phê
      </Button>

      <Link
        href="#story"
        className="
          inline-flex
          items-center

          py-2

          text-[15px]
          font-medium

          text-[var(--foreground)]

          transition-colors
          duration-300

          hover:text-[var(--primary)]
          hover:underline
          underline-offset-8
        "
      >
        Câu chuyện của Từ Đến
      </Link>
    </div>
  );
}