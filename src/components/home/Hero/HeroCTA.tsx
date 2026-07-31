import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div
      className="
        mt-12
        flex
        items-center
        gap-4
      "
    >
      <Button href="/coffee">
        Chọn một ly cà phê →
      </Button>

      <Link
        href="#story"
        className="
          text-[15px]
          font-medium
          text-[var(--foreground)]

          transition-all
          duration-300

          hover:text-[var(--primary)]
          hover:underline
          underline-offset-4
        "
      >
        Câu chuyện
      </Link>
    </div>
  );
}