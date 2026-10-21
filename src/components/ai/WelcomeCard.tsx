"use client";

import { motion } from "framer-motion";
import { Coffee, Croissant, Wifi, MapPin, Sparkles, ChevronRight } from "lucide-react";

type Props = {
  onSelectPrompt: (prompt: string) => void;
};

const SUGGESTIONS = [
  {
    icon: Coffee,
    title: "Tư vấn đồ uống hợp gu",
    subtitle: "Espresso đậm đà, latte art hay trà thảo mộc",
    prompt: "Tư vấn cho mình một món đồ uống đặc sắc tại Từ Đến phù hợp với gu cà phê đậm đà.",
  },
  {
    icon: Croissant,
    title: "Menu bánh ngọt hôm nay",
    subtitle: "Donut, bánh mì nướng & đồ ăn nhẹ",
    prompt: "Hôm nay quán có những loại bánh và đồ ăn nhẹ nào ăn kèm cà phê ngon nhất?",
  },
  {
    icon: Wifi,
    title: "Chỗ ngồi & Wi-Fi làm việc",
    subtitle: "Yên tĩnh, bàn rộng, nhiều ổ cắm",
    prompt: "Quán có chỗ ngồi yên tĩnh để làm việc, cắm laptop và wifi mạnh không?",
  },
  {
    icon: MapPin,
    title: "Địa chỉ & Giờ mở cửa",
    subtitle: "219 Tô Hiệu • 7:00 - 22:00 hàng ngày",
    prompt: "Địa chỉ cụ thể của quán Từ Đến ở đâu và quán mở cửa đến mấy giờ?",
  },
];

export default function WelcomeCard({ onSelectPrompt }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 w-full my-1.5"
    >
      {/* Intro greeting aligned with standard AI message rhythm */}
      <div className="flex items-start gap-3">
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3D2518] to-[#1F140E] text-white shadow-xs ring-1 ring-[#D8B996]/60">
          <Coffee className="h-4 w-4 text-[#F5DEBE]" />
        </div>

        <div
          style={{ padding: "18px 22px", borderRadius: "14px", borderTopLeftRadius: "4px" }}
          className="min-w-0 flex-1 border border-[#E8DAC8] bg-[#FFFDF9] shadow-[0_4px_16px_rgba(42,29,21,0.04)]"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[12px] font-bold text-[#C96A2B] tracking-tight">
              AI Barista Từ Đến
            </span>
            <Sparkles className="h-3 w-3 text-amber-500" />
          </div>

          <h3 className="text-[16px] font-bold text-[#2A1D15] leading-snug">
            Chào bạn! Mình có thể giúp gì cho bạn hôm nay? ☕
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[#5C4234]">
            Rất vui được đón tiếp bạn. Mình luôn sẵn sàng gợi ý đồ uống hợp gu, cập nhật bánh tươi và chỗ ngồi làm việc lý tưởng tại Từ Đến Coffee.
          </p>

          <p className="mt-3.5 text-[11.5px] font-bold text-[#8C6D58] uppercase tracking-wider">
            Gợi ý câu hỏi nhanh:
          </p>

          {/* Clean vertical list of prompt cards */}
          <div className="mt-2 flex flex-col gap-2">
            {SUGGESTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => onSelectPrompt(item.prompt)}
                  style={{ padding: "9px 13px", borderRadius: "10px" }}
                  className="group flex items-center justify-between border border-[#EDE2D3] bg-[#FAF5EE]/70 text-left transition-all hover:border-[#C96A2B] hover:bg-white hover:shadow-xs active:scale-[0.99]"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      style={{ borderRadius: "8px" }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center bg-white border border-[#E6D4BF] text-[#C96A2B] shadow-2xs group-hover:bg-[#C96A2B] group-hover:text-white group-hover:border-[#C96A2B] transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-bold text-[#2A1D15] group-hover:text-[#C96A2B] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11.5px] text-[#7E6351] truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#A88B77] group-hover:text-[#C96A2B] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
