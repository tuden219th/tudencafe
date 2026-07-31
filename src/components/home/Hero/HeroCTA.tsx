import Button from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        items-center
        gap-4
      "
    >
      <Button
        href="/coffee"
        className="
          px-8
          shadow-xl
        "
      >
        ☕ Khám phá Menu
      </Button>

      <Button
        href="#story"
        variant="secondary"
        className="
          px-8
        "
      >
        📖 Câu chuyện Từ Đến
      </Button>

      <div
        className="
          mt-2
          flex
          w-full
          items-center
          gap-3

          text-sm
          text-neutral-500
        "
      >
        <div className="flex -space-x-2">
          <div className="h-9 w-9 rounded-full border-2 border-white bg-[#C96A2B]" />
          <div className="h-9 w-9 rounded-full border-2 border-white bg-[#294A3A]" />
          <div className="h-9 w-9 rounded-full border-2 border-white bg-[#8B5E3C]" />
        </div>

        <div>
          <p className="font-semibold text-neutral-700">
            Mỗi ly cà phê là một điểm khởi đầu.
          </p>

          <p className="text-xs">
            From where you are → To where you want to be
          </p>
        </div>
      </div>
    </div>
  );
}