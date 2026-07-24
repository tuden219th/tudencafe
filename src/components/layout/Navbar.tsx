export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="container flex h-20 items-center justify-between">


        {/* LOGO */}
        <a
          href="/"
          className="flex items-center"
        >

          <img
            src="/images/logo.png"
            alt="Từ Đến Cafe"
            className="h-14 w-auto"
          />

        </a>


        {/* MENU */}
        <nav className="
          hidden
          md:flex
          items-center
          gap-10
          text-sm
          uppercase
          tracking-[0.2em]
        ">


          <a
            href="#story"
            className="
              hover:text-[var(--primary)]
              transition-colors
            "
          >
            Câu chuyện
          </a>


          <a
            href="#menu"
            className="
              hover:text-[var(--primary)]
              transition-colors
            "
          >
            Menu
          </a>


          <a
            href="#footer"
            className="
              hover:text-[var(--primary)]
              transition-colors
            "
          >
            Ghé thăm
          </a>


        </nav>


      </div>

    </header>
  );
}