"use client";

import { useState } from "react";
import slugify from "slugify";

interface Props {
  loading: boolean;

  onSubmit: (data: any) => void;
}

export default function PostForm({
  loading,
  onSubmit,
}: Props) {
  const [title, setTitle] = useState("");

  const [slug, setSlug] = useState("");

  const [excerpt, setExcerpt] = useState("");

  const [coverImage, setCoverImage] = useState("");

  const [category, setCategory] = useState("");

  const [content, setContent] = useState("");

  const [seoTitle, setSeoTitle] = useState("");

  const [seoDescription, setSeoDescription] =
    useState("");

  function generateSlug(value: string) {
    setSlug(
      slugify(value, {
        lower: true,
        strict: true,
        locale: "vi",
      })
    );
  }

  return (
    <form
      className="space-y-6 rounded-xl bg-white p-8 shadow"
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit({
          title,

          slug,

          excerpt,

          cover_image: coverImage,

          category,

          content,

          seo_title: seoTitle,

          seo_description: seoDescription,

          status: "published",

          featured: false,

          tags: [],

          seo_keywords: [],
        });
      }}
    >
      <div>
        <label className="mb-2 block font-semibold">
          Tiêu đề
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

            generateSlug(e.target.value);
          }}
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Slug
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Ảnh đại diện
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={coverImage}
          onChange={(e) =>
            setCoverImage(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Danh mục
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Mô tả ngắn
        </label>

        <textarea
          rows={3}
          className="w-full rounded-lg border p-3"
          value={excerpt}
          onChange={(e) =>
            setExcerpt(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Nội dung
        </label>

        <textarea
          rows={18}
          className="w-full rounded-lg border p-3"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          SEO Title
        </label>

        <input
          className="w-full rounded-lg border p-3"
          value={seoTitle}
          onChange={(e) =>
            setSeoTitle(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          SEO Description
        </label>

        <textarea
          rows={4}
          className="w-full rounded-lg border p-3"
          value={seoDescription}
          onChange={(e) =>
            setSeoDescription(e.target.value)
          }
        />
      </div>

      <button
        disabled={loading}
        className="rounded-xl bg-black px-6 py-3 font-semibold text-white"
      >
        {loading ? "Đang đăng..." : "Đăng bài"}
      </button>
    </form>
  );
}