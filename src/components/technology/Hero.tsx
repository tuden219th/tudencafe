import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Hero() {
  const supabase = await createClient();

  // Lấy bài nổi bật trước
  const { data: featuredPosts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("is_deleted", false)
    .eq("featured", true)
    .order("published_at", { ascending: false })
    .limit(4);


  let posts = featuredPosts;


  // Nếu chưa có bài featured thì lấy bài mới nhất
  if (!posts || posts.length === 0) {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .eq("is_deleted", false)
      .order("published_at", { ascending: false })
      .limit(4);

    posts = data;
  }


  if (!posts || posts.length === 0) return null;


  const hero = posts[0];
  const sideArticles = posts.slice(1);


  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-12">

      {/* Main */}
      <Link
        href={`/congnghe/${hero.slug}`}
        className="
          relative
          overflow-hidden
          rounded-2xl
          lg:col-span-8
          aspect-[16/10]
          group
        "
      >

        <Image
          src={
            hero.cover_image ||
            "https://picsum.photos/1200/700"
          }
          alt={hero.title}
          fill
          sizes="(max-width:1024px) 100vw, 66vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />


        <div
          className="
            absolute
            bottom-0
            p-6
            md:p-8
          "
        >

          <span
            className="
              rounded-full
              bg-white/20
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur
            "
          >
            {hero.category}
          </span>


          <h1
            className="
              mt-3
              max-w-3xl
              text-2xl
              font-bold
              leading-tight
              text-white
              md:text-4xl
            "
          >
            {hero.title}
          </h1>


          <p
            className="
              mt-3
              hidden
              max-w-xl
              text-sm
              leading-6
              text-white/80
              md:block
            "
          >
            {hero.excerpt}
          </p>


          <div
            className="
              mt-5
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                h-8
                w-8
                rounded-full
                bg-white/30
              "
            />


            <div className="text-xs text-white">

              <p className="font-medium">
                {hero.author || "Từ Đến Coffee"}
              </p>


              <p className="text-white/70">

                {hero.published_at &&
                  new Date(
                    hero.published_at
                  ).toLocaleDateString("vi-VN")
                }

              </p>

            </div>

          </div>

        </div>

      </Link>



      {/* Side */}
      <aside
        className="
          space-y-4
          lg:col-span-4
        "
      >

        {sideArticles.map((item) => (

          <Link
            key={item.id}
            href={`/congnghe/${item.slug}`}
            className="
              flex
              gap-4
              rounded-xl
              bg-white
              p-3
              transition
              hover:shadow-md
            "
          >

            <div
              className="
                relative
                h-24
                w-32
                shrink-0
                overflow-hidden
                rounded-xl
              "
            >

              <Image
                src={
                  item.cover_image ||
                  "https://picsum.photos/300/200"
                }
                alt={item.title}
                fill
                sizes="128px"
                className="object-cover"
              />

            </div>


            <div>

              <span
                className="
                  text-xs
                  font-medium
                  text-blue-600
                "
              >
                {item.category}
              </span>


              <h3
                className="
                  mt-1
                  line-clamp-3
                  text-sm
                  font-semibold
                  leading-5
                  text-[#202124]
                "
              >
                {item.title}
              </h3>


              <p className="mt-2 text-xs text-[#777]">

                {item.published_at &&
                  new Date(
                    item.published_at
                  ).toLocaleDateString("vi-VN")
                }

              </p>


            </div>


          </Link>

        ))}

      </aside>


    </section>
  );
}