export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        bg-[#3B2416]
        text-[#F5EBDD]
        mt-32
      "
    >

      <div
        className="
          container
          py-20
          grid
          md:grid-cols-3
          gap-12
        "
      >


        {/* BRAND */}

        <img
        src="/images/logo.png"
        alt="Từ Đến Coffee"
        loading="lazy"
        className="
            h-20
            mb-8
        "
        />


          <p
            className="
              leading-8
              opacity-80
            "
          >
            From where you are,
            <br />
            To where you want to be.
          </p>


          <p
            className="
              mt-6
              leading-8
              opacity-70
            "
          >
            Một góc nhỏ cho những
            <br />
            hành trình lớn.
          </p>

        </div>





        {/* CONTACT */}

        <div>

          <h3
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              mb-8
            "
          >
            Ghé thăm
          </h3>


          <p className="leading-8 opacity-80">

            Từ Đến Coffee
            <br />
            219 Tô Hiệu, Nghĩa Đô, Hà Nội
            <br />
            (Trước đây thuộc Quận Cầu Giấy)

            </p>


          <div className="mt-5 space-y-3">


            <a
              href="tel:0972516250"
              className="
                block
                hover:text-[#C98955]
                transition
              "
            >
              ☎ 0972 516 250
            </a>


            <a
              href="tel:0988242921"
              className="
                block
                hover:text-[#C98955]
                transition
              "
            >
              ☎ 0988 242 921
            </a>


          </div>



          <p
            className="
              mt-6
              opacity-80
            "
          >
            Mở cửa:
            <br />
            07:00 - 22:00
          </p>

        <a
        href="tel:0972516250"
        className="
            inline-block
            mt-6
            rounded-full
            bg-[#C98955]
            px-6
            py-3
            text-white
            transition
            hover:scale-105
        "
        >
        Đặt bàn ngay
        </a>

        </div>






        {/* SOCIAL */}

<div>

  <h3
    className="
      uppercase
      tracking-[0.3em]
      text-sm
      mb-8
    "
  >
    Kết nối
  </h3>


  <div className="space-y-4">


    <a
      href="https://www.facebook.com/TudenCafe"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        hover:text-[#C98955]
        transition
      "
    >
      Facebook
    </a>



    <a
      href="https://www.instagram.com/atx171"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        hover:text-[#C98955]
        transition
      "
    >
      Instagram
    </a>




    <a
      href="https://zalo.me/0972516250"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        hover:text-[#C98955]
        transition
      "
    >
      Zalo
    </a>




    <a
      href="https://maps.app.goo.gl/QMD2MBb9AGcSVPUx9"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        hover:text-[#C98955]
        transition
      "
    >
      Google Maps
    </a>


  </div>


</div>

      </div>



      {/* COPYRIGHT */}

      <div
        className="
          border-t
          border-white/20
          py-6
          text-center
          text-sm
          opacity-60
        "
      >

        © 2026 Từ Đến Coffee.
        All rights reserved.

      </div>


    </footer>
  );
}