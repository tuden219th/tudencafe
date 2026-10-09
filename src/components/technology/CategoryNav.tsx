const categories = [
  "Tất cả",
  "AI",
  "Chuyển đổi số",
  "ERP",
  "Data",
  "Phần mềm",
  "Internet",
  "Thiết bị",
  "Gaming",
  "Góc nhìn",
];

export default function CategoryNav() {
  return (
    <section className="mt-8 border-y border-[#e8e3dc]">
      <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => {
          const active = index === 0;

          return (
            <button
              key={category}
              type="button"
              className={`
                relative
                shrink-0
                px-4
                py-4
                text-sm
                font-medium
                transition
                sm:px-5
                ${
                  active
                    ? "text-[#C96A2B]"
                    : "text-[#444] hover:text-[#C96A2B]"
                }
              `}
            >
              {category}

              {active && (
                <span
                  className="
                    absolute
                    inset-x-4
                    bottom-0
                    h-[2px]
                    bg-[#C96A2B]
                    sm:inset-x-5
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}