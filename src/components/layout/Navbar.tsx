import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#F5EBDD]/80
        backdrop-blur-md
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <a href="/">
          <Image
            src="/images/logo.png"
            width={120}
            height={60}
            alt="Từ Đến Cafe"
            className="h-14 w-auto"
          />
        </a>


        {/* MENU DESKTOP */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            uppercase
            tracking-[0.18em]
            text-[#3B2416]
          "
        >

          <a
            href="#story"
            className="hover:text-[#6B8E23] transition"
          >
            Câu chuyện
          </a>


          <a
            href="#coffee"
            className="hover:text-[#6B8E23] transition"
          >
            Cà phê
          </a>


          <a
            href="#menu"
            className="hover:text-[#6B8E23] transition"
          >
            Menu
          </a>


          <a
            href="#journal"
            className="hover:text-[#6B8E23] transition"
          >
            Nhật ký
          </a>


          <a
            href="#footer"
            className="
              border
              border-[#3B2416]
              px-5
              py-2
              rounded-full
              hover:bg-[#3B2416]
              hover:text-white
              transition
            "
          >
            Ghé thăm
          </a>


        </nav>


      </div>

    </header>
  );
}