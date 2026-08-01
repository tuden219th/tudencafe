import Link from "next/link";
import { blogPosts } from "@/data/blog";


export const metadata = {
  title:"Journal | Cà phê Từ Đến",
  description:
  "Những câu chuyện về cà phê, con người và hành trình tại Từ Đến Coffee"
};


export default function BlogPage() {

return (

<main className="mx-auto max-w-6xl px-6 py-24">


<div className="max-w-2xl">

<p className="
text-sm
uppercase
tracking-[0.3em]
text-[var(--primary)]
">
Journal
</p>


<h1 className="
mt-4
font-[var(--font-playfair)]
text-5xl
">
Những câu chuyện từ Từ Đến
</h1>


<p className="
mt-6
text-lg
text-[#3B2416]/70
">
Một nơi để chia sẻ về cà phê, con người và những hành trình nhỏ mỗi ngày.
</p>


</div>



<div className="
mt-16
space-y-8
">


{
blogPosts.map(post=>(


<Link
key={post.slug}
href={`/blog/${post.slug}`}
className="
block
rounded-3xl
border
border-[#E9DDCF]
bg-white
p-8
transition
hover:-translate-y-1
hover:shadow-lg
"
>


<div className="
flex
gap-4
text-sm
text-[#3B2416]/60
">

<span>
{post.category}
</span>

<span>•</span>

<span>
{post.readingTime}
</span>

</div>



<h2 className="
mt-3
font-[var(--font-playfair)]
text-3xl
">

{post.title}

</h2>


<p className="
mt-4
leading-7
text-[#3B2416]/70
">

{post.description}

</p>


<p className="
mt-6
text-[var(--primary)]
">

Đọc hành trình →

</p>


</Link>


))

}


</div>


</main>

)

}