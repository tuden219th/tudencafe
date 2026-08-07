"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

const categories = [
  "AI",
  "Điện thoại",
  "Máy tính",
  "Apple",
  "Android",
  "Gaming",
  "Camera",
  "Internet",
  "Khoa học",
  "Windows",
  "Review",
  "Xe",
];

function makeSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function PostEditor() {

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("AI");
  const [author, setAuthor] = useState("Từ Đến Coffee");
  const [tags, setTags] = useState("");
  const [featured, setFeatured] = useState(false);

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);

    if (!slug || slug === makeSlug(title)) {
      setSlug(makeSlug(value));
    }
  }

  async function savePost(publish: boolean) {
    setMessage("");

    if (!title.trim()) {
      setMessage("Vui lòng nhập tiêu đề.");
      return;
    }

    if (!slug.trim()) {
      setMessage("Vui lòng nhập slug.");
      return;
    }

    if (!content.trim()) {
      setMessage("Vui lòng nhập nội dung.");
      return;
    }

    setSaving(true);

    const { error } = await supabase.from("posts").insert({
      title: title.trim(),
      slug: slug.trim(),
      content: content.trim(),
      excerpt: excerpt.trim() || null,
      cover_image: coverImage.trim() || null,
      category,
      author: author.trim() || "Từ Đến Coffee",
      tags: tags.trim() || null,
      featured,
      status: publish ? "published" : "draft",
      seo_title: seoTitle.trim() || title.trim(),
      seo_description: seoDescription.trim() || excerpt.trim() || null,
      seo_keywords: seoKeywords.trim() || null,
      published_at: publish
        ? new Date().toISOString()
        : null,
      is_deleted: false,
    });

    if (error) {
  console.error("SUPABASE ERROR:", error);

  setMessage(
    `Lỗi Supabase: ${
      error.message ||
      error.details ||
      error.hint ||
      JSON.stringify(error)
    }`
  );

  setSaving(false);
  return;
}

    setMessage(
      publish
        ? "✅ Đã đăng bài thành công!"
        : "✅ Đã lưu bản nháp!"
    );

    setSaving(false);

    // Reset form
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setCoverImage("");
    setCategory("AI");
    setAuthor("Từ Đến Coffee");
    setTags("");
    setFeatured(false);
    setSeoTitle("");
    setSeoDescription("");
    setSeoKeywords("");
  }

  return (
    <div className="mt-8 max-w-5xl">
      <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#202124]">
            Tạo bài viết
          </h2>

          <p className="mt-1 text-sm text-[#777]">
            Viết và xuất bản bài viết cho Từ Đến Công nghệ.
          </p>
        </div>

        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#333]">
              Tiêu đề *
            </label>

            <input
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ví dụ: OpenAI ra mắt thế hệ AI mới..."
              className="
                w-full
                rounded-xl
                border
                border-[#ddd]
                px-4
                py-3
                text-base
                outline-none
                transition
                focus:border-[#294A3A]
              "
            />
          </div>

          {/* Slug */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#333]">
              Slug *
            </label>

            <input
              value={slug}
              onChange={(e) => setSlug(makeSlug(e.target.value))}
              placeholder="openai-ra-mat-the-he-ai-moi"
              className="
                w-full
                rounded-xl
                border
                border-[#ddd]
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#294A3A]
              "
            />

            <p className="mt-1 text-xs text-[#999]">
              URL: /congnghe/{slug || "..."}
            </p>
          </div>

          {/* Category + Author */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333]">
                Chuyên mục
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#ddd]
                  bg-white
                  px-4
                  py-3
                  outline-none
                "
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#333]">
                Tác giả
              </label>

              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#ddd]
                  px-4
                  py-3
                  outline-none
                "
              />
            </div>
          </div>

          {/* Cover */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#333]">
              Ảnh đại diện
            </label>

            <input
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="
                w-full
                rounded-xl
                border
                border-[#ddd]
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#294A3A]
              "
            />

            {coverImage && (
              <div className="mt-3 overflow-hidden rounded-xl border">
                <img
                  src={coverImage}
                  alt="Preview"
                  className="max-h-72 w-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#333]">
              Tóm tắt
            </label>

            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              placeholder="Một vài câu giới thiệu ngắn về bài viết..."
              className="
                w-full
                resize-y
                rounded-xl
                border
                border-[#ddd]
                px-4
                py-3
                outline-none
                focus:border-[#294A3A]
              "
            />
          </div>

          {/* Content */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#333]">
              Nội dung *
            </label>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={18}
              placeholder="Viết nội dung bài viết ở đây..."
              className="
                w-full
                resize-y
                rounded-xl
                border
                border-[#ddd]
                px-4
                py-3
                font-mono
                text-sm
                leading-6
                outline-none
                focus:border-[#294A3A]
              "
            />

            <p className="mt-1 text-xs text-[#999]">
              Bản đầu tiên dùng văn bản thuần. Sau này ta sẽ nâng cấp
              thành editor có định dạng.
            </p>
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#333]">
              Tags
            </label>

            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="AI, OpenAI, ChatGPT"
              className="
                w-full
                rounded-xl
                border
                border-[#ddd]
                px-4
                py-3
                outline-none
                focus:border-[#294A3A]
              "
            />
          </div>

          {/* SEO */}
          <div className="rounded-xl bg-[#f7f8fa] p-5">
            <h3 className="font-bold text-[#333]">
              SEO
            </h3>

            <div className="mt-5 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#555]">
                  SEO Title
                </label>

                <input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Để trống sẽ dùng tiêu đề bài viết"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#ddd]
                    bg-white
                    px-4
                    py-3
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#555]">
                  SEO Description
                </label>

                <textarea
                  value={seoDescription}
                  onChange={(e) =>
                    setSeoDescription(e.target.value)
                  }
                  rows={3}
                  placeholder="Mô tả dành cho Google..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#ddd]
                    bg-white
                    px-4
                    py-3
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#555]">
                  SEO Keywords
                </label>

                <input
                  value={seoKeywords}
                  onChange={(e) =>
                    setSeoKeywords(e.target.value)
                  }
                  placeholder="AI, OpenAI, ChatGPT..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#ddd]
                    bg-white
                    px-4
                    py-3
                    outline-none
                  "
                />
              </div>
            </div>
          </div>

          {/* Featured */}
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="h-4 w-4"
            />

            <span className="text-sm font-medium text-[#444]">
              Đưa bài viết lên vị trí nổi bật
            </span>
          </label>

          {/* Message */}
          {message && (
            <div
              className="
                rounded-xl
                bg-[#f5f6f7]
                px-4
                py-3
                text-sm
                text-[#444]
              "
            >
              {message}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              disabled={saving}
              onClick={() => savePost(false)}
              className="
                rounded-xl
                border
                border-[#ddd]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#444]
                transition
                hover:bg-[#f5f6f7]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {saving ? "Đang lưu..." : "Lưu nháp"}
            </button>

            <button
              type="button"
              disabled={saving}
              onClick={() => savePost(true)}
              className="
                rounded-xl
                bg-[#294A3A]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:opacity-90
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {saving ? "Đang đăng..." : "Đăng bài"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}