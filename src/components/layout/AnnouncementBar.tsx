"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("tuden_announcement_dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("tuden_announcement_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      role="banner"
      aria-label="Thông báo góc thanh lý"
      className="
        relative
        z-50
        w-full
        bg-gradient-to-r
        from-[#7A320C]
        via-[#C96A2B]
        to-[#662808]
        text-white
        border-b
        border-white/15
        shadow-sm
        transition-all
        duration-300
      "
      style={{ padding: "9px 16px" }}
    >
      <div
        className="
          mx-auto
          max-w-7xl
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* Nội dung thông báo và Link */}
        <a
          href="https://thanhly.tudencafe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            flex-1
            items-center
            justify-center
            gap-3
            sm:gap-4
            hover:opacity-95
            transition-opacity
            text-center
            overflow-hidden
          "
        >
          {/* Badge có độ thở rộng rãi */}
          <span
            className="
              inline-flex
              items-center
              shrink-0
              bg-white/20
              backdrop-blur-sm
              border
              border-white/30
              text-amber-100
              shadow-inner
              transition-transform
              duration-300
            "
            style={{
              padding: "5px 14px",
              borderRadius: "9999px",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: 1.2,
              gap: "7px",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
            <span className="whitespace-nowrap tracking-wide">Góc thanh lý</span>
          </span>

          {/* Dòng thông điệp */}
          <span
            className="text-white/95 truncate sm:overflow-visible"
            style={{
              fontSize: "13.5px",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            Săn đồ dùng được với giá hợp lý.
          </span>

          {/* Nút Call To Action thoáng đãng, sang trọng */}
          <span
            className="
              inline-flex
              items-center
              justify-center
              shrink-0
              bg-white
              text-[#8B3A14]
              shadow-sm
              transition-all
              duration-300
              group-hover:bg-[#F5EBDD]
              group-hover:scale-105
              group-hover:shadow-md
            "
            style={{
              padding: "7px 20px",
              borderRadius: "9999px",
              fontSize: "12.5px",
              fontWeight: 700,
              lineHeight: 1.2,
              gap: "8px",
            }}
          >
            <span className="whitespace-nowrap">Khám phá ngay</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </span>
        </a>

        {/* Nút đóng */}
        <button
          onClick={handleDismiss}
          type="button"
          aria-label="Đóng thông báo"
          className="
            shrink-0
            rounded-full
            p-1.5
            text-white/70
            hover:text-white
            hover:bg-white/10
            transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-white/30
          "
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
