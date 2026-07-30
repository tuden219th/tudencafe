const values = [
  {
    number: "01",
    title: "Chân thành, từ lời chào đầu tiên",
    description:
      "Pha một ly cà phê tử tế, lắng nghe đủ lâu và nói điều mình thực sự có thể làm cho khách.",
  },
  {
    number: "02",
    title: "Đơn giản để bạn thấy dễ chịu",
    description:
      "Từ menu, không gian đến cách phục vụ — mọi thứ đều rõ ràng, vừa đủ và không làm bạn phải nghĩ nhiều.",
  },
  {
    number: "03",
    title: "Tử tế với từng chi tiết nhỏ",
    description:
      "Một chiếc bàn sạch, một góc ngồi yên, một ly nước đúng gu: những điều nhỏ làm nên cảm giác được quan tâm.",
  },
  {
    number: "04",
    title: "Luôn học từ mỗi cuộc gặp",
    description:
      "Chúng tôi lắng nghe góp ý, học thêm về cà phê và điều chỉnh từng ngày để phục vụ tốt hơn.",
  },
  {
    number: "05",
    title: "Không ngại làm tốt hơn",
    description:
      "Một công thức, một quy trình hay cả website đều có thể được cải thiện khi có cách làm hữu ích hơn.",
  },
  {
    number: "06",
    title: "Chất lượng là một thói quen",
    description:
      "Không chỉ ở hạt cà phê, mà trong mọi lần chuẩn bị, mọi cuộc trò chuyện và mọi trải nghiệm tại Từ Đến.",
  },
];

export default function CoreValues() {
  return (
    <section className="overflow-hidden bg-[#294A3A] py-20 text-[#F9F3E9] md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#E8B27B]">
              Điều chúng tôi giữ
            </p>

            <h2 className="mt-5 max-w-lg font-[var(--font-playfair)] text-4xl leading-[1.04] md:text-6xl">
              Không chỉ là điều chúng tôi tin.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#F9F3E9]/75">
              Đây là cách Từ Đến chọn phục vụ mỗi ngày — để một lần ghé quán cũng để lại cảm giác đáng nhớ.
            </p>

            <p className="mt-10 hidden font-[var(--font-playfair)] text-2xl italic text-[#E8B27B] lg:block">
              Nhỏ thôi, nhưng làm đến nơi.
            </p>
          </div>

          <ol className="border-t border-[#F9F3E9]/20">
            {values.map((value) => (
              <li
                key={value.number}
                className="group grid grid-cols-[3rem_1fr] gap-3 border-b border-[#F9F3E9]/20 py-6 transition-colors duration-300 md:grid-cols-[4.5rem_1fr] md:gap-6 md:py-8 lg:hover:bg-white/[0.04]"
              >
                <span className="pt-1 font-[var(--font-playfair)] text-lg text-[#E8B27B] md:text-xl">
                  {value.number}
                </span>

                <div>
                  <h3 className="font-[var(--font-playfair)] text-2xl leading-tight md:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#F9F3E9]/70 md:text-base">
                    {value.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12 font-[var(--font-playfair)] text-xl italic text-[#E8B27B] lg:hidden">
          Nhỏ thôi, nhưng làm đến nơi.
        </p>
      </div>
    </section>
  );
}
