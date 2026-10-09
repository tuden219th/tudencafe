"use client";

type Props = {
  onSelect: (text: string) => void;
};

const suggestions = [
  {
    icon: "☕",
    label: "Tư vấn cà phê",
    prompt: "Tư vấn cho tôi một ly cà phê phù hợp với người thích vị đậm đà.",
  },
  {
    icon: "🥐",
    label: "Bánh & Đồ ăn nhẹ",
    prompt: "Quán Từ Đến có những loại bánh và đồ ăn nhẹ nào?",
  },
  {
    icon: "📶",
    label: "Wifi & Chỗ ngồi",
    prompt: "Quán có không gian yên tĩnh để làm việc và wifi mạnh không?",
  },
  {
    icon: "📍",
    label: "Địa chỉ & Giờ mở",
    prompt: "Địa chỉ cụ thể và khung giờ mở cửa của quán Từ Đến thế nào?",
  },
];

export default function SuggestionCards({ onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 w-full pt-1">
      {suggestions.map((item) => (
        <button
          key={item.label}
          onClick={() => onSelect(item.prompt)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#E5DAD0] bg-white px-3.5 py-2 text-left text-[13px] font-medium text-[#3B2416] shadow-xs transition-all duration-200 hover:border-[#D47A3D] hover:bg-[#FFF8F3] hover:text-[#D47A3D] active:scale-95"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}