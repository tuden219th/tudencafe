import Image from "next/image";

export default function HeroRight() {
  return (
    <div
      className="
        mt-12
        flex
        justify-center

        lg:mt-0
        lg:justify-end
      "
    >
      <Image
        src="/images/hero-coffee.jpg"
        alt="Từ Đến Coffee"
        width={760}
        height={920}
        priority
        className="
          h-auto
          w-[92%]
          max-w-[420px]

          lg:w-full
          lg:max-w-[620px]

          rounded-[var(--radius)]

          object-contain

          shadow-[var(--shadow)]

          transition-transform
          duration-500

          hover:scale-[1.01]
        "
      />
    </div>
  );
}