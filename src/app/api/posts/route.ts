import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { PostSchema } from "@/lib/validation/post";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("posts")
      .select("*")
      .eq("is_deleted", false)
      .order("published_at", {
        ascending: false,
        nullsFirst: false,
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = PostSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const input = parsed.data;

    const slug =
      input.slug && input.slug.length > 0
        ? slugify(input.slug, {
            lower: true,
            strict: true,
            locale: "vi",
          })
        : slugify(input.title, {
            lower: true,
            strict: true,
            locale: "vi",
          });

    const { data: existed } = await supabaseAdmin
      .from("posts")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (existed) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const publishedAt =
      input.status === "published"
        ? new Date().toISOString()
        : null;

    const { data, error } = await supabaseAdmin
      .from("posts")
      .insert({
        title: input.title,
        slug,

        excerpt: input.excerpt,

        content: input.content,

        cover_image: input.cover_image,

        category: input.category,

        tags: input.tags,

        featured: input.featured,

        seo_title:
          input.seo_title ?? input.title,

        seo_description:
          input.seo_description ??
          input.excerpt,

        seo_keywords:
          input.seo_keywords,

        canonical_url:
          input.canonical_url,

        status:
          input.status,

        published_at:
          publishedAt,
      })
      .select()
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}