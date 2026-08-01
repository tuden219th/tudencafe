import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blog/blog.service";

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>
}) {

 const { slug } = await params;

 const post = await getBlogPost(slug);


 if (!post) {
   return {};
 }


 return {
   title: `${post.title} | Từ Đến Coffee`,
   description: post.description,
 };

}



export default async function BlogDetailPage({
 params,
}: {
 params: Promise<{ slug: string }>
}) {


 const { slug } = await params;


 const post = await getBlogPost(slug);



 if (!post) {

   return notFound();

 }



 return (

<main className="
mx-auto
max-w-4xl
px-6
py-24
">


{/* Breadcrumb */}

<div className="
mb-8
text-sm
text-[#3B2416]/60
">

<Link
href="/"
className="hover:text-[var(--primary)]"
>
Trang chủ
</Link>


<span className="mx-2">
/
</span>


<Link
href="/blog"
className="hover:text-[var(--primary)]"
>
Journal
</Link>


<span className="mx-2">
/
</span>


<span>
{post.title}
</span>

</div>



<p className="
text-sm
uppercase
tracking-[0.3em]
text-[var(--primary)]
">
{post.category}
</p>



<h1 className="
mt-6
font-[var(--font-playfair)]
text-5xl
">
{post.title}
</h1>



<div className="
mt-4
text-sm
text-[#3B2416]/60
">
{post.date}
{" • "}
{post.readingTime}
</div>



<Link
href="/blog"
className="
inline-flex
mt-6
items-center
rounded-full
border
border-[#E9DDCF]
px-5
py-2
text-sm
transition
hover:bg-[#3B2416]
hover:text-white
"
>
← Quay lại Journal
</Link>



<article className="
mt-12
prose
prose-lg
text-[#3B2416]
">

<ReactMarkdown>
{post.content}
</ReactMarkdown>


</article>



{/* Bottom Navigation */}

<div className="
mt-20
border-t
border-[#E9DDCF]
pt-8
flex
justify-between
items-center
text-sm
">


<Link
href="/blog"
className="
text-[var(--primary)]
hover:underline
"
>
← Xem tất cả câu chuyện
</Link>



<Link
href="/"
className="
text-[#3B2416]
hover:underline
"
>
Về trang chủ →
</Link>


</div>



</main>

)

}