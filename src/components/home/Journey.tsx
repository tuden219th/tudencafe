"use client";

import { motion } from "framer-motion";

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
      className="overflow-hidden bg-[#FFFCF8] py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 md:px-6">

        <div className="mx-auto max-w-2xl text-center">

          <p className="
            text-xs
            font-medium
            uppercase
            tracking-[0.35em]
            text-[var(--primary)]
          ">
            Bốn nhịp ở Từ Đến
          </p>


          <h2 className="
            mt-4
            font-[var(--font-playfair)]
            text-4xl
            leading-[1.05]
            md:text-5xl
          ">
            Một ly cà phê,
            <br className="hidden md:block" />
            một hành trình nhỏ.
          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-xl
            text-[15px]
            leading-7
            text-[#3B2416]/70
            md:text-base
          ">
            Có những ngày ta không cần một điều gì quá lớn —
            chỉ cần một nơi để dừng, nạp lại năng lượng và đi tiếp.
          </p>

        </div>



        <ol
          className="
            relative
            mx-auto
            mt-12
            w-full
            max-w-5xl

            md:mt-20
            md:grid
            md:grid-cols-4
            md:gap-12
          "
        >

          {/* Timeline line */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              absolute
              left-[2.25rem]
              top-10
              bottom-10
              w-px
              origin-top
              bg-[#C96A2B]/25

              md:
              bottom-auto
              md:left-[12.5%]
              md:right-[12.5%]
              md:top-7
              md:h-px
              md:w-auto
            "
          />



          {steps.map((step, index) => (

            <motion.li
              key={step.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            className="
              group
              relative
              w-full

              grid
              grid-cols-[4.5rem_1fr]
              gap-4
              py-6

              md:block
              md:p-0
            "
            >


              <motion.span
                whileHover={{
                  scale: 1.12,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-[4.5rem]
                  w-[4.5rem]
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-[#C96A2B]/25
                  bg-[#FFFCF8]

                  font-[var(--font-playfair)]
                  text-xl
                  text-[var(--primary)]

                  transition-shadow

                  hover:shadow-[0_0_0_8px_rgba(201,106,43,0.12)]

                  md:mx-auto
                  md:h-14
                  md:w-14
                  md:bg-[#C96A2B]
                  md:text-white
                "
              >
                {step.number}
              </motion.span>



              <div
                className="
                  pt-1

                  md:mt-8
                  md:text-center
                "
              >

                <h3 className="
                  font-[var(--font-playfair)]
                  text-[1.7rem]
                  leading-tight

                  md:text-2xl
                ">
                  {step.title}
                </h3>


                <p className="
                  mt-2
                  max-w-sm
                  text-[15px]
                  leading-7
                  text-[#3B2416]/70

                  md:mx-auto
                ">
                  {step.text}
                </p>

              </div>


            </motion.li>

          ))}

        </ol>



        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            text-xl
            italic
            text-[var(--primary)]

            md:mt-20
          "
        >
          <span>
            From where you are,
          </span>

          <span className="translate-x-4">
            To where you want to be.
          </span>

        </motion.p>


      </div>
    </section>
  );
}