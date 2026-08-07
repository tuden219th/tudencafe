import Link from "next/link";
import CmsAdminGuard from "@/components/auth/CmsAdminGuard";

export default function CmsAdminPage() {
  return (
    <CmsAdminGuard>
      <main className="min-h-screen bg-[#f7f8fa] p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-[#202124]">
              Từ Đến CMS Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Quản lý bài viết công nghệ
            </p>
          </div>

          <Link
            href="/admin/posts/new"
            className="
              rounded-xl
              bg-[#294A3A]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:opacity-90
            "
          >
            + Tạo bài viết
          </Link>
        </div>

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
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#202124]">
              Bài viết gần đây
            </h2>

            <Link
              href="/admin/posts/new"
              className="text-sm font-medium text-[#294A3A] hover:underline"
            >
              + Tạo bài viết
            </Link>
          </div>

          <div className="mt-5 text-gray-500">
            Chưa có bài viết
          </div>
        </div>
      </main>
    </CmsAdminGuard>
  );
}