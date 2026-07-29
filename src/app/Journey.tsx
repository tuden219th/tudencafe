export default function Journey() {
  return (
    <section className="bg-[#F5EBDD] py-24">
      <div className="container max-w-4xl text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)]">
          Hành trình
        </p>

        <h2 className="mt-4 font-[var(--font-playfair)] text-4xl md:text-5xl leading-tight">
          Mỗi hành trình
          <br />
          đều bắt đầu từ một điểm.
        </h2>

        <div className="mt-12 space-y-8 text-lg leading-9 opacity-80">
          <p>
            Từ Đến Cafe không chỉ được xây dựng để bán cà phê.
          </p>

          <p>
            Chúng tôi mong muốn tạo ra một không gian nơi mọi người có thể học
            tập, làm việc, gặp gỡ và dành cho mình một khoảng lặng giữa những
            bộn bề của cuộc sống.
          </p>

          <p>
            Website này cũng là một phần của hành trình ấy.
          </p>

          <p>
            Mỗi dòng code, mỗi bài viết, mỗi tính năng đều được xây dựng từng
            bước với mong muốn mang lại trải nghiệm tốt hơn cho khách hàng.
          </p>

          <p className="font-[var(--font-playfair)] text-2xl text-[var(--primary)]">
            From where you are,
            <br />
            To where you want to be.
          </p>
        </div>
      </div>
    </section>
  );
}