import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Hero() {
  const supabase = await createClient();

  const { data: featuredPosts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("is_deleted", false)
    .eq("featured", true)
    .order("published_at", { ascending: false })
    .limit(4);

  const { data: latestPosts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("is_deleted", false)
    .order("published_at", { ascending: false })
    .limit(8);

  const mergedPosts = [
    ...(featuredPosts || []),
    ...(latestPosts || []),
  ];

  const posts = mergedPosts
    .filter(
      (post, index, array) =>
        array.findIndex((item) => item.id === post.id) === index
    )
    .slice(0, 4);

  if (posts.length === 0) {
    return null;
  }

  const hero = posts[0];
  const sideArticles = posts.slice(1);

  return (
    <section className="mt-6">
      <div className="grid gap-6 lg:grid-cols-12">
        {/* BÀI CHÍNH */}
        <Link
          href={`/congnghe/${hero.slug}`}
          className="group lg:col-span-8"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-[#eeeae4]">
            {hero.cover_image ? (
              <Image
                src={hero.cover_image}
                alt={hero.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[#F5EBDD]">
                <span className="text-sm font-medium text-[#C96A2B]">
                  Từ Đến Công Nghệ
                </span>
              </div>
            )}
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
              <span className="text-[#C96A2B]">
                {hero.category || "Công nghệ"}
              </span>

              {hero.published_at && (
                <>
                  <span className="h-1 w-1 rounded-full bg-[#bbb]" />
                  <span className="font-normal normal-case tracking-normal text-[#888]">
                    {new Date(hero.published_at).toLocaleDateString("vi-VN")}
                  </span>
                </>
              )}
            </div>

            <h1 className="mt-2 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[#1f1f1f] transition group-hover:text-[#C96A2B] sm:text-4xl lg:text-[42px]">
              {hero.title}
            </h1>

            {hero.excerpt && (
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#666]">
                {hero.excerpt}
              </p>
            )}
          </div>
        </Link>

        {/* CÁC BÀI PHỤ */}
        {sideArticles.length > 0 && (
          <aside className="lg:col-span-4">
            <div className="divide-y divide-[#e8e3dc] border-y border-[#e8e3dc]">
              {sideArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/congnghe/${article.slug}`}
                  className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="relative h-[92px] w-[128px] shrink-0 overflow-hidden bg-[#eeeae4]">
                    {article.cover_image ? (
                      <Image
                        src={article.cover_image}
                        alt={article.title}
                        fill
                        sizes="128px"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#F5EBDD] px-2 text-center text-[10px] font-semibold text-[#C96A2B]">
                        Từ Đến
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#C96A2B]">
                      {article.category || "Công nghệ"}
                    </span>

                    <h2 className="mt-1 line-clamp-3 text-base font-bold leading-6 text-[#242424] transition group-hover:text-[#C96A2B]">
                      {article.title}
                    </h2>

                    {article.published_at && (
                      <p className="mt-2 text-xs text-[#999]">
                        {new Date(
                          article.published_at
                        ).toLocaleDateString("vi-VN")}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}