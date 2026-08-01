export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "vi-sao-lai-la-tu-den",

    title: "Vì sao lại là Từ Đến?",

    description:
      "Một cái tên không chỉ để gọi, mà để nhắc chúng ta nhớ về hành trình của chính mình.",

    date: "01/08/2026",

    readingTime: "5 phút đọc",

    category: "Câu chuyện Từ Đến",
  },
];