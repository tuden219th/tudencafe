import HeroCTA from "./HeroCTA";
import HeroFeatures from "./HeroFeatures";

export default function HeroLeft() {
  return (
    <div>
      <span
        className="
          inline-flex
          rounded-full
          bg-[#F5EBDD]
          px-4
          py-2

          text-sm
          font-semibold

          text-[var(--primary)]
        "
      >
        From where you are → To where you want to be
      </span>

      <h1
        className="
          mt-6

          text-5xl
          font-bold
          leading-tight

          lg:text-7xl
        "
      >
        Cà phê
        <br />
        Từ Đến
      </h1>

      <p
        className="
          mt-6
          max-w-xl

          text-lg
          leading-8

          text-neutral-600
        "
      >
        Một ly cà phê không chỉ để tỉnh táo.
        Đó là nơi bắt đầu cho một hành trình mới,
        một cuộc trò chuyện mới,
        một ý tưởng mới.
      </p>

      <HeroCTA />

      <HeroFeatures />
    </div>
  );
}