export default function Menu() {
  return (
    <section
      id="menu"
      className="py-32"
    >
      <div className="container">

        <p className="mb-4 text-sm tracking-[0.35em] text-[var(--primary)]">
          MENU
        </p>

        <h2 className="mb-14 text-5xl">
          Những điểm dừng
        </h2>

        <div className="grid gap-12 md:grid-cols-3">

          <article>
            <h3 className="mb-4 text-2xl">☕ Cà phê Việt</h3>
            <p>Đen · Nâu · Bạc xỉu</p>
            <p className="mt-3 text-[var(--primary)]">
              từ 25.000đ
            </p>
          </article>

          <article>
            <h3 className="mb-4 text-2xl">
              Espresso Bar
            </h3>

            <p>
              Espresso · Latte · Cappuccino
            </p>

            <p className="mt-3 text-[var(--primary)]">
              từ 35.000đ
            </p>
          </article>

          <article>
            <h3 className="mb-4 text-2xl">
              Tea & Food
            </h3>

            <p>
              Trà, đồ uống nhẹ và những cuộc gặp.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}