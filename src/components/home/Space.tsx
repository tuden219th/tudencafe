"use client";

import { motion, type Variants } from "framer-motion";

const spaceItems = [
  {
    title: "Không gian bình yên",
    description:
      "Một nơi để chậm lại, trò chuyện hoặc đơn giản là tận hưởng một khoảng thời gian riêng.",
  },
  {
    title: "Làm việc & gặp gỡ",
    description:
      "Bàn ghế thoải mái, wifi tốc độ cao miễn phí, điều hòa dễ chịu cho những giờ làm việc và kết nối.",
  },
  {
    title: "Trải nghiệm trọn vẹn",
    description:
      "Ánh sáng vừa đủ, mùi cà phê nhẹ nhàng và những góc nhỏ để bạn thư giãn mỗi ngày.",
  },
];

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Space() {
  return (
    <section
      id="space"
      className="py-32"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-20"
        >

          <p
            className="
              mb-5
              text-sm
              tracking-[0.35em]
              text-[var(--primary)]
            "
          >
            SPACE
          </p>


          <h2
            className="
              text-5xl
              leading-tight
            "
          >
            Một điểm dừng bình yên
          </h2>


          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-black/60
            "
          >
            Không chỉ là nơi thưởng thức cà phê.
            <br />
            Từ Đến là không gian để bạn nghỉ ngơi,
            làm việc và tiếp tục hành trình của mình.
          </p>

        </motion.div>


        {/* Content */}
        <div
          className="
            grid
            gap-12
            md:grid-cols-3
          "
        >

          {spaceItems.map((item, index) => (

            <motion.article
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                group
                relative
                pt-8
              "
            >

              {/* Animated line */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className="
                  absolute
                  top-0
                  left-0
                  h-px
                  bg-[var(--primary)]/40
                "
              />


              <span
                className="
                  text-sm
                  tracking-[0.35em]
                  text-[var(--primary)]
                "
              >
                0{index + 1}
              </span>


              <h3
                className="
                  mt-8
                  text-3xl
                  font-medium
                  tracking-tight
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  mt-5
                  leading-8
                  text-black/50
                "
              >
                {item.description}
              </p>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}