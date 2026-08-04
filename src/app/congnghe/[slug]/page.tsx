import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


async function getPost(slug: string) {
  const supabase = await createClient();

  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .eq("is_deleted", false)
    .single();

  return data;
}



export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {

  const { slug } = await params;

  const post = await getPost(slug);


  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }


  const url =
    `https://tudencafe.com/congnghe/${post.slug}`;


  return {
    title:
      post.seo_title ||
      post.title,


    description:
      post.seo_description ||
      post.excerpt,


    alternates: {
      canonical:
        post.canonical_url ||
        url,
    },


    openGraph: {
      title:
        post.seo_title ||
        post.title,

      description:
        post.seo_description ||
        post.excerpt,

      url,

      type: "article",

      images: [
        {
          url:
            post.cover_image ||
            "https://tudencafe.com/og-image.jpg",

          width:1200,
          height:630,

          alt:post.title,
        },
      ],
    },


    twitter:{
      card:"summary_large_image",

      title:
        post.title,

      description:
        post.excerpt,

      images:[
        post.cover_image ||
        "https://tudencafe.com/og-image.jpg"
      ],
    },
  };
}



export default async function ArticlePage({
  params,
}: PageProps) {


  const { slug } = await params;


  const post = await getPost(slug);


  if (!post) {
    notFound();
  }



  const articleSchema = {

    "@context":"https://schema.org",

    "@type":"Article",


    headline:
      post.title,


    description:
      post.excerpt,


    image:[
      post.cover_image
    ],


    author:{
      "@type":"Person",

      name:
        post.author ||
        "Từ Đến Coffee",
    },


    publisher:{
      "@type":"Organization",

      name:"Từ Đến Coffee",

      logo:{
        "@type":"ImageObject",

        url:
        "https://tudencafe.com/images/logo.png",
      },
    },


    datePublished:
      post.published_at,


    dateModified:
      post.updated_at,


    mainEntityOfPage:{
      "@type":"WebPage",

      "@id":
      `https://tudencafe.com/congnghe/${post.slug}`,
    },
  };



  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
          JSON.stringify(articleSchema),
        }}
      />


      <article
        className="
          mx-auto
          max-w-4xl
          px-6
          py-12
        "
      >


        {post.cover_image && (

          <div
            className="
              relative
              mb-8
              aspect-[16/9]
              overflow-hidden
              rounded-2xl
            "
          >

            <Image

              src={post.cover_image}

              alt={post.title}

              fill

              className="object-cover"

              priority

            />

          </div>

        )}



        <div className="mb-3 text-sm text-blue-600">
          {post.category}
        </div>



        <h1
          className="
            mb-4
            text-4xl
            font-bold
            leading-tight
          "
        >
          {post.title}
        </h1>



        <div
          className="
            mb-10
            text-sm
            text-neutral-500
          "
        >

          {post.author}

          {" • "}

          {post.published_at &&
            new Date(
              post.published_at
            ).toLocaleDateString("vi-VN")
          }

        </div>



        {post.excerpt && (

          <p
            className="
              mb-8
              text-xl
              leading-8
              text-neutral-600
            "
          >
            {post.excerpt}
          </p>

        )}



        <div
          className="
            prose
            prose-neutral
            max-w-none
            whitespace-pre-line
          "
        >

          {post.content}

        </div>


      </article>

    </>
  );
}