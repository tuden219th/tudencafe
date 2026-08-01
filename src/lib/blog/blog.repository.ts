import { supabaseAdmin } from "@/lib/db/supabase-admin";


export async function getPublishedPosts() {

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending:false
    });


  if(error){
    throw error;
  }


  return data;
}



export async function getPostBySlug(slug:string){

  const {data,error}=await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("slug",slug)
    .single();


  if(error){
    return null;
  }


  return data;
}