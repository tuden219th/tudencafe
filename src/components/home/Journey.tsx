const steps = [
  {
    number: "01",
    title: "Dừng lại",
    text: "Một khoảng lặng để hít thở, đặt chiếc điện thoại xuống và trở về với chính mình.",
  },
  {
    number: "02",
    title: "Thưởng thức",
    text: "Một ly cà phê được pha chỉn chu — đủ chậm để cảm nhận, đủ ngon để nhớ.",
  },
  {
    number: "03",
    title: "Kết nối",
    text: "Một cuộc trò chuyện, một ý tưởng, hay đơn giản là ngồi cạnh người mình quý.",
  },
  {
    number: "04",
    title: "Đi tiếp",
    text: "Rời quán với một chút năng lượng mới cho hành trình phía trước.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="
        overflow-hidden
        bg-[#FFFCF8]
        py-20
        md:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-5
          md:px-6
        "
      >
        {/* Header */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-2xl
            flex-col
            items-center
            text-center
          "
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              font-medium
              text-[var(--primary)]
            "
          >
            Bốn nhịp ở Từ Đến
          </p>

          <h2
            className="
              mt-4
              font-[var(--font-playfair)]

              text-4xl
              leading-[1.05]

              md:text-5xl
            "
          >
            Một ly cà phê,
            <br className="hidden md:block" />
            một hành trình nhỏ.
          </h2>

          <p
            className="
              mx-auto
              mt-5

              max-w-xl

              text-[15px]
              leading-7

              text-[#3B2416]/70

              md:text-base
            "
          >
            Có những ngày ta không cần một điều gì quá lớn —
            chỉ cần một nơi để dừng,
            nạp lại năng lượng và đi tiếp.
          </p>
        </div>


        {/* Journey timeline */}

        <ol
          className="
            relative

            mx-auto
            mt-12

            grid
            w-full

            md:mt-16

            md:grid-cols-4
            md:gap-8
          "
        >

          {/* Line */}

          <span
            aria-hidden="true"
            className="
              absolute

              bottom-10
              left-9
              top-10

              w-px

              bg-[#C96A2B]/25

              md:left-[10%]
              md:right-[10%]
              md:top-7

              md:h-px
              md:w-auto
            "
          />


          {steps.map((step) => (
            <li
              key={step.number}
              className="
                relative

                flex
                flex-col
                items-center

                py-6

                text-center

                md:p-0
              "
            >

              {/* Number */}

              <span
                className="
                  relative
                  z-10

                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-full

                  bg-[#C96A2B]

                  font-[var(--font-playfair)]

                  text-xl

                  text-white
                "
              >
                {step.number}
              </span>


              {/* Content */}

              <div
                className="
                  mt-8
                "
              >

                <h3
                  className="
                    font-[var(--font-playfair)]

                    text-2xl

                    leading-tight
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                    mx-auto

                    mt-3

                    max-w-xs

                    text-[15px]

                    leading-7

                    text-[#3B2416]/70
                  "
                >
                  {step.text}
                </p>

              </div>

            </li>
          ))}

        </ol>


        {/* Footer quote */}

        <p
          className="
            mt-10

            text-center

            font-[var(--font-playfair)]

            text-xl

            italic

            text-[var(--primary)]
          "
        >
          From where you are, to where you want to be.
        </p>


      </div>
    </section>
  );
}