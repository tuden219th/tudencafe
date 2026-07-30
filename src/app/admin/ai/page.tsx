import Link from "next/link";
import { supabaseAdmin } from "@/lib/db/supabase-admin";

export const dynamic = "force-dynamic";

export default async function AIAdminPage() {
  const [
    { count: conversations },
    { count: messages },
    { data: chats },
  ] = await Promise.all([
    supabaseAdmin
      .from("conversations")
      .select("*", { count: "exact", head: true }),

    supabaseAdmin
      .from("messages")
      .select("*", { count: "exact", head: true }),

    supabaseAdmin
      .from("conversations")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);


  return (
    <main className="min-h-screen bg-[#faf8f5] p-10">

      <div className="mx-auto max-w-7xl">


        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-orange-600">
            AI Manager
          </h1>

          <p className="mt-2 text-gray-600">
            Quản trị AI Assistant của Từ Đến
          </p>
        </div>



        {/* Dashboard cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">


          <StatCard
            title="Conversations"
            value={conversations ?? 0}
          />


          <StatCard
            title="Messages"
            value={messages ?? 0}
          />


          <StatCard
            title="Online"
            value="0"
            color="text-green-600"
          />


          <StatCard
            title="AI Health"
            value="OK"
            color="text-orange-500"
          />


        </div>




        {/* Conversation list */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow">


          <div className="border-b p-6">
            <h2 className="text-xl font-semibold">
              Cuộc hội thoại khách hàng
            </h2>
          </div>



          {!chats?.length && (

            <div className="p-6 text-gray-500">
              Chưa có dữ liệu.
            </div>

          )}



          {chats?.map((chat) => (

            <Link
              key={chat.id}
              href={`/admin/ai/${chat.id}`}
              className="
                block
                border-b
                p-6
                transition
                hover:bg-orange-50
              "
            >

              <div className="flex items-center justify-between">


                <div>

                  <div className="font-semibold">
                    Conversation
                  </div>


                  <div className="mt-1 break-all font-mono text-sm text-gray-500">
                    {chat.session_id}
                  </div>


                </div>



                <div
                  className="
                    rounded-full
                    bg-green-100
                    px-4
                    py-1
                    text-sm
                    text-green-700
                  "
                >
                  {chat.status ?? "active"}
                </div>


              </div>



              {chat.created_at && (

                <div className="mt-3 text-sm text-gray-400">
                  {new Date(
                    chat.created_at
                  ).toLocaleString("vi-VN")}
                </div>

              )}


            </Link>

          ))}


        </div>


      </div>

    </main>
  );
}



function StatCard({
  title,
  value,
  color = "text-gray-900",
}: {
  title: string;
  value: number | string;
  color?: string;
}) {

  return (

    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="text-sm text-gray-500">
        {title}
      </div>


      <div
        className={`mt-3 text-4xl font-bold ${color}`}
      >
        {value}
      </div>


    </div>

  );

}