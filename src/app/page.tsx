export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-600">
          Coffee • Tea • Food
        </p>

        <h1 className="text-6xl font-bold tracking-widest text-orange-600">
          TỪ ĐẾN
        </h1>

        <p className="mt-8 max-w-xl text-2xl font-light leading-relaxed">
          From where you are,
          <br />
          To where you want to be.
        </p>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-stone-600">
          Có những ngày...
          <br />
          Chúng ta chỉ cần một chiếc ghế.
          <br />
          Một ly cà phê.
          <br />
          Và vài phút để nhớ mình đang đi đâu.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
          >
            Xem Menu
          </a>

          <a
            href="#story"
            className="rounded-full border border-orange-600 px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Câu chuyện
          </a>
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="mx-auto max-w-5xl px-8 py-24"
      >
        <h2 className="mb-10 text-4xl font-bold text-orange-600">
          Câu chuyện
        </h2>

        <p className="text-lg leading-9 text-stone-700">
          "Từ Đến" không chỉ là một quán cà phê.
          <br />
          Đó là nơi để dừng lại một chút giữa cuộc sống bận rộn.
          <br />
          Một nơi để gặp gỡ, trò chuyện và tiếp thêm năng lượng
          trước khi tiếp tục hành trình của mình.
        </p>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-8">
          <h2 className="mb-12 text-4xl font-bold text-orange-600">
            Menu
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {[
              ["☕ Đen đá", "Đậm đà - truyền thống", "25.000đ"],
              ["🥛 Nâu đá", "Cân bằng giữa cà phê và sữa", "25.000đ"],
              ["⚡ Espresso", "Shot espresso nguyên bản", "35.000đ"],
              ["🤎 Latte", "Espresso kết hợp sữa tươi", "35.000đ"],
            ].map(([name, desc, price]) => (
              <div
                key={name}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{name}</h3>

                <p className="mt-2 text-stone-500">{desc}</p>

                <div className="mt-5 text-2xl font-bold text-orange-600">
                  {price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-8 py-16">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-orange-500">
              TỪ ĐẾN
            </h2>

            <p className="mt-4 text-stone-300 italic">
              From where you are,
              <br />
              To where you want to be.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">

            <div>
              <h3 className="mb-4 text-lg font-semibold text-orange-400">
                📍 Visit Us
              </h3>

              <p>219 Tô Hiệu</p>
              <p>Nghĩa Đô, Hà Nội</p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-orange-400">
                ☎ Contact
              </h3>

              <p>0972 516 250</p>

              <div className="mt-5 space-y-2">
                <a
                  href="https://facebook.com/TudenCafe"
                  target="_blank"
                  className="block hover:text-orange-400"
                >
                  Facebook
                </a>

                <a
                  href="https://instagram.com/atx171"
                  target="_blank"
                  className="block hover:text-orange-400"
                >
                  Instagram
                </a>

                <a
                  href="https://maps.google.com/?q=219+Tô+Hiệu,+Nghĩa+Đô,+Hà+Nội"
                  target="_blank"
                  className="block hover:text-orange-400"
                >
                  Google Maps
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-orange-400">
                🕘 Opening Hours
              </h3>

              <p>Every day</p>
              <p>07:00 – 22:00</p>
            </div>

          </div>

          <div className="mt-16 border-t border-stone-700 pt-6 text-center text-sm text-stone-400">
            © 2026 TỪ ĐẾN • Made with ☕ in Hà Nội
          </div>

        </div>
      </footer>
    </main>
  );
}