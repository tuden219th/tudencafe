import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-24
      "
    >
      <div className="container">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[rgba(201,106,43,0.2)]
                bg-white/70
                backdrop-blur
                px-5
                py-2
                mb-8
              "
            >
              <span className="text-lg">☕</span>

              <span
                className="
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  text-[var(--primary)]
                  font-medium
                "
              >
                Từ Đến Coffee
              </span>
            </div>

            <h1
              className="
                text-5xl
                md:text-7xl
                leading-[0.95]
                font-[var(--font-playfair)]
              "
            >
              From where
              <br />
              you are,

              <br />

              <span className="text-[var(--primary)]">
                To where
              </span>

              <br />

              you want
              <br />
              to be.
            </h1>

            <p
              className="
                mt-10
                text-lg
                leading-9
                max-w-xl
                opacity-75
              "
            >
              Có những ngày,
              chúng ta không cần đi đâu xa.

              <br />
              <br />

              Chỉ cần một góc nhỏ.

              <br />

              Một ly cà phê.

              <br />

              Một khoảng lặng để bước tiếp.
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-4
              "
            >
              <a
                href="#menu"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#6B8E23]
                  px-8
                  py-4
                  text-white
                  font-medium
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#5F7F1F]
                "
              >
                Chọn một ly cà phê →
              </a>

              <a
                href="#story"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[rgba(0,0,0,0.1)]
                  bg-white
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
              >
                Câu chuyện Từ Đến
              </a>
            </div>

            {/* STATS */}

            <div
              className="
                mt-16
                grid
                grid-cols-3
                gap-8
                max-w-xl
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-[var(--primary)]">
                  4.9★
                </h3>

                <p className="mt-2 text-sm opacity-70">
                  Google Reviews
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[var(--primary)]">
                  219
                </h3>

                <p className="mt-2 text-sm opacity-70">
                  Tô Hiệu
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[var(--primary)]">
                  Every Day
                </h3>

                <p className="mt-2 text-sm opacity-70">
                  Open
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              h-[680px]
              rounded-[40px]
              overflow-hidden
              shadow-[0_30px_60px_rgba(0,0,0,0.18)]
              group
            "
          >
            <Image
              src="/images/hero.jpg"
              alt="Không gian Từ Đến Coffee"
              fill
              priority
              sizes="(max-width:1024px)100vw,50vw"
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/15
                to-transparent
              "
            />

            {/* BADGE */}

            <div
              className="
                absolute
                top-8
                left-8
                rounded-full
                bg-white/90
                backdrop-blur
                px-5
                py-2
                shadow-lg
              "
            >
              ☕ Since 2026
            </div>

            {/* TEXT */}

            <div
              className="
                absolute
                bottom-10
                left-10
                right-10
                text-white
              "
            >
              <p
                className="
                  uppercase
                  tracking-[0.45em]
                  text-xs
                  opacity-80
                "
              >
                FROM WHERE YOU ARE
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  leading-tight
                  font-[var(--font-playfair)]
                "
              >
                Một điểm dừng,
                <br />
                một hành trình.
              </h2>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-white/80
                "
              >
                Mỗi ly cà phê là một khoảng lặng,
                để bạn tiếp tục hành trình của mình.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}