import { supabaseAdmin } from "../supabase-admin";

export async function saveMessage(
  conversationId: string,
  role: "user" | "assistant",
  content: string
) {
  const { error } = await supabaseAdmin
    .from("messages")
    .insert({
      conversation_id: conversationId,
      role,
      content,
    });

  if (error) throw error;
}