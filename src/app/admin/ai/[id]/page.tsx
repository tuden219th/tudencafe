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
    <main className="min-h-screen bg-[#faf8f5] p-10">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/admin/ai"
          className="text-orange-600 hover:underline"
        >
          ← Quay lại danh sách hội thoại
        </Link>


        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">

          <h1 className="text-3xl font-bold">
            AI Conversation
          </h1>

          <div className="mt-3 text-sm text-gray-500">
            Session ID:
          </div>

          <div className="mt-1 break-all rounded-xl bg-gray-100 p-3 text-sm">
            {conversation.session_id}
          </div>

        </div>


        <div className="mt-8 space-y-5">

          {messages && messages.length > 0 ? (
            messages.map((message) => (

              <div
                key={message.id}
                className={`rounded-3xl p-6 shadow-sm ${
                  message.role === "user"
                    ? "bg-orange-100"
                    : "bg-white"
                }`}
              >

                <div className="mb-3 flex items-center justify-between">

                  <div className="font-bold">
                    {message.role === "user"
                      ? "👤 Khách hàng"
                      : "🤖 AI Assistant"}
                  </div>


                  {message.created_at && (
                    <div className="text-xs text-gray-400">
                      {new Date(
                        message.created_at
                      ).toLocaleString("vi-VN")}
                    </div>
                  )}

                </div>


                <div className="whitespace-pre-wrap leading-relaxed">
                  {message.content}
                </div>

              </div>

            ))

          ) : (

            <div className="rounded-3xl bg-white p-8 text-center text-gray-500">
              Chưa có tin nhắn trong hội thoại này.
            </div>

          )}

        </div>

      </div>
    </main>
  );
}