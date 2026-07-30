"use server";

import { supabaseAdmin } from "@/lib/db/supabase-admin";
import { redirect } from "next/navigation";


export async function createKnowledge(
  formData: FormData
) {

  const category =
    formData.get("category") as string;

  const title =
    formData.get("title") as string;

  const content =
    formData.get("content") as string;



  const { error } = await supabaseAdmin
    .from("ai_knowledge")
    .insert({
      category,
      title,
      content,
    });



  if (error) {
    throw error;
  }



  redirect("/admin/ai/knowledge");

}