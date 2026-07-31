import Image from "next/image";

const features = [
  {
    icon: "☕",
    title: "Specialty Coffee",
  },
  {
    icon: "🤖",
    title: "AI Assistant",
  },
  {
    icon: "📚",
    title: "Coffee Knowledge",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        items-center
        overflow-hidden
        py-28
        md:min-h-screen
        md:py-24
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_left,rgba(201,106,43,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(107,142,35,0.08),transparent_30%)]
        "
      />

      <div className="container">

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[rgba(201,106,43,0.18)]
                bg-white/80
                px-5
                py-2.5
                backdrop-blur
              "
            >
              <span className="text-lg">
                ☕
              </span>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[var(--primary)]
                  font-medium
                "
              >
                Coffee • AI • Journey
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                max-w-xl
                font-[var(--font-playfair)]
                text-[3.4rem]
                leading-[0.92]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Từ nơi
              <br />

              <span className="text-[var(--primary)]">
                bạn đang đứng,
              </span>

              <br />

              đến nơi

              <br />

              bạn muốn đến.
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-[#5C5146]
              "
            >
              Một không gian dành cho
              <strong className="font-semibold text-[#2E2018]">
                {" "}
                cà phê,
              </strong>

              <strong className="font-semibold text-[#2E2018]">
                {" "}
                tri thức
              </strong>

              {" "}và những cuộc trò chuyện.

              <br />
              <br />

              Nơi mỗi hành trình đều có thể bắt đầu
              chỉ từ một ly cà phê.
            </p>

            {/* CTA */}

            <div
              className="
                mt-10
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
                  justify-center
                  rounded-full
                  bg-[#C96A2B]
                  px-8
                  py-4
                  text-white
                  font-medium
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Khám phá Menu
            ```
---

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#assistant"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D9D1C8]
                  bg-white
                  px-8
                  py-4
                  font-medium
                  text-[#2E2018]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C96A2B]
                  hover:shadow-lg
                "
              >
                Trò chuyện với AI
              </a>
            </div>

            {/* Feature Pills */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-4
              "
            >
              {features.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#ECE5DD]
                    bg-white
                    px-5
                    py-3
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#4B4037]
                    "
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              h-[380px]
              overflow-hidden
              rounded-[40px]
              shadow-[0_35px_70px_rgba(0,0,0,.18)]
              md:h-[560px]
              lg:h-[700px]
              group
            "
          >
            <Image
              src="/images/hero_temp.png"
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

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/75
                via-black/15
                to-transparent
              "
            />

            {/* Location Badge */}

            <div
              className="
                absolute
                left-8
                top-8
                rounded-full
                bg-white/90
                px-5
                py-2
                text-sm
                font-medium
                backdrop-blur
                shadow-lg
              "
            >
              📍 Tô Hiệu • Hà Nội
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                right-8
                top-8
                hidden
                rounded-3xl
                bg-white/90
                p-5
                backdrop-blur
                shadow-xl
                lg:block
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#8A7868]
                "
              >
                TODAY
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  text-[#2E2018]
                "
              >
                Brew.
              </h3>

              <p
                className="
                  mt-2
                  max-w-[180px]
                  text-sm
                  leading-6
                  text-[#6B5D52]
                "
              >
                Một ly cà phê ngon
                có thể mở đầu
                cho một ngày tuyệt vời.
              </p>
            </div>

            {/* Bottom Content */}

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
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  opacity-80
                "
              >
                FROM WHERE YOU ARE
              </p>

              <h2
                className="
                  mt-4
                  max-w-md
                  font-[var(--font-playfair)]
                  text-4xl
                  leading-tight
                "
              >
                Một điểm dừng,
                <br />
                một hành trình.
              </h2>

              <p
  className="
    mt-6
    max-w-sm
    text-base
    leading-7
    text-white/85
  "
>
  Không chỉ là nơi thưởng thức cà phê.

  <br />
  <br />

  Đây là nơi để học hỏi,
  kết nối và tiếp tục hành trình
  của chính bạn.
</p>

{/* Decorative Journey Line */}

<div
  className="
    mt-8
    flex
    items-center
    gap-3
  "
>
  <span className="h-2 w-2 rounded-full bg-[#C96A2B]" />

  <div className="h-px flex-1 bg-white/40" />

  <span
    className="
      text-[11px]
      uppercase
      tracking-[0.35em]
      text-white/70
    "
  >
    Journey Starts Here
  </span>
</div>

</div>

{/* Soft Light */}

<div
  className="
    absolute
    -bottom-20
    -right-20
    h-72
    w-72
    rounded-full
    bg-[#C96A2B]/20
    blur-3xl
  "
/>

<div
  className="
    absolute
    -top-20
    -left-20
    h-64
    w-64
    rounded-full
    bg-white/20
    blur-3xl
  "
/>

</div>

</div>

</div>

</section>

);
}