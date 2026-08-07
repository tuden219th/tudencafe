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
    <section className="mb-6">
      <div className="mb-3">
        <h2
          className="
            text-sm
            font-bold
            tracking-tight
            text-[#202124]
          "
        >
          Từ Đến Fact
        </h2>
      </div>

      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-1
          scrollbar-hide
        "
      >
        {stories.map((story) => (
          <button
            key={story.id}
            type="button"
            className="
              flex
              min-w-[72px]
              flex-col
              items-center
              transition
              hover:opacity-80
            "
          >
            <div
              className="
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center
                rounded-full
              "
              style={{
                backgroundColor: story.color,
              }}
            >
              <div
                className="
                  h-[56px]
                  w-[56px]
                  rounded-full
                  border-[3px]
                  border-white
                  bg-[#F5EBDD]
                "
              />
            </div>

            <span
              className="
                mt-2
                text-[12px]
                font-medium
                text-[#444]
              "
            >
              {story.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}