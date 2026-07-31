export default function HeroRight() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center

        min-h-[520px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          h-96
          w-96

          rounded-full

          bg-[var(--primary)]/15

          blur-3xl
        "
      />

      {/* Coffee Card */}
      <div
        className="
          relative

          w-full
          max-w-md

          overflow-hidden
          rounded-[32px]

          border
          border-white/40

          bg-white/70

          p-8

          shadow-2xl
          backdrop-blur
        "
      >
        <div
          className="
            aspect-[4/5]

            rounded-3xl

            bg-gradient-to-br
            from-[#C96A2B]
            via-[#9A5930]
            to-[#294A3A]
          "
        />

        <div className="mt-6">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]

              text-neutral-500
            "
          >
            TODAY'S BREW
          </p>

          <h3
            className="
              mt-2

              text-2xl
              font-bold
            "
          >
            From where you are
          </h3>

          <p className="mt-2 text-neutral-600">
            To where you want to be.
          </p>
        </div>
      </div>
    </div>
  );
}