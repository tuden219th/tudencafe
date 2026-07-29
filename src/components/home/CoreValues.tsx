export default function CoreValues() {
  const values = [
    {
      title: "Chân thành",
      description:
        "Mỗi ly cà phê và mỗi cuộc trò chuyện đều bắt đầu từ sự chân thành.",
      icon: "🤝",
    },
    {
      title: "Đơn giản",
      description:
        "Đơn giản trong cách phục vụ, thiết kế và trải nghiệm để khách hàng luôn cảm thấy dễ chịu.",
      icon: "☕",
    },
    {
      title: "Tử tế",
      description:
        "Quan tâm đến từng chi tiết nhỏ, từ chất lượng đồ uống đến cách chào đón mỗi vị khách.",
      icon: "🌿",
    },
    {
      title: "Không ngừng học hỏi",
      description:
        "Mỗi ngày là một cơ hội để học hỏi, cải thiện và phát triển cùng khách hàng.",
      icon: "📚",
    },
    {
      title: "Luôn cải tiến",
      description:
        "Không ngừng đổi mới sản phẩm, dịch vụ và công nghệ để mang lại trải nghiệm tốt hơn.",
      icon: "🚀",
    },
    {
      title: "Chất lượng trong từng chi tiết",
      description:
        "Từ hạt cà phê, công thức pha chế đến không gian và website đều được chăm chút cẩn thận.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)]">
            Giá trị cốt lõi
          </p>

          <h2 className="mt-4 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Điều tạo nên
            <br />
            Từ Đến Cafe
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-75">
            Chúng tôi tin rằng một thương hiệu không chỉ được tạo nên bởi đồ
            uống, mà còn bởi những giá trị được gìn giữ mỗi ngày.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-black/5 bg-[#FDFBF8] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl">{value.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 opacity-75">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}