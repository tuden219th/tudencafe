"use client";

const stories = [
  {
    id: 1,
    title: "AI",
    color: "#6C5CE7",
  },
  {
    id: 2,
    title: "Apple",
    color: "#2D3436",
  },
  {
    id: 3,
    title: "Android",
    color: "#00B894",
  },
  {
    id: 4,
    title: "Windows",
    color: "#0984E3",
  },
  {
    id: 5,
    title: "Review",
    color: "#E17055",
  },
  {
    id: 6,
    title: "Xe",
    color: "#D63031",
  },
];

export default function Stories() {
  return (
    <section className="py-3 md:py-8">
      <h2 className="mb-3 md:mb-5 text-[20px] font-bold text-[#202124]">
        Từ Đến Fact
      </h2>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex min-w-[82px] flex-col items-center"
          >
            <div
              className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
              style={{
                background: story.color,
              }}
            >
              <div className="h-[62px] w-[62px] rounded-full border-[3px] border-white bg-white" />
            </div>

            <span className="mt-3 text-[13px] font-medium text-[#444]">
              {story.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}