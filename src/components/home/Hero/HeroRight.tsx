import Image from "next/image";

export default function HeroRight() {
  return (
    <div
      className="
        flex
        justify-end
      "
    >
      <Image
        src="/images/hero-coffee.jpg"
        alt="Từ Đến Coffee"
        width={760}
        height={920}
        priority
        className="
          h-[720px]
          w-auto

          rounded-xl

          object-cover
        "
      />
    </div>
  );
}