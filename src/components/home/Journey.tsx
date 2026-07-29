export default function Journey() {
  const steps = [
    {
      title: "Dừng lại",
      text: "Một khoảng lặng để hít thở và bắt đầu.",
    },
    {
      title: "Thưởng thức",
      text: "Một ly cà phê được pha với sự chân thành.",
    },
    {
      title: "Kết nối",
      text: "Những cuộc trò chuyện, ý tưởng và cảm hứng mới.",
    },
    {
      title: "Tiếp tục hành trình",
      text: "From where you are, To where you want to be.",
    },
  ];

  return (
    <section className="bg-white py-24" id="journey">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)]">
            Journey
          </p>

          <h2 className="mt-5 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Hành trình của một ly cà phê
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 opacity-75">
            Từ Đến Coffee tin rằng mỗi ly cà phê không chỉ là một thức uống,
            mà còn là điểm khởi đầu cho những câu chuyện, ý tưởng và hành trình
            mới.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[#C96A2B]/15 bg-[#FDF9F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#C96A2B] text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 opacity-75">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}