const stories = [
  "Từ Đến Fact",
  "AI",
  "Apple",
  "Android",
  "Windows",
  "Review",
  "Xe",
];

export default function Stories() {
  return (
    <section className="border-y border-[#e8e3dc]">
      <div className="flex items-center overflow-x-auto scrollbar-hide">
        {stories.map((story, index) => (
          <button
            key={story}
            type="button"
            className={`
              relative
              shrink-0
              px-4
              py-3
              text-sm
              font-medium
              whitespace-nowrap
              transition
              sm:px-5
              ${
                index === 0
                  ? "font-semibold text-[#C96A2B]"
                  : "text-[#444] hover:text-[#C96A2B]"
              }
            `}
          >
            {story}

            {index === 0 && (
              <span className="absolute inset-x-4 bottom-0 h-[2px] bg-[#C96A2B] sm:inset-x-5" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}