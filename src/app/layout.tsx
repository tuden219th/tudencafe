import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Từ Đến Cafe | From Where You Are To Where You Want To Be",
  description:
    "Từ Đến Cafe - Một góc nhỏ cho cà phê, câu chuyện và những hành trình mới.",

  openGraph: {
    title: "Từ Đến Cafe",
    description:
      "From Where You Are To Where You Want To Be",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}