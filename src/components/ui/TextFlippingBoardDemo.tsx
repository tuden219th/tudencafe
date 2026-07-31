"use client";

import { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/TextFlippingBoard";

const MESSAGES: string[] = [
  "TỪ NƠI BẠN ĐANG ĐỨNG\nĐẾN NƠI BẠN MUỐN ĐI",
  "MỘT LY CÀ PHÊ\nMỘT CÂU CHUYỆN",
  "CHẬM LẠI MỘT CHÚT\nĐỂ CẢM NHẬN NHIỀU HƠN",
  "MỖI NGÀY MỘT BƯỚC NHỎ\nMỖI HÀNH TRÌNH MỘT Ý NGHĨA",
  "HÔM NAY BẠN Ở ĐÂU?\nNGÀY MAI BẠN MUỐN ĐẾN ĐÂU?",
];

export function TextFlippingBoardDemo() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(() => {
    setMsgIdx((i) => (i + 1) % MESSAGES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 6000);

    return () => clearInterval(id);
  }, [next]);

  return (
    <div
      className="
        mt-8
        flex
        w-full
        justify-start
      "
    >
      <TextFlippingBoard text={MESSAGES[msgIdx]} />
    </div>
  );
}