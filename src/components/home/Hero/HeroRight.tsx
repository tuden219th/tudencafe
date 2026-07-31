import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Background Glow */}
      <div
        className="
          absolute
          top-10
          right-8

          h-72
          w-72

          rounded-full

          bg-[var(--primary)]/10

          blur-3xl
        "
      />

      {/* Coffee Image */}
      <div
        className="
          relative

          w-full
          max-w-[520px]

          overflow-hidden

          rounded-[32px]

          shadow-[0_30px_80px_rgba(0,0,0,.18)]
        "
      >
        <Image
          src="/images/hero-coffee.jpg"
          alt="Từ Đến Coffee"
          width={900}
          height={1100}
          priority
          className="
            h-auto
            w-full

            object-cover

            transition-transform
            duration-700

            hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/55
            via-black/5
            to-transparent
          "
        />

        {/* Text */}
        <div
          className="
            absolute
            bottom-0
            left-0

            w-full

            p-8
          "
        >
          <span
            className="
              text-xs
              uppercase

              tracking-[0.35em]

              text-white/70
            "
          >
            Journey Starts Here
          </span>

          <h3
            className="
              mt-3

              text-3xl
              font-semibold

              text-white
            "
          >
            From where you are
          </h3>

          <p
            className="
              mt-2

              text-white/80
            "
          >
            To where you want to be.
          </p>
        </div>
      </div>

      {/* Floating Card */}
      <div
        className="
          absolute

          -bottom-8
          -left-6

          hidden
          lg:block

          rounded-2xl

          bg-white/95

          px-6
          py-5

          shadow-xl
          backdrop-blur
        "
      >
        <p
          className="
            text-xs
            uppercase

            tracking-[0.25em]

            text-neutral-500
          "
        >
          TODAY'S BREW
        </p>

        <p
          className="
            mt-2

            text-xl
            font-semibold
          "
        >
          Một ly cà phê.
        </p>

        <p className="text-neutral-600">
          Một hành trình mới.
        </p>
      </div>
    </div>
  );
}