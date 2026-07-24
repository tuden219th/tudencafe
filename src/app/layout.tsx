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
    default:
      "Từ Đến Coffee | From where you are, To where you want to be",

    template:
      "%s | Từ Đến Coffee",
  },


  description:
    "Từ Đến Coffee - Một góc nhỏ cho những hành trình lớn. Cà phê, không gian và những câu chuyện kết nối tại Hà Nội.",



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



  creator:
    "Từ Đến Coffee",




  openGraph: {

    title:
      "Từ Đến Coffee | From where you are, To where you want to be",


    description:
      "Một góc nhỏ cho những hành trình lớn.",


    url:
      "https://tudencafe.com",


    siteName:
      "Từ Đến Coffee",


    locale:
      "vi_VN",


    type:
      "website",



    images: [
      {
        url:
          "/og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Từ Đến Coffee",
      },
    ],

  },




  twitter: {

    card:
      "summary_large_image",


    title:
      "Từ Đến Coffee",


    description:
      "Một góc nhỏ cho những hành trình lớn.",


    images:
      [
        "/og-image.jpg"
      ],

  },





  robots: {

    index:
      true,

    follow:
      true,

  },




  icons: {

    icon:
      "/favicon.ico",

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