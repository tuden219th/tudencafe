import CmsAdminGuard from "@/components/auth/CmsAdminGuard";
import PostEditor from "@/components/admin/posts/PostEditor";

export default function CmsAdminPage() {
  return (
    <CmsAdminGuard>
      <main className="min-h-screen bg-[#f7f8fa] p-10">
        <h1 className="text-3xl font-bold">
          Từ Đến CMS Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Quản lý bài viết công nghệ
        </p>

        {/* Dashboard statistics */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-sm text-gray-500">
              Bài viết
            </h2>

            <p className="mt-3 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-sm text-gray-500">
              Bản nháp
            </h2>

            <p className="mt-3 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-sm text-gray-500">
              Đã xuất bản
            </h2>

            <p className="mt-3 text-3xl font-bold">
              0
            </p>
          </div>
        </div>

        {/* Recent posts */}
        <div className="mt-10 rounded-xl border bg-white p-6">
          <h2 className="text-xl font-bold">
            Bài viết gần đây
          </h2>

          <div className="mt-5 text-gray-500">
            Chưa có bài viết
          </div>
        </div>

        {/* Post Editor */}
        <PostEditor />
      </main>
    </CmsAdminGuard>
  );
}