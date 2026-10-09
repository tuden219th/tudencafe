import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function LatestArticles() {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("is_deleted", false)
    .order("published_at", { ascending: false })
    .range(1, 10);

  const popularArticles = [
    "ChatGPT thay đổi thế giới AI",
    "Smartphone đáng chú ý năm nay",
    "Xu hướng công nghệ mới",
  ];

  const topics = [
    "AI",
    "Chuyển đổi số",
    "ERP",
    "Data",
    "Apple",
    "Android",
    "Gaming",
    "Internet",
  ];

  return (
    <section className="mt-12 border-t border-[#e8e3dc] pt-8">
      <div className="grid gap-10 lg:grid-cols-12">
        {/* MỚI NHẤT */}
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-end justify-between border-b border-[#e8e3dc] pb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C96A2B]">
                Từ Đến Công Nghệ
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-[-0.02em] text-[#1f1f1f] sm:text-3xl">
                Mới nhất
              </h2>
            </div>
          </div>

          <div className="divide-y divide-[#e8e3dc]">
            {articles?.map((article) => (
              <Link
                key={article.id}
                href={`/congnghe/${article.slug}`}
                className="group flex gap-5 py-5 first:pt-0"
              >
                {/* Ảnh */}
                <div className="relative h-[120px] w-[170px] shrink-0 overflow-hidden bg-[#F5EBDD] sm:h-[145px] sm:w-[220px]">
                  {article.cover_image ? (
                    <Image
                      src={article.cover_image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 170px, 220px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-4 text-center">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C96A2B]">
                        Từ Đến
                        <br />
                        Công Nghệ
                      </span>
                    </div>
                  )}
                </div>

                {/* Nội dung */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-[#C96A2B]">
                      {article.category || "Công nghệ"}
                    </span>

                    {article.published_at && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-[#bbb]" />
                        <span className="text-[#999]">
                          {new Date(
                            article.published_at
                          ).toLocaleDateString("vi-VN")}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-6 tracking-[-0.01em] text-[#222] transition group-hover:text-[#C96A2B] sm:text-xl">
                    {article.title}
                  </h3>

                  {article.excerpt && (
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#666]">
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          {/* ĐỌC NHIỀU */}
          <div className="border-t-2 border-[#1f1f1f] pt-4">
            <h3 className="text-xl font-bold text-[#1f1f1f]">
              Đọc nhiều
            </h3>

            <ol className="mt-4 divide-y divide-[#e8e3dc]">
              {popularArticles.map((title, index) => (
                <li key={title} className="flex gap-4 py-4 first:pt-0">
                  <span className="text-2xl font-light leading-none text-[#C96A2B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold leading-5 text-[#333]">
                    {title}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* CHỦ ĐỀ */}
          <div className="mt-10 border-t-2 border-[#1f1f1f] pt-4">
            <h3 className="text-xl font-bold text-[#1f1f1f]">
              Chủ đề
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="text-sm font-medium text-[#555] transition hover:text-[#C96A2B]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}