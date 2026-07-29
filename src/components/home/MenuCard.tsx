import { MenuItem } from "@/data/menu";

type Props = {
  item: MenuItem;
};

export default function MenuCard({ item }: Props) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-neutral-200
        bg-white
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* IMAGE */}

      <div className="relative h-56 bg-[#F2ECE4]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />

        {item.tags.length > 0 && (
          <span
            className="
              absolute
              top-4
              left-4
              rounded-full
              bg-[var(--primary)]
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            {item.tags[0]}
          </span>
        )}
      </div>

      {/* CONTENT */}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl">
            {item.name}
          </h3>

          <span
            className="
              font-semibold
              text-[var(--primary)]
            "
          >
            {item.price.toLocaleString()}đ
          </span>

        </div>

        <p
          className="
            mt-4
            text-sm
            opacity-70
            min-h-[48px]
          "
        >
          {item.description}
        </p>

        {/* Độ đậm */}

        <div className="mt-6">

          <div className="mb-1 flex justify-between text-sm">
            <span>Độ đậm</span>
            <span>{item.strength}/5</span>
          </div>

          <div className="h-2 rounded-full bg-neutral-200">
            <div
              className="h-2 rounded-full bg-[var(--secondary)]"
              style={{
                width: `${item.strength * 20}%`,
              }}
            />
          </div>

        </div>

        {/* Độ ngọt */}

        <div className="mt-4">

          <div className="mb-1 flex justify-between text-sm">
            <span>Độ ngọt</span>
            <span>{item.sweetness}/5</span>
          </div>

          <div className="h-2 rounded-full bg-neutral-200">
            <div
              className="h-2 rounded-full bg-[var(--primary)]"
              style={{
                width: `${item.sweetness * 20}%`,
              }}
            />
          </div>

        </div>

        <button
          className="
            mt-8
            w-full
            rounded-full
            bg-[var(--secondary)]
            py-3
            text-white
            transition
            hover:opacity-90
          "
        >
          Đặt ngay
        </button>

      </div>
    </article>
  );
}