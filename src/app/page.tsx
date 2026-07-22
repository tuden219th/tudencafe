export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
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
          Một góc nhỏ để dừng lại.
          <br />
          Một ly cà phê để chậm hơn một chút.
          <br />
          Và đôi khi...
          <br />
          chỉ để nhớ rằng mình vẫn đang trên đường đi.
        </p>

        <div className="mt-12 flex gap-4">
          <button className="rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700">
            Xem Menu
          </button>

          <button className="rounded-full border border-orange-600 px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50">
            Câu chuyện
          </button>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-8 py-24">
        <h2 className="mb-10 text-4xl font-bold text-orange-600">
          Câu chuyện
        </h2>

        <p className="text-lg leading-9 text-stone-700">
          "Từ Đến" không chỉ là một quán cà phê.
          <br />
          Đây là nơi mỗi người có thể dừng lại giữa cuộc sống bận rộn,
          nhìn lại mình đang ở đâu,
          rồi tiếp tục bước tới nơi mình muốn đến.
        </p>
      </section>

      {/* Menu */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-8">
          <h2 className="mb-12 text-4xl font-bold text-orange-600">
            Menu
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Đen đá</h3>
              <p className="mt-2 text-stone-500">
                Đậm đà - truyền thống
              </p>

              <div className="mt-4 text-2xl font-bold text-orange-600">
                25.000đ
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Nâu đá</h3>

              <p className="mt-2 text-stone-500">
                Cân bằng giữa cà phê và sữa
              </p>

              <div className="mt-4 text-2xl font-bold text-orange-600">
                25.000đ
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Espresso</h3>

              <p className="mt-2 text-stone-500">
                Shot espresso nguyên bản
              </p>

              <div className="mt-4 text-2xl font-bold text-orange-600">
                35.000đ
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Latte</h3>

              <p className="mt-2 text-stone-500">
                Espresso kết hợp sữa tươi
              </p>

              <div className="mt-4 text-2xl font-bold text-orange-600">
                35.000đ
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 px-8 py-20 text-center text-white">
        <h2 className="text-4xl font-bold text-orange-500">
          TỪ ĐẾN
        </h2>

        <p className="mt-6 text-lg">
          Coffee • Tea • Food
        </p>

        <p className="mt-10">
          📍 219 Tô Hiệu
        </p>

        <p className="mt-2">
          Hà Nội
        </p>

        <p className="mt-10 text-sm text-stone-400">
          From where you are,
          <br />
          To where you want to be.
        </p>
      </footer>
    </main>
  );
}