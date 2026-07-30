import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiến thức Cà phê",
  description:
    "Khám phá thế giới cà phê cùng Từ Đến Cafe. Tìm hiểu về hạt cà phê, phương pháp pha, espresso, latte, cold brew và nhiều kiến thức thú vị khác.",
  alternates: { canonical: "/coffee" },
  openGraph: {
    title: "Kiến thức Cà phê | Từ Đến Coffee",
    description:
      "Khám phá hạt cà phê, phương pháp pha và văn hóa thưởng thức cà phê cùng Từ Đến.",
    url: "/coffee",
  },
};

const categories = [
  {
    title: "Hạt cà phê",
    description: "Arabica, Robusta, Liberica, Excelsa và câu chuyện phía sau từng loại hạt.",
    icon: "🌱",
    comingSoon: true,
  },
  {
    title: "Phương pháp pha",
    description: "Espresso, Pour Over, V60, French Press, Moka Pot và nhiều phương pháp khác.",
    icon: "☕",
    comingSoon: true,
  },
  {
    title: "Đồ uống",
    description: "Latte, Cappuccino, Americano, Cold Brew và các thức uống đặc trưng của Từ Đến.",
    icon: "🥛",
    comingSoon: true,
  },
  {
    title: "Văn hóa cà phê",
    description: "Những câu chuyện về cà phê Việt Nam và văn hóa thưởng thức trên thế giới.",
    icon: "🌍",
    comingSoon: true,
  },
];

export default function CoffeePage() {
  return (
    <main className="bg-[#F5EBDD] text-[#3B2416]">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)]">
          Coffee Knowledge
        </p>

        <h1 className="mt-4 font-[var(--font-playfair)] text-5xl md:text-6xl">
          Kiến thức Cà phê
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 opacity-80">
          Từ Đến Cafe không chỉ mong muốn phục vụ những ly cà phê ngon,
          mà còn chia sẻ kiến thức để mỗi người hiểu hơn về thế giới cà phê
          và tìm thấy hương vị phù hợp với mình.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{item.icon}</div>

              <h2 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 opacity-75">
                {item.description}
              </p>

              <div className="mt-8 inline-flex rounded-full bg-[#294A3A] px-4 py-2 text-sm text-white">
                Sắp ra mắt
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[var(--font-playfair)] text-4xl">
            Học một điều mới mỗi ngày
          </h2>

          <p className="mt-6 leading-8 opacity-75">
            Trong thời gian tới, Từ Đến Cafe sẽ liên tục cập nhật các bài viết,
            hướng dẫn và câu chuyện về cà phê để nơi đây trở thành một thư viện
            kiến thức dành cho tất cả những ai yêu cà phê.
          </p>
        </div>
      </section>
    </main>
  );
}
