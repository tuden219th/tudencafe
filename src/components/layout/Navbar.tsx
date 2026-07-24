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
        bg-[#F5EBDD]/85
        backdrop-blur-lg
        border-b
        border-[#3B2416]/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-24
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <a
          href="/"
          className="
            flex
            items-center
            group
          "
        >

          <div
            className="
              bg-[#F5EBDD]
              rounded-full
              p-2
              shadow-sm
              group-hover:scale-105
              transition
              duration-300
            "
          >

            <Image
              src="/images/logo.png"
              width={90}
              height={90}
              alt="Từ Đến Cafe"
              className="
                h-16
                w-16
                md:h-20
                md:w-20
                rounded-full
                object-cover
              "
            />

          </div>

        </a>


        {/* MENU */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-9
            text-sm
            uppercase
            tracking-[0.18em]
            text-[#3B2416]
          "
        >

          <a
            href="#story"
            className="
              hover:text-[#6B8E23]
              transition
            "
          >
            Câu chuyện
          </a>


          <a
            href="#coffee"
            className="
              hover:text-[#6B8E23]
              transition
            "
          >
            Cà phê
          </a>


          <a
            href="#menu"
            className="
              hover:text-[#6B8E23]
              transition
            "
          >
            Menu
          </a>


          <a
            href="#journal"
            className="
              hover:text-[#6B8E23]
              transition
            "
          >
            Nhật ký
          </a>


          <a
            href="#footer"
            className="
              rounded-full
              bg-[#3B2416]
              text-[#F5EBDD]
              px-6
              py-3
              hover:bg-[#6B8E23]
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