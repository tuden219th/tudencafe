export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-20
      "
    >

      <div className="container">

        <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
        ">


          {/* LEFT */}

          <div>

            <p className="
              uppercase
              tracking-[0.45em]
              text-sm
              text-[var(--primary)]
              mb-8
            ">
              Từ Đến Coffee
            </p>


            <h1
              className="
                text-5xl
                md:text-7xl
                leading-[1]
                mb-10
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
                text-lg
                leading-9
                max-w-xl
                opacity-75
              "
            >

              Có những ngày,
              chúng ta không cần đi đâu xa.

              <br /><br />

              Chỉ cần một góc nhỏ.
              <br />

              Một ly cà phê.
              <br />

              Một khoảng lặng để bước tiếp.

            </p>



            <div className="mt-12 flex gap-5">


              <a
                href="#menu"
                className="
                  rounded-full
                  bg-[var(--primary)]
                  px-8
                  py-4
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Khám phá menu →
              </a>



              <a
                href="tel:0972516250"
                className="
                  rounded-full
                  border
                  border-[var(--text)]
                  px-8
                  py-4
                  transition
                  hover:bg-[var(--text)]
                  hover:text-white
                "
              >
                0972 516 250
              </a>


            </div>


          </div>



          {/* RIGHT IMAGE */}

          <div
            className="
              relative
              h-[650px]
              rounded-[36px]
              overflow-hidden
              shadow-2xl
            "
          >

            <img
              src="/images/hero.jpg"
              alt="Không gian Từ Đến Coffee"
              className="
                w-full
                h-full
                object-cover
              "
            />


            <div
              className="
                absolute
                inset-0
                bg-black/20
              "
            />


            <div
              className="
                absolute
                bottom-10
                left-10
                text-white
              "
            >

              <p className="
                uppercase
                tracking-[0.4em]
                text-sm
              ">
                From where you are
              </p>

              <p className="
                text-3xl
                mt-3
                font-[var(--font-playfair)]
              ">
                Một điểm dừng,
                <br />
                một hành trình.
              </p>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}