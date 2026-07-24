import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tudencafe.com"),

  title: {
    default: "Từ Đến Coffee",
    template: "%s | Từ Đến Coffee",
  },

  description:
    "From where you are, To where you want to be.",

  keywords: [
    "Từ Đến Coffee",
    "Từ Đến",
    "Coffee",
    "Cafe Hà Nội",
    "Specialty Coffee",
    "From where you are",
  ],

  authors: [
    {
      name: "Từ Đến Coffee",
    },
  ],

  creator: "Từ Đến Coffee",

  openGraph: {
    title: "Từ Đến Coffee",
    description:
      "From where you are, To where you want to be.",
    url: "https://tudencafe.com",
    siteName: "Từ Đến Coffee",
    locale: "vi_VN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Từ Đến Coffee",
    description:
      "From where you are, To where you want to be.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geist.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}