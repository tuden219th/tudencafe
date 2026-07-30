import Link from "next/link";
import { supabaseAdmin } from "@/lib/db/supabase-admin";

export const dynamic = "force-dynamic";


export default async function AIKnowledgePage() {

  const { data: knowledge } = await supabaseAdmin
    .from("ai_knowledge")
    .select("*")
    .order("created_at", {
      ascending: false,
    });


  return (
    <main className="min-h-screen bg-[#faf8f5] p-10">

      <div className="mx-auto max-w-5xl">


        <div className="flex items-center justify-between">


          <div>

            <h1 className="text-4xl font-bold text-orange-600">
              AI Knowledge
            </h1>


            <p className="mt-2 text-gray-600">
              Bộ nhớ kiến thức của Từ Đến Coffee
            </p>

          </div>



          <Link
            href="/admin/ai/knowledge/new"
            className="
              rounded-xl
              bg-orange-600
              px-5
              py-3
              font-semibold
              text-white
              hover:bg-orange-700
            "
          >
            + Thêm kiến thức
          </Link>


        </div>





        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow">


          {(!knowledge || knowledge.length === 0) && (

            <div className="p-8 text-gray-500">
              Chưa có dữ liệu AI.
            </div>

          )}





          {knowledge?.map((item) => (

            <div
              key={item.id}
              className="
                border-b
                p-6
              "
            >


              <div className="flex justify-between">


                <div>

                  <div className="font-bold">
                    {item.title}
                  </div>


                  <div className="mt-1 text-sm text-orange-600">
                    {item.category}
                  </div>

                </div>



                <div className="text-xs text-gray-400">

                  {item.created_at && (
                    new Date(
                      item.created_at
                    ).toLocaleDateString("vi-VN")
                  )}

                </div>


              </div>





              <div className="mt-4 whitespace-pre-wrap text-gray-700">
                {item.content}
              </div>



            </div>

          ))}


        </div>


      </div>

    </main>
  );
}