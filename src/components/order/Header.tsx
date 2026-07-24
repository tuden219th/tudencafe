type HeaderProps = {
  tableId: string;
};

export default function Header({ tableId }: HeaderProps) {
  return (
    <header className="mb-8">

      <div className="inline-flex items-center rounded-full bg-[#FFF7EF] px-4 py-2 text-sm font-medium text-[#C96A2B] border border-[#E9DDCF]">
        ☕ Từ Đến Coffee
      </div>

      <h1 className="mt-5 font-[var(--font-playfair)] text-5xl leading-none">
        Bàn {tableId}
      </h1>

      <p className="mt-3 text-[#7B6B60] leading-7">
        From where you are,
        <br />
        To where you want to be.
      </p>

    </header>
  );
}