import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Tiêu đề phải có ít nhất 5 ký tự")
    .max(200),

  slug: z
    .string()
    .trim()
    .min(3)
    .max(200)
    .optional(),

  excerpt: z
    .string()
    .trim()
    .max(500)
    .optional()
    .nullable(),

  content: z
    .string()
    .trim()
    .min(20, "Nội dung quá ngắn"),

  cover_image: z
    .string()
    .url()
    .optional()
    .nullable(),

  category: z
    .string()
    .optional()
    .nullable(),

  tags: z
    .array(z.string())
    .default([]),

  featured: z
    .boolean()
    .default(false),

  seo_title: z
    .string()
    .max(200)
    .optional()
    .nullable(),

  seo_description: z
    .string()
    .max(300)
    .optional()
    .nullable(),

  seo_keywords: z
    .array(z.string())
    .default([]),

  canonical_url: z
    .string()
    .url()
    .optional()
    .nullable(),

  status: z
    .enum(["draft", "published", "archived"])
    .default("draft"),
});

export type PostInput = z.infer<typeof PostSchema>;