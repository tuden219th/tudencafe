export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EBDD] text-[#3B2416]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">

        <div className="max-w-4xl">

          <p className="text-sm tracking-[0.4em] text-[#C96A2B] mb-6">
            TỪ ĐẾN COFFEE
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            From where you are,
            <br />
            To where you want to be.
          </h1>


          <p className="mt-8 text-xl md:text-2xl leading-relaxed max-w-2xl">
            Có những ngày,
            chúng ta chỉ cần một nơi để dừng lại.
            <br />
            Một ly cà phê.
            Một câu chuyện.
            Một bước tiếp theo.
          </p>


          <div className="mt-10 flex gap-4">

            <button className="
              bg-[#C96A2B]
              text-white
              px-7
              py-3
              rounded-full
              hover:opacity-90
              transition
            ">
              Xem menu
            </button>


            <button className="
              border
              border-[#3B2416]
              px-7
              py-3
              rounded-full
              hover:bg-[#3B2416]
              hover:text-white
              transition
            ">
              Tìm chúng tôi
            </button>

          </div>

        </div>

      </section>



      {/* STORY */}
      <section className="
        px-6
        md:px-20
        py-24
        bg-white
      ">

        <div className="max-w-3xl">

          <p className="text-[#C96A2B] tracking-widest text-sm mb-4">
            CÂU CHUYỆN
          </p>


          <h2 className="
            text-4xl
            md:text-5xl
            font-serif
            mb-8
          ">
            Từ đâu?
          </h2>


          <p className="
            text-lg
            leading-relaxed
            text-gray-700
          ">
            Mỗi người bước vào quán
            đều đang trên một hành trình khác nhau.
            <br />
            <br />

            Có người bắt đầu một ngày mới.
            Có người tìm một góc làm việc.
            Có người chỉ muốn ngồi yên vài phút.

            <br />
            <br />

            Từ Đến sinh ra từ những khoảnh khắc nhỏ đó.
          </p>


        </div>

      </section>




      {/* MENU */}
      <section className="
        px-6
        md:px-20
        py-24
      ">

        <p className="text-[#C96A2B] tracking-widest text-sm mb-4">
          MENU
        </p>


        <h2 className="
          text-4xl
          font-serif
          mb-12
        ">
          Những điểm dừng
        </h2>



        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">


          <div>
            <h3 className="text-2xl mb-3">
              ☕ Cà phê Việt
            </h3>

            <p>
              Đen · Nâu · Bạc xỉu
            </p>

            <p className="mt-2 text-[#C96A2B]">
              25.000đ
            </p>

          </div>



          <div>
            <h3 className="text-2xl mb-3">
              ☕ Espresso
            </h3>

            <p>
              Những ly cà phê nhỏ,
              cho những câu chuyện lớn.
            </p>

            <p className="mt-2 text-[#C96A2B]">
              35.000đ
            </p>

          </div>



          <div>
            <h3 className="text-2xl mb-3">
              🍵 Tea & Food
            </h3>

            <p>
              Những lựa chọn nhẹ nhàng
              cho mọi cuộc gặp.
            </p>

          </div>


        </div>


      </section>





      {/* FOOTER */}
      <footer className="
        bg-[#3B2416]
        text-[#F5EBDD]
        px-6
        md:px-20
        py-16
      ">


        <h2 className="
          text-3xl
          font-serif
          mb-6
        ">
          Từ Đến Coffee
        </h2>


        <p>
          219 Tô Hiệu - Hà Nội
        </p>

        <p>
          Coffee · Tea · Food
        </p>


        <p className="
          mt-8
          opacity-70
        ">
          From where you are,
          To where you want to be.
        </p>


      </footer>


    </main>
  );
}