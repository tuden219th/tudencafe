import HeroCTA from "./HeroCTA";
import HeroFeatures from "./HeroFeatures";

export default function HeroLeft() {
  return (
    <div className="max-w-2xl">
      {/* Tagline */}

      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-full
          border
          border-[var(--primary)]/15

          bg-[var(--primary)]/5

          px-5
          py-2
        "
      >
        <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]

            text-[var(--primary)]
          "
        >
          FROM WHERE YOU ARE
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
          mt-8

          text-6xl
          font-medium
          leading-[1.05]

          tracking-[-0.04em]

          text-[var(--foreground)]

          lg:text-8xl
        "
      >
        Cà phê

        <span
          className="
            block

            text-[var(--primary)]
          "
        >
          Từ Đến
        </span>
      </h1>

      {/* Quote */}

      <p
        className="
          mt-4

          text-2xl
          italic

          text-[#7A6A5B]
        "
      >
        Every journey begins with one cup.
      </p>

      {/* Description */}

      <p
        className="
          mt-8

          max-w-xl

          text-lg
          leading-9

          text-neutral-600
        "
      >
        Không chỉ là một ly cà phê.
        <br />
        Đó là nơi những ý tưởng bắt đầu, những cuộc trò chuyện được mở ra,
        và mỗi người có thêm một khoảng lặng để đi tiếp hành trình của mình.
      </p>

      <HeroCTA />

      <div className="mt-12">
        <HeroFeatures />
      </div>
    </div>
  );
}