import Button from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div className="mt-12 flex items-center gap-5">
      <Button href="/coffee">
        Khám phá Menu
      </Button>

      <Button
        href="#story"
        variant="ghost"
      >
        Câu chuyện →
      </Button>
    </div>
  );
}