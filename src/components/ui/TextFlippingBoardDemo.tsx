"use client";

import { useEffect, useState } from "react";
import TextFlippingBoard from "@/components/ui/TextFlippingBoard";

const INTERVAL = 6000;

const MESSAGES = [
  "TỪ NƠI BẠN ĐANG ĐỨNG\nĐẾN NƠI BẠN MUỐN ĐI",

  "MỘT LY CÀ PHÊ\nMỘT CÂU CHUYỆN",

  "CHẬM LẠI MỘT CHÚT\nĐỂ CẢM NHẬN NHIỀU HƠN",

  "MỖI NGÀY MỘT BƯỚC NHỎ\nMỖI HÀNH TRÌNH MỘT Ý NGHĨA",

  "HÔM NAY BẠN Ở ĐÂU?\nNGÀY MAI BẠN MUỐN ĐẾN ĐÂU?",
];

type TextFlippingBoardDemoProps = {
  className?: string;
  interval?: number;
};

export default function TextFlippingBoardDemo({
  className = "",
  interval = INTERVAL,
}: TextFlippingBoardDemoProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [interval]);

  return (
    <div className={className}>
      <TextFlippingBoard text={MESSAGES[index]} />
    </div>
  );
}