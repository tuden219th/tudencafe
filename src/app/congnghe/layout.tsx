import type { Metadata } from "next";
import { technologySchema } from "@/lib/schema";


export const metadata: Metadata = {
  title: "Công nghệ | Từ Đến",

  description:
    "Cập nhật kiến thức công nghệ, AI, thiết bị số và những xu hướng công nghệ mới.",

  alternates: {
    canonical:
      "https://tudencafe.com/congnghe",
  },

  openGraph: {
    title:
      "Công nghệ | Từ Đến",

    description:
      "Cập nhật kiến thức công nghệ, AI, thiết bị số và xu hướng mới.",

    url:
      "https://tudencafe.com/congnghe",

    siteName:
      "Từ Đến Cafe",

    locale:
      "vi_VN",

    type:
      "website",
  },
};


export default function CongNgheLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(technologySchema),
        }}
      />

      {children}
    </>
  );
}