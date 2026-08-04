export type PostStatus = "draft" | "published" | "archived";

export interface Post {
  id: string;

  title: string;

  slug: string;

  excerpt: string | null;

  content: string;

  coverImage: string | null;

  category: string | null;

  tags: string[];

  author: string;

  status: PostStatus;

  featured: boolean;

  seoTitle: string | null;

  seoDescription: string | null;

  seoKeywords: string[];

  canonicalUrl: string | null;

  publishedAt: string | null;

  createdAt: string;

  updatedAt: string;
}

export interface PostSummary {
  id: string;

  title: string;

  slug: string;

  excerpt: string | null;

  coverImage: string | null;

  category: string | null;

  author: string;

  featured: boolean;

  publishedAt: string | null;
}

export interface CreatePostInput {
  title: string;

  slug: string;

  excerpt?: string;

  content: string;

  coverImage?: string;

  category?: string;

  tags?: string[];

  featured?: boolean;

  seoTitle?: string;

  seoDescription?: string;

  seoKeywords?: string[];

  canonicalUrl?: string;

  status?: PostStatus;
}

export interface UpdatePostInput
  extends Partial<CreatePostInput> {}