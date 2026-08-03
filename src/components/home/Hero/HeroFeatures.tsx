import Card from "@/components/ui/Card";
import features from "./heroData";

export default function HeroFeatures() {
  return (
    <div
      className="
        mt-10
        grid
        gap-4

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {features.map((item) => (
        <Card
          key={item.title}
          className="
            flex
            items-start
            gap-4

            p-5

            transition-transform
            duration-300

            hover:-translate-y-1
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center

              rounded-full

              bg-[var(--surface-soft)]

              text-2xl
            "
          >
            {item.icon}
          </div>

          <div>
            <h3
              className="
                text-base
                font-semibold
                text-[var(--foreground)]
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2

                text-sm
                leading-6

                text-[var(--text-light)]
              "
            >
              {item.subtitle}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}