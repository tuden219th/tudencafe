import { supabaseAdmin } from "../supabase-admin";

export async function createConversation(sessionId: string) {
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