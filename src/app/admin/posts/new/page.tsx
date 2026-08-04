import PostEditor from "@/components/admin/posts/PostEditor";

export default function NewPostPage() {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Tạo bài viết
        </h1>

        <p className="mt-2 text-gray-500">
          Viết và xuất bản bài viết mới.
        </p>
      </div>

      <PostEditor />
    </main>
  );
}