import { createClient } from "@supabase/supabase-js";

export interface Post {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  cover_image: string;

  seo_title: string | null;

  seo_description: string | null;

  author: string;

  published: boolean;

  published_at: string;

  updated_at: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const TABLE = "posts";

export async function getPublishedPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("published", true)
    .order("published_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Post[];
}

export async function getLatestPosts(limit = 6): Promise<Post[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("published", true)
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {
    console.error(error);
    return [];
  }

  return data as Post[];
}

export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    return null;
  }

  return data as Post;
}

export async function getRelatedPosts(
  slug: string,
  limit = 3
): Promise<Post[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .neq("slug", slug)
    .eq("published", true)
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {
    return [];
  }

  return data as Post[];
}

export async function createPost(
  post: Omit<Post, "id">
) {
  return await supabase
    .from(TABLE)
    .insert(post)
    .select()
    .single();
}

export async function updatePost(
  id: string,
  values: Partial<Post>
) {
  return await supabase
    .from(TABLE)
    .update(values)
    .eq("id", id)
    .select()
    .single();
}

export async function deletePost(id: string) {
  return await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);
}