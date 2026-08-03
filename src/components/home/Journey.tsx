const steps = [
  {
    number: "01",
    title: "Dừng lại",
    text: "Một khoảng lặng để hít thở, đặt chiếc điện thoại xuống và trở về với chính mình.",
  },
  {
    number: "02",
    title: "Thưởng thức",
    text: "Một ly cà phê được pha chỉn chu — đủ chậm để cảm nhận, đủ ngon để nhớ.",
  },
  {
    number: "03",
    title: "Kết nối",
    text: "Một cuộc trò chuyện, một ý tưởng, hay đơn giản là ngồi cạnh người mình quý.",
  },
  {
    number: "04",
    title: "Đi tiếp",
    text: "Rời quán với một chút năng lượng mới cho hành trình phía trước.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="overflow-hidden bg-[#FFFCF8] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--primary)]">
            Bốn nhịp ở Từ Đến
          </p>

          <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-[1.05] md:text-5xl">
            Một ly cà phê,
            <br className="hidden md:block" />
            {" "}
            một hành trình nhỏ.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#3B2416]/70 md:text-base">
            Có những ngày ta không cần một điều gì quá lớn — chỉ cần một nơi để
            dừng, nạp lại năng lượng và đi tiếp.
          </p>
        </div>

        <ol className="relative mx-auto mt-12 max-w-5xl md:mt-16 md:grid md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute bottom-10 left-9 top-10 w-px bg-[#C96A2B]/25 md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-7 md:h-px md:w-auto"
          />

          {steps.map((step) => (
            <li
              key={step.number}
              className="relative grid grid-cols-[4.5rem_1fr] gap-4 py-6 last:pb-20 md:block md:p-0"
            >
              <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[#C96A2B]/25 bg-[#FFFCF8] font-[var(--font-playfair)] text-xl text-[var(--primary)] md:mx-auto md:h-14 md:w-14 md:bg-[#C96A2B] md:text-white">
                {step.number}
              </span>

              <div className="pt-1 md:mt-8 md:text-center">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#3B2416]/45 md:hidden">
                  ---------------------
                </p>

                <h3 className="font-[var(--font-playfair)] text-[1.7rem] leading-tight md:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-sm text-[15px] leading-7 text-[#3B2416]/70 md:mx-auto">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

      <p className="mt-6 flex flex-col items-center text-xl italic text-[var(--primary)]">
        <span>
          From where you are,
        </span>

        <span className="translate-x-4">
          To where you want to be.
        </span>
      </p>
      
      </div>
    </section>
  );
}