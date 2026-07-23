import type { Metadata } from "next";
import { Fraunces, Be_Vietnam_Pro } from "next/font/google";
import Header from "./components/Header.tsx";
import "./globals.css";

// Display serif — dùng cho wordmark và tiêu đề toàn bộ thương hiệu
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Body sans — thiết kế riêng cho dấu tiếng Việt, dùng cho toàn bộ nội dung
const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Từ Đến Cafe | From Where You Are To Where You Want To Be",
  description:
    "Từ Đến Cafe - Một góc nhỏ cho cà phê, câu chuyện và những hành trình mới.",

  openGraph: {
    title: "Từ Đến Cafe",
    description: "From Where You Are To Where You Want To Be",
    url: "https://tudencafe.com",
    siteName: "Từ Đến Cafe",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Từ Đến Cafe",
              "description":
                "Từ Đến Cafe - Một góc nhỏ cho cà phê, câu chuyện và những hành trình mới.",
              "url": "https://tudencafe.com",
              "telephone": "0972516250",

              "address": {
                "@type": "PostalAddress",
                "streetAddress": "219 Tô Hiệu",
                "addressLocality": "Hà Nội",
                "addressCountry": "VN",
              },

              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  "opens": "07:00",
                  "closes": "22:30",
                },
              ],

              "priceRange": "25.000đ - 50.000đ",

              "sameAs": ["https://www.facebook.com/TudenCafe"],
            }),
          }}
        />
      </body>
    </html>
  );
}