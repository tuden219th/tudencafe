export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Từ Đến Cafe",
  alternateName: "Từ Đến Coffee",

  url: "https://tudencafe.com",

  logo: "https://tudencafe.com/images/logo.png",

  image: "https://tudencafe.com/og-image.jpg",

  description:
    "Từ Đến Cafe là quán cà phê tại 219 Tô Hiệu, Cầu Giấy, Hà Nội. Không gian dành cho học tập, làm việc và kết nối.",

  telephone: "+84981815219",

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
    // Thêm sau
    // "https://facebook.com/...",
    // "https://instagram.com/...",
    // "https://maps.google.com/...",
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

  telephone: "+84981815219",

  servesCuisine: "Coffee",

  priceRange: "$",

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