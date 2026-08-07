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
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {categories.map((item, index) => {
          const active = index === 0;

          return (
            <button
              key={item}
              type="button"
              className={`
                shrink-0
                rounded-full
                px-5
                py-2.5
                text-sm
                font-medium
                transition
                ${
                  active
                    ? "bg-[#202124] text-white"
                    : "border border-[#e8e8e8] bg-white text-[#444] hover:bg-[#f5f6f7]"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
}