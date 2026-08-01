import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getPostBySlug } from "@/lib/blog/blog.repository";


const blogDirectory = path.join(
  process.cwd(),
  "src/content/blog"
);



export async function getBlogPost(slug:string) {


  // 1. Tìm bài Markdown trước

  const filePath = path.join(
    blogDirectory,
    `${slug}.md`
  );


  if(fs.existsSync(filePath)){

    const fileContent = fs.readFileSync(
      filePath,
      "utf8"
    );


    const {data, content} = matter(fileContent);


    return {
      ...data,
      content,
      source:"markdown"
    };

  }



  // 2. Nếu không có Markdown thì lấy Supabase

  const post = await getPostBySlug(slug);


  if(post){

    return {
      ...post,
      source:"supabase"
    };

  }


  return null;

}