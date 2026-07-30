import { supabaseAdmin } from "../supabase-admin";

export async function getOrCreateConversation(sessionId: string) {
  // Tìm conversation đang active
  const { data: existing } = await supabaseAdmin
    .from("conversations")
    .select("*")
    .eq("session_id", sessionId)
    .eq("status", "active")
    .maybeSingle();

  if (existing) {
    return existing;
  }

  // Nếu chưa có thì tạo mới
  const { data, error } = await supabaseAdmin
    .from("conversations")
    .insert({
      session_id: sessionId,
      status: "active",
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}