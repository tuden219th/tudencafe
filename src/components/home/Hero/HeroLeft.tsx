import HeroCTA from "./HeroCTA";
import { TextFlippingBoardDemo } from "./TextFlippingBoardDemo";

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

          text-[60px]
          leading-[0.95]
          font-semibold

          tracking-tight

          text-[var(--foreground)]

          lg:text-[88px]
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

          font-medium
        "
      >
        Một ly cà phê
        <br />
        cho một hành trình mới.
      </p>


      <p
        className="
          mt-6

          text-base
          leading-8

          text-neutral-500
        "
      >
        Không chỉ để tỉnh táo.
        <br />
        Đây là nơi những cuộc trò chuyện,
        những ý tưởng và những khởi đầu mới được mở ra.
      </p>


      <div
        className="
          mt-8
          rounded-xl

          border
          border-black/5

          bg-white/40

          px-5
          py-4

          backdrop-blur-sm
        "
      >
        <TextFlippingBoardDemo />
      </div>


      <div
        className="
          mt-10
        "
      >
        <HeroCTA />
      </div>


    </div>
  );
}