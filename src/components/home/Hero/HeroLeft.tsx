import HeroCTA from "./HeroCTA";

export default function HeroLeft() {
  return (
    <div className="max-w-lg">

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[var(--primary)]
        "
      >
        FROM WHERE YOU ARE
      </p>

      <h1
        className="
          mt-5

          text-[64px]
          leading-[0.95]
          font-semibold

          text-[var(--foreground)]

          lg:text-[92px]
        "
      >
        To

        <span
          className="
            block
            text-[var(--primary)]
          "
        >
          Where you want to be
        </span>
      </h1>

      <p
        className="
          mt-10

          text-2xl
          leading-10

          text-[#5F554B]
        "
      >
        Một ly cà phê
        <br />
        cho một hành trình mới.
      </p>

      <p
        className="
          mt-8

          text-lg
          leading-9

          text-neutral-500
        "
      >
        Không chỉ để tỉnh táo.
        <br />
        Đây là nơi những cuộc trò chuyện,
        những ý tưởng và những khởi đầu mới được mở ra.
      </p>

      <div className="mt-12">
        <HeroCTA />
      </div>

    </div>
  );
}