import { supabaseAdmin } from "@/lib/db/supabase-admin";

export async function getAIKnowledge() {

  const { data, error } = await supabaseAdmin
    .from("ai_knowledge")
    .select("*")
    .order("id");


  if (error) {
    throw error;
  }


  return (
    data
      ?.map(
        (item) =>
          `${item.title}: ${item.content}`
      )
      .join("\n\n") ?? ""
  );
}