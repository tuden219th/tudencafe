export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EBDD] text-[#3B2416]">


      {/* HERO */}
      <section
        id="home"
        className="
        min-h-screen
        flex
        items-center
        px-6
        md:px-20
        relative
        "
      >

        <div className="max-w-5xl">

          <p
            className="
            text-sm
            tracking-[0.5em]
            text-[#C96A2B]
            mb-8
            "
          >
            TỪ ĐẾN COFFEE
          </p>


          <h1
            className="
            font-[var(--font-playfair)]
            text-5xl
            md:text-8xl
            leading-tight
            "
          >
            From where you are,
            <br />
            To where you want to be.
          </h1>


          <p
            className="
            mt-10
            text-xl
            md:text-2xl
            max-w-2xl
            leading-relaxed
            "
          >
            Có những ngày,
            chúng ta không cần đi đâu xa.
            <br />

            Chỉ cần một góc nhỏ.
            Một ly cà phê.
            Một khoảng lặng để bước tiếp.
          </p>



          <div className="mt-12 flex gap-5 flex-wrap">


            <a
              href="#menu"
              className="
              bg-[#C96A2B]
              text-white
              px-8
              py-3
              rounded-full
              hover:scale-105
              transition
              "
            >
              Xem menu
            </a>


            <a
              href="tel:0972516250"
              className="
              border
              border-[#3B2416]
              px-8
              py-3
              rounded-full
              hover:bg-[#3B2416]
              hover:text-white
              transition
              "
            >
              0972 516 250
            </a>


          </div>


        </div>


      </section>




      {/* STORY */}
      <section
        id="story"
        className="
        px-6
        md:px-20
        py-32
        bg-white
        "
      >

        <div className="max-w-3xl">


          <p className="text-[#C96A2B] tracking-[0.3em] text-sm mb-5">
            CÂU CHUYỆN
          </p>


          <h2
            className="
            font-[var(--font-playfair)]
            text-5xl
            mb-10
            "
          >
            Từ đâu?
          </h2>



          <p className="text-lg leading-relaxed text-gray-700">

            Mỗi người bước vào quán
            đều mang theo một hành trình riêng.

            <br/><br/>

            Có người tìm một ly cà phê trước giờ làm.
            Có người tìm một nơi để suy nghĩ.
            Có người chỉ muốn ngồi yên vài phút.

            <br/><br/>

            Từ Đến sinh ra từ những khoảnh khắc nhỏ đó.

          </p>


        </div>

      </section>





      {/* MENU */}
      <section
        id="menu"
        className="
        px-6
        md:px-20
        py-32
        "
      >


        <p className="text-[#C96A2B] tracking-[0.3em] text-sm mb-5">
          MENU
        </p>


        <h2
          className="
          font-[var(--font-playfair)]
          text-5xl
          mb-14
          "
        >
          Những điểm dừng
        </h2>




        <div className="grid md:grid-cols-3 gap-10">


          <div>
            <h3 className="text-2xl mb-4">
              ☕ Cà phê Việt
            </h3>

            <p className="text-gray-700">
              Đen · Nâu · Bạc xỉu
            </p>

            <p className="mt-3 text-[#C96A2B]">
              từ 25.000đ
            </p>

          </div>



          <div>

            <h3 className="text-2xl mb-4">
              Espresso Bar
            </h3>


            <p className="text-gray-700">
              Espresso · Latte · Cappuccino
            </p>


            <p className="mt-3 text-[#C96A2B]">
              từ 35.000đ
            </p>

          </div>



          <div>

            <h3 className="text-2xl mb-4">
              Tea & Food
            </h3>


            <p className="text-gray-700">
              Trà, đồ uống nhẹ và những cuộc gặp.
            </p>

          </div>



        </div>


      </section>





      {/* FOOTER */}

      <footer
        className="
        bg-[#3B2416]
        text-[#F5EBDD]
        px-6
        md:px-20
        py-20
        "
      >

        <h2
          className="
          font-[var(--font-playfair)]
          text-4xl
          mb-8
          "
        >
          Từ Đến Coffee
        </h2>


        <p>
          219 Tô Hiệu - Hà Nội
        </p>


        <p>
          Coffee · Tea · Food
        </p>


        <p>
          0972 516 250
        </p>


        <p className="mt-10 opacity-60">
          From where you are,
          To where you want to be.
        </p>


      </footer>


    </main>
  );
}