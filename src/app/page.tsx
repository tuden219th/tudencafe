export default function Home() {
  return (
    <main className="bg-[#F6F1E8] text-[#2A241E]">

      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="mb-6 tracking-[0.35em] uppercase text-sm text-[#B45A38]">
          Coffee · Tea · Food
        </p>

        <h1
          className="text-7xl md:text-8xl font-light"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Từ Đến
        </h1>

        <div className="mt-6 h-px w-24 bg-[#B45A38]" />

        <p className="mt-10 text-2xl italic leading-relaxed text-[#4C433B]">
          From where you are.
          <br />
          To where you want to be.
        </p>

        <p className="mt-16 max-w-2xl text-lg leading-9 text-[#5E554D]">

          Có những ngày...

          <br /><br />

          Bạn không cần một cuộc nói chuyện lớn.

          <br />

          Không cần ai phải hiểu mình.

          <br />

          Chỉ cần một chiếc ghế.

          <br />

          Một ly cà phê.

          <br />

          Và vài phút để nhớ mình đang đi đâu.
        </p>

      </section>

      {/* STORY */}

      <section className="mx-auto max-w-4xl px-8 py-32">

        <div className="mb-16 text-sm uppercase tracking-[0.3em] text-[#B45A38]">
          Our Story
        </div>

        <h2
          className="text-5xl font-light"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Không chỉ là
          <br />
          một quán cà phê.
        </h2>

        <div className="mt-12 space-y-8 text-lg leading-9 text-[#534A42]">

          <p>
            Từ Đến được tạo ra cho những người luôn
            đang ở giữa một hành trình.
          </p>

          <p>
            Giữa một công việc cũ và một giấc mơ mới.
          </p>

          <p>
            Giữa một cuộc gặp.
            <br />
            Một chuyến đi.
            <br />
            Một quyết định.
          </p>

          <p>
            Có thể bạn chỉ ghé đây mười lăm phút.
          </p>

          <p>
            Nhưng chúng tôi hy vọng,
            khi bước ra khỏi cánh cửa,
            bạn sẽ mang theo nhiều hơn
            một ly cà phê.
          </p>

        </div>

      </section>

      {/* MENU */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-5xl px-8">

          <h2
            className="mb-16 text-center text-5xl font-light"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Today's Coffee
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {[
              ["Đen", "Đậm đà, truyền thống", "25.000đ"],
              ["Nâu", "Cân bằng giữa cà phê và sữa", "25.000đ"],
              ["Espresso", "Nguyên bản", "35.000đ"],
              ["Latte", "Mềm mại và cân bằng", "35.000đ"],
            ].map(([name, desc, price]) => (

              <div
                key={name}
                className="rounded-xl border border-[#ECE5DA] p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {name}
                </div>

                <div className="mt-3 text-[#7B6F64]">
                  {desc}
                </div>

                <div className="mt-8 text-xl font-semibold text-[#B45A38]">
                  {price}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUOTE */}

      <section className="py-32">

        <div className="mx-auto max-w-3xl px-8 text-center">

          <p
            className="text-4xl leading-relaxed italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Every destination
            <br />
            begins with
            <br />
            one small stop.
          </p>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-[#DDD2C2] py-20">

        <div className="mx-auto max-w-6xl px-8">

          <div className="grid gap-12 md:grid-cols-3">

            <div>

              <h3
                className="text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Từ Đến
              </h3>

              <p className="mt-5 leading-8 text-[#6A6159]">
                From where you are.
                <br />
                To where you want to be.
              </p>

            </div>

            <div>

              <div className="uppercase tracking-[0.2em] text-xs text-[#B45A38]">
                Visit
              </div>

              <p className="mt-4">
                219 Tô Hiệu
                <br />
                Nghĩa Đô, Hà Nội
              </p>

              <p className="mt-6">
                0972 516 250
              </p>

            </div>

            <div>

              <div className="uppercase tracking-[0.2em] text-xs text-[#B45A38]">
                Open
              </div>

              <p className="mt-4">
                Every Day
                <br />
                07:00 — 22:30
              </p>

            </div>

          </div>

          <div className="mt-20 border-t border-[#E8DED0] pt-8 text-center text-sm text-[#857B72]">
            © 2026 Từ Đến Cafe
          </div>

        </div>

      </footer>

    </main>
  );
}