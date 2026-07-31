import features from "./heroData";

export default function HeroFeatures() {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        gap-3
      "
    >
      {features.map((item) => (
        <div
          key={item.title}
          className="
            flex
            items-center
            gap-2

            rounded-full
            border
            border-[#DED4C8]

            bg-white/70

            px-4
            py-2

            backdrop-blur
          "
        >
          <span>{item.icon}</span>

          <span
            className="
              text-sm
              font-medium
            "
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}