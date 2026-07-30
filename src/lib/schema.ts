export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Từ Đến Cafe",
  alternateName: "Từ Đến Coffee",

  url: "https://tudencafe.com",

  logo: "https://tudencafe.com/images/Logo.png",

  image: "https://tudencafe.com/og-image.jpg",

  description:
    "Từ Đến Cafe là quán cà phê tại 219 Tô Hiệu, Cầu Giấy, Hà Nội. Không gian dành cho học tập, làm việc và kết nối.",

  telephone: "+84972516250",

  email: "hello@tudencafe.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "219 Tô Hiệu",
    addressLocality: "Cầu Giấy",
    addressRegion: "Hà Nội",
    postalCode: "100000",
    addressCountry: "VN",
  },

  sameAs: [
    "https://www.facebook.com/TudenCafe",
    "https://www.instagram.com/atx171",
    "https://zalo.me/0972516250",
    "https://maps.app.goo.gl/QMD2MBb9AGcSVPUx9",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Từ Đến Cafe",

  url: "https://tudencafe.com",

  inLanguage: "vi-VN",

  publisher: {
    "@type": "Organization",
    name: "Từ Đến Cafe",
  },
};

export const cafeSchema = {
  "@context": "https://schema.org",

  "@type": "CafeOrCoffeeShop",

  name: "Từ Đến Cafe",

  image: "https://tudencafe.com/og-image.jpg",

  url: "https://tudencafe.com",

  telephone: "+84972516250",

  servesCuisine: "Coffee",

  priceRange: "$",

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "22:00",
  },

  address: {
    "@type": "PostalAddress",
    streetAddress: "219 Tô Hiệu",
    addressLocality: "Cầu Giấy",
    addressRegion: "Hà Nội",
    postalCode: "100000",
    addressCountry: "VN",
  },
};

export const schemas = [
  organizationSchema,
  websiteSchema,
  cafeSchema,
];
