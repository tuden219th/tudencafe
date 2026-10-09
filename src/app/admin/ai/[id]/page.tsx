import { supabaseAdmin } from "@/lib/db/supabase-admin";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ConversationPage({ params }: Props) {
  const { id } = await params;

  const { data: conversation } = await supabaseAdmin
    .from("conversations")
    .select("*")
    .eq("id", id)
    .single();

  if (!conversation) {
    notFound();
  }

  const { data: messages } = await supabaseAdmin
    .from("messages")
    .select("*")
    .eq("conversation_id", id)
    .order("id", { ascending: true });

  return (
    <main className="min-h-screen bg-[#faf8f5] px-4 py-6 sm:p-8 md:p-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/ai"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C96A2B] hover:underline"
        >
          ← Quay lại danh sách hội thoại
        </Link>

        <div className="mt-4 rounded-2xl bg-white p-5 shadow-xs sm:rounded-3xl sm:p-7 border border-[#EFE5DA]">
          <h1 className="text-2xl font-bold text-[#3B2416] sm:text-3xl">
            Chi tiết hội thoại AI
          </h1>

          <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Session ID
          </div>

          <div className="mt-1 break-all rounded-xl bg-gray-50 border border-gray-100 p-3 font-mono text-xs sm:text-sm text-[#3B2416]">
            {conversation.session_id}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {messages && messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-2xl p-4 sm:p-6 shadow-xs border transition ${
                  message.role === "user"
                    ? "bg-[#FFF8F2] border-[#F2DECC]"
                    : "bg-white border-[#EFE5DA]"
                }`}
              >
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-semibold text-sm sm:text-base text-[#3B2416]">
                    {message.role === "user" ? (
                      <span className="flex items-center gap-1 text-[#C96A2B]">
                        👤 Khách hàng
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[#294A3A]">
                        ☕ AI Barista
                      </span>
                    )}
                  </div>

                  {message.created_at && (
                    <div className="text-xs text-gray-400">
                      {new Date(message.created_at).toLocaleString("vi-VN")}
                    </div>
                  )}
                </div>

                <div className="whitespace-pre-wrap text-[15px] leading-relaxed text-[#3B2416]">
                  {message.content}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center text-gray-500 border border-[#EFE5DA]">
              Chưa có tin nhắn trong hội thoại này.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}