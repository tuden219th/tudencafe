import { supabaseAdmin } from "../supabase-admin";

export async function saveMessage(
  conversationId: string,
  role: "user" | "assistant",
  content: string,
  metadata?: {
    model?: string;
    promptTokens?: number;
    completionTokens?: number;
  }
) {
  const { error } = await supabaseAdmin
    .from("messages")
    .insert({
      conversation_id: conversationId,
      role,
      content,
      model: metadata?.model ?? null,
      prompt_tokens: metadata?.promptTokens ?? null,
      completion_tokens:
        metadata?.completionTokens ?? null,
    });

  if (error) throw error;
}

export async function getConversationMessages(
  conversationId: string,
  limit = 10
) {
  const { data, error } = await supabaseAdmin
    .from("messages")
    .select("role, content, created_at")
    .eq("conversation_id", conversationId)
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) throw error;

  // DB láº¥y má»›i â†’ cÅ©.
  // AI cáº§n Ä‘á»c cÅ© â†’ má»›i.
  return (data ?? []).reverse();
}
