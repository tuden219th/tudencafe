export type MenuCategory =
  | "vietnamese"
  | "espresso"
  | "coldbrew";

export interface MenuItem {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;

  description: string;

  strength: number; // 1-5
  sweetness: number; //1-5

  tags: string[];

  image: string;
}

export const menu = [
  // =========================
  // CÀ PHÊ VIỆT
  // =========================

  {
    id: 1,
    name: "Đen đá",
    category: "vietnamese",
    price: 25000,

    description:
      "Đậm vị truyền thống, hậu vị kéo dài.",

    strength: 5,
    sweetness: 1,

    tags: ["Truyền thống"],

    image: "/images/menu/den-da.jpg",
  },

  {
    id: 2,
    name: "Nâu đá",
    category: "vietnamese",
    price: 25000,

    description:
      "Cân bằng giữa cà phê và sữa đặc.",

    strength: 4,
    sweetness: 3,

    tags: ["Best Seller"],

    image: "/images/menu/nau-da.jpg",
  },

  // =========================
  // ESPRESSO BAR
  // =========================

  {
    id: 3,
    name: "Espresso",
    category: "espresso",
    price: 35000,

    description:
      "Shot espresso nguyên bản phong cách Ý.",

    strength: 5,
    sweetness: 1,

    tags: [],

    image: "/images/menu/espresso.jpg",
  },

  {
    id: 4,
    name: "Americano",
    category: "espresso",
    price: 35000,

    description:
      "Espresso pha cùng nước nóng, hậu vị sạch.",

    strength: 4,
    sweetness: 1,

    tags: ["Recommended"],

    image: "/images/menu/americano.jpg",
  },

  {
    id: 5,
    name: "Latte",
    category: "espresso",
    price: 40000,

    description:
      "Espresso kết hợp sữa tươi đánh mịn.",

    strength: 2,
    sweetness: 2,

    tags: [],

    image: "/images/menu/latte.jpg",
  },

  {
    id: 6,
    name: "Cappuccino",
    category: "espresso",
    price: 40000,

    description:
      "Lớp foam dày, cân bằng giữa espresso và sữa.",

    strength: 3,
    sweetness: 2,

    tags: [],

    image: "/images/menu/cappuccino.jpg",
  },

  {
    id: 7,
    name: "Cafe cốt dừa",
    category: "espresso",
    price: 40000,

    description:
      "Espresso kết hợp cốt dừa mát lạnh.",

    strength: 3,
    sweetness: 4,

    tags: ["Signature"],

    image: "/images/menu/coconut.jpg",
  },

  // =========================
  // COLD BREW
  // =========================

  {
    id: 8,
    name: "Coldbrew Hà Nội",
    category: "coldbrew",
    price: 45000,

    description:
      "Ủ lạnh 18 giờ, thanh mát và dễ uống.",

    strength: 2,
    sweetness: 1,

    tags: [],

    image: "/images/menu/coldbrew-hanoi.jpg",
  },

  {
    id: 9,
    name: "Coldbrew Mơ màng",
    category: "coldbrew",
    price: 50000,

    description:
      "Cold Brew kết hợp mơ.",

    strength: 2,
    sweetness: 3,

    tags: ["New"],

    image: "/images/menu/coldbrew-mo-mang.jpg",
  },

  {
    id: 10,
    name: "Coldbrew Chanh vàng",
    category: "coldbrew",
    price: 50000,

    description:
      "Cold Brew kết hợp chanh vàng.",

    strength: 2,
    sweetness: 2,

    tags: [],

    image: "/images/menu/coldbrew-lemon.jpg",
  },

  {
    id: 11,
    name: "Coldbrew Sấu",
    category: "coldbrew",
    price: 50000,

    description:
      "Cold Brew kết hợp vị sấu Hà Nội.",

    strength: 2,
    sweetness: 3,

    tags: [],

    image: "/images/menu/coldbrew-sau.jpg",
  },
] satisfies MenuItem[];