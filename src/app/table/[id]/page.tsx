type Props = {
  params: Promise<{
    id: string;
  }>;
};

const menu = [
  { id: 1, name: "Đen đá", price: 25000 },
  { id: 2, name: "Nâu đá", price: 25000 },
  { id: 3, name: "Bạc xỉu", price: 30000 },
  { id: 4, name: "Cà phê cốt dừa", price: 35000 },
  { id: 5, name: "Americano", price: 35000 },
  { id: 6, name: "Latte", price: 40000 },
];

export default async function TablePage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#F5EBDD] text-[#3B2416]">
      <div className="mx-auto max-w-md p-6">

        <p className="text-sm uppercase tracking-[0.4em] text-[#C96A2B]">
          Từ Đến Coffee
        </p>

        <h1 className="mt-2 font-[var(--font-playfair)] text-4xl">
          Bàn {id}
        </h1>

        <p className="mt-3 text-[#6B5B4D]">
          From where you are,
          <br />
          To where you want to be.
        </p>

        <div className="mt-10 space-y-4">

          {menu.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[#C96A2B] font-semibold">
                    {item.price.toLocaleString("vi-VN")}đ
                  </p>
                </div>

                <button
                  className="
                    rounded-full
                    bg-[#6B8E23]
                    px-5
                    py-2
                    text-white
                  "
                >
                  +
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}