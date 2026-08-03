export default function CategoryNav() {
  const categories = [
    "Tất cả",
    "AI",
    "Điện thoại",
    "Máy tính",
    "Apple",
    "Android",
    "Gaming",
    "Camera",
    "Internet",
    "Khoa học",
  ];

  return (
    <section className="mt-8">

      <div
        className="
          flex
          items-center
          gap-3
          overflow-x-auto
          rounded-xl
          bg-white
          border
          border-[#e8e8e8]
          px-5
          py-4
        "
      >

        {categories.map((item, index) => (
          <button
            key={item}
            className={`
              shrink-0
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              transition

              ${
                index === 0
                  ? "bg-[#202124] text-white"
                  : "bg-[#f1f3f4] text-[#444]"
              }
            `}
          >
            {item}
          </button>
        ))}

      </div>

    </section>
  );
}