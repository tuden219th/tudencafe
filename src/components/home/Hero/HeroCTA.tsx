import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="mt-12 flex items-center gap-6">
      <Button href="/coffee">
        Khám phá Menu
      </Button>

      <Link
        href="#story"
        className="
          text-sm
          font-medium
          text-[var(--foreground)]
          transition-colors
          hover:text-[var(--primary)]
        "
      >
        Câu chuyện →
      </Link>
    </div>
  );
}