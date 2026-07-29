import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Về Từ Đến Coffee",
  description:
    "Câu chuyện về Từ Đến Coffee - nơi mỗi ly cà phê là điểm bắt đầu cho một hành trình mới.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F5EBDD] text-[#3B2416]">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)]">
          About Us
        </p>

        <h1 className="mt-5 font-[var(--font-playfair)] text-5xl md:text-6xl leading-tight">
          Từ Đến Coffee
        </h1>

        <p className="mt-8 text-xl italic opacity-80">
          From where you are,
          <br />
          To where you want to be.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="font-[var(--font-playfair)] text-3xl">
            Một hành trình bắt đầu từ một ý tưởng nhỏ
          </h2>

          <div className="mt-8 space-y-6 leading-8 opacity-80">
            <p>
              Từ Đến Coffee được tạo nên với mong muốn trở thành một không gian
              nơi mọi người có thể dừng lại, thưởng thức một ly cà phê và tiếp
              tục hành trình của mình.
            </p>

            <p>
              Chúng tôi tin rằng một quán cà phê không chỉ bán đồ uống. Đó còn
              là nơi những cuộc gặp gỡ bắt đầu, những ý tưởng được hình thành và
              những mục tiêu mới được nuôi dưỡng.
            </p>

            <p>
              Website này cũng là một phần của hành trình ấy. Không chỉ giới
              thiệu quán, đây còn là nền tảng để xây dựng hệ sinh thái số của
              Từ Đến Coffee với đặt món, AI Assistant, kiến thức cà phê và nhiều
              trải nghiệm mới trong tương lai.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h2 className="font-[var(--font-playfair)] text-3xl">
              Sứ mệnh
            </h2>

            <p className="mt-6 leading-8 opacity-80">
              Mang đến những trải nghiệm cà phê chân thành kết hợp với công nghệ
              hiện đại để mỗi lần ghé quán đều trở thành một hành trình đáng nhớ.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h2 className="font-[var(--font-playfair)] text-3xl">
              Tầm nhìn
            </h2>

            <p className="mt-6 leading-8 opacity-80">
              Xây dựng Từ Đến Coffee trở thành một thương hiệu cà phê hiện đại,
              nơi công nghệ giúp nâng cao trải nghiệm khách hàng, tối ưu vận hành
              và kết nối cộng đồng.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center font-[var(--font-playfair)] text-4xl">
          Giá trị chúng tôi theo đuổi
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Chân thành",
              text: "Đối xử với khách hàng bằng sự chân thành trong từng ly cà phê.",
            },
            {
              title: "Không ngừng học hỏi",
              text: "Luôn cải tiến sản phẩm, dịch vụ và công nghệ mỗi ngày.",
            },
            {
              title: "Kết nối",
              text: "Tạo nên một cộng đồng cùng học tập, làm việc và phát triển.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-8 opacity-75">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Store Information */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl bg-[#294A3A] p-10 text-white shadow-xl">
          <h2 className="font-[var(--font-playfair)] text-3xl">
            Ghé Từ Đến Coffee
          </h2>

          <div className="mt-8 space-y-4 text-lg">
            <p>📍 219 Tô Hiệu, Nghĩa Đô, Cầu Giấy, Hà Nội</p>

            <p>📞 0981 815 219</p>

            <p>☕ Mở cửa mỗi ngày</p>

            <p>🌐 https://tudencafe.com</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 text-center">
        <h2 className="font-[var(--font-playfair)] text-4xl">
          Sẵn sàng cho hành trình của bạn?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 opacity-75">
          Hãy bắt đầu bằng một ly cà phê và để Từ Đến Coffee đồng hành cùng bạn
          trên những chặng đường tiếp theo.
        </p>

        <Link
          href="/#menu"
          className="mt-10 inline-flex rounded-full bg-[#C96A2B] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#b85d23]"
        >
          Xem Menu →
        </Link>
      </section>
    </main>
  );
}