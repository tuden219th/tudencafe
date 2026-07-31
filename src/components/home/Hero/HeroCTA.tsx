import Button from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        gap-4
      "
    >
      <Button href="/menu">
        Khám phá Menu
      </Button>

      <Button
        href="#story"
        variant="secondary"
      >
        Câu chuyện Từ Đến
      </Button>
    </div>
  );
}