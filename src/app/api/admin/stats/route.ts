import { supabaseAdmin } from "@/lib/db/supabase-admin";

export async function GET() {
  try {
    const [{ count: conversations }, { count: messages }] = await Promise.all([
      supabaseAdmin
        .from("conversations")
        .select("*", { count: "exact", head: true }),

      supabaseAdmin
        .from("messages")
        .select("*", { count: "exact", head: true }),
    ]);

    return Response.json({
      conversations: conversations ?? 0,
      messages: messages ?? 0,
      online: 0,
      health: "OK",
    });
  } catch (e: unknown) {
    return Response.json(
      {
        error:
          e instanceof Error
            ? e.message
            : "Có lỗi xảy ra",
      },
      { status: 500 }
    );
  }
}