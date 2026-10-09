"use client";

type Props = {
  onSelect: (text: string) => void;
};

const suggestions = [
  {
    icon: "☕",
    title: "Tư vấn cà phê",
    desc: "Tìm món hợp khẩu vị",
    prompt: "Tư vấn cho tôi một ly cà phê phù hợp với người thích vị đậm đà.",
  },
  {
    icon: "🥐",
    title: "Bánh & Đồ ăn",
    desc: "Món ăn nhẹ kèm cafe",
    prompt: "Quán Từ Đến có những loại bánh và đồ ăn nhẹ nào?",
  },
  {
    icon: "📶",
    title: "Không gian & Wifi",
    desc: "Chỗ ngồi làm việc",
    prompt: "Quán có không gian yên tĩnh để làm việc và wifi mạnh không?",
  },
  {
    icon: "📍",
    title: "Địa chỉ & Giờ mở cửa",
    desc: "Chỉ đường đến quán",
    prompt: "Địa chỉ cụ thể và khung giờ mở cửa của quán Từ Đến thế nào?",
  },
];

export default function SuggestionCards({ onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {suggestions.map((item) => (
        <button
          key={item.title}
          onClick={() => onSelect(item.prompt)}
          className="group flex flex-col items-start rounded-2xl border border-[#EADBCC] bg-white/90 p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C96A2B] hover:bg-white hover:shadow-sm active:translate-y-0 active:scale-[0.98]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FAF3EC] text-lg transition-transform group-hover:scale-110">
            {item.icon}
          </div>

          <div className="mt-2 font-semibold text-[13px] text-[#3B2416] group-hover:text-[#C96A2B]">
            {item.title}
          </div>

          <div className="mt-0.5 text-[11px] text-[#8B7765] line-clamp-1">
            {item.desc}
          </div>
        </button>
      ))}
    </div>
  );
}