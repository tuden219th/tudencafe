import Heading from "@/components/ui/Heading";
import { TextFlippingBoardDemo } from "@/components/ui/TextFlippingBoardDemo";

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

      <div className="mt-5">
        <Heading
          title="To Where you want to be"
          className="
            text-[60px]
            leading-[0.95]
            lg:text-[88px]
          "
        />
      </div>

      <p
        className="
          mt-8

          text-2xl
          font-medium
          leading-10

          text-[var(--foreground)]
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

          text-[var(--text-light)]
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

          rounded-[var(--radius)]

          border
          border-[var(--border)]

          bg-[var(--surface-glass)]

          p-5

          backdrop-blur-sm
        "
      >
        <TextFlippingBoardDemo />
      </div>

      <div className="mt-10">
        <HeroCTA />
      </div>
    </div>
  );
}