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

  return (
    <section
      className="
        mt-10
        grid
        gap-6
        lg:grid-cols-12
      "
    >
      {/* Article feed */}
      <div className="space-y-5 lg:col-span-8">
        <h2
          className="
            text-2xl
            font-bold
            text-[#202124]
          "
        >
          Bài viết mới nhất
        </h2>

        {articles?.map((article) => (
          <Link
            key={article.id}
            href={`/congnghe/${article.slug}`}
            className="
              flex
              flex-col
              gap-4
              rounded-xl
              border
              border-[#e8e8e8]
              bg-white
              p-4
              transition
              hover:shadow-md
              md:flex-row
              md:p-5
            "
          >
            <div
              className="
                relative
                h-48
                w-full
                shrink-0
                overflow-hidden
                rounded-lg
                md:h-36
                md:w-52
              "
            >
              <Image
                src={
                  article.cover_image ||
                  "https://picsum.photos/500/300?random=1"
                }
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 208px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <span
                className="
                  text-sm
                  font-medium
                  text-blue-600
                "
              >
                {article.category || "Công nghệ"}
              </span>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  leading-7
                  text-[#202124]
                "
              >
                {article.title}
              </h3>

              {article.excerpt && (
                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#666]
                  "
                >
                  {article.excerpt}
                </p>
              )}

              <p
                className="
                  mt-3
                  text-xs
                  text-[#888]
                "
              >
                {article.published_at
                  ? new Date(
                      article.published_at
                    ).toLocaleDateString("vi-VN")
                  : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="space-y-5 lg:col-span-4">
        {/* Topics */}
        <div
          className="
            rounded-xl
            border
            border-[#e8e8e8]
            bg-white
            p-5
          "
        >
          <h3
            className="
              text-lg
              font-bold
              text-[#202124]
            "
          >
            Chủ đề nổi bật
          </h3>

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >
            {[
              "AI",
              "Apple",
              "Android",
              "Laptop",
              "Gaming",
              "Camera",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-[#f1f3f4]
                  px-3
                  py-2
                  text-sm
                  text-[#444]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Popular */}
        <div
          className="
            rounded-xl
            border
            border-[#e8e8e8]
            bg-white
            p-5
          "
        >
          <h3
            className="
              text-lg
              font-bold
              text-[#202124]
            "
          >
            Xem nhiều
          </h3>

          <ol
            className="
              mt-4
              space-y-3
              text-sm
              text-[#444]
            "
          >
            <li>01. ChatGPT thay đổi thế giới AI</li>
            <li>02. Smartphone đáng chú ý năm nay</li>
            <li>03. Xu hướng công nghệ mới</li>
          </ol>
        </div>
      </aside>
    </section>
  );
}