"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Thêm tab mới ở đây sau này (Câu chuyện, Không gian, ...) khi các route đó đã có
const TABS = [
  { href: "/", label: "Trang chủ" },
  { href: "/brand-guidelines", label: "Brand Guidelines", cta: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="td-header">
      <div className="td-header-bar">
        <Link href="/" className="td-logo">
          từ <span className="td-accent">đến</span>
        </Link>

        <nav className="td-nav">
          {TABS.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={[
                  "td-tab",
                  tab.cta ? "td-tab-cta" : "",
                  active ? "td-tab-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}