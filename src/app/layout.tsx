import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { schemas } from "@/lib/schema";


const montserrat = Montserrat({
  subsets: ["vietnamese"],
  variable: "--font-montserrat",
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
});


const dancing = Dancing_Script({
  subsets: ["vietnamese"],
  variable: "--font-logo",
  weight: [
    "600",
    "700",
  ],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://tudencafe.com"),

  title: {
    default: "Từ Đến Coffee | From where you are, To where you want to be",
    template: "%s | Từ Đến Coffee",
  },

  description:
    "Từ Đến Coffee - Một góc nhỏ cho những hành trình lớn. Cà phê, không gian và những câu chuyện kết nối tại Hà Nội.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Từ Đến Coffee",
    "Từ Đến",
    "Tuden Cafe",
    "Coffee Hà Nội",
    "Cafe Hà Nội",
    "Cafe Nghĩa Đô",
    "Cafe Tô Hiệu",
    "Specialty Coffee",
  ],

  authors: [
    {
      name: "Từ Đến Coffee",
    },
  ],

  creator: "Từ Đến Coffee",

  openGraph: {
    title: "Từ Đến Coffee | From where you are, To where you want to be",

    description:
      "Một góc nhỏ cho những hành trình lớn.",

    url: "https://tudencafe.com",

    siteName: "Từ Đến Coffee",

    locale: "vi_VN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Từ Đến Coffee",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Từ Đến Coffee",

    description:
      "Một góc nhỏ cho những hành trình lớn.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Coffee shop",

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
        className={`
          ${montserrat.variable}
          ${dancing.variable}
        `}
      >

        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}


        <AuthProvider>

          <CartProvider>

            {children}

          </CartProvider>

        </AuthProvider>


      </body>

    </html>
  );
}