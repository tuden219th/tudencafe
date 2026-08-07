import type { Metadata } from "next";

import Navbar from "@/components/technology/Navbar";
import Stories from "@/components/technology/Stories";
import Hero from "@/components/technology/Hero";
import CategoryNav from "@/components/technology/CategoryNav";
import LatestArticles from "@/components/technology/LatestArticles";
import TechnologyFooter from "@/components/technology/TechnologyFooter";

export const metadata: Metadata = {
  title: "Tin Công nghệ | Từ Đến Coffee",

  description:
    "Cập nhật tin tức công nghệ, AI, Apple, Android, Windows và những xu hướng mới nhất từ Từ Đến Coffee.",

  alternates: {
    canonical: "https://tudencafe.com/congnghe",
  },

  openGraph: {
    title: "Tin Công nghệ | Từ Đến Coffee",

    description:
      "Cập nhật tin tức công nghệ, AI, Apple, Android, Windows và những xu hướng mới nhất.",

    url: "https://tudencafe.com/congnghe",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tin Công nghệ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Tin Công nghệ | Từ Đến Coffee",

    description:
      "Cập nhật tin tức công nghệ, AI và thiết bị số mới nhất.",

    images: ["/og-image.jpg"],
  },
};

export default function CongNghePage() {
  return (
    <main>
      <Navbar />

      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          py-6
          sm:px-5
          lg:px-10
        "
      >
        <Stories />

        <Hero />

        <CategoryNav />

        <LatestArticles />

        <TechnologyFooter />
      </div>
    </main>
  );
}