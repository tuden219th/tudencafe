import Image from "next/image";
import Link from "next/link";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string;
  category: string;
  published_at: string;
}

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      href={`/congnghe/${article.slug}`}
      className="group overflow-hidden rounded-xl border border-[#eceff3] bg-white transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.cover_image}
          alt={article.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#ff6b00]">
          {article.category}
        </div>

        <h3 className="line-clamp-2 text-lg font-bold leading-snug transition group-hover:text-[#ff6b00]">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {article.excerpt}
        </p>

        <div className="mt-4 text-xs text-gray-400">
          {new Date(article.published_at).toLocaleDateString("vi-VN")}
        </div>
      </div>
    </Link>
  );
}