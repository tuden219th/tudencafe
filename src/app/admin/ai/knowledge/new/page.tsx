import Link from "next/link";
import { createKnowledge } from "./actions";


export default function NewAIKnowledgePage() {

  return (

    <main className="min-h-screen bg-[#faf8f5] p-10">

      <div className="mx-auto max-w-3xl">


        <Link
          href="/admin/ai/knowledge"
          className="text-orange-600 hover:underline"
        >
          ← Quay lại
        </Link>



        <h1 className="mt-6 text-4xl font-bold text-orange-600">
          Thêm kiến thức AI
        </h1>



        <form
          action={createKnowledge}
          className="
            mt-10
            space-y-6
            rounded-3xl
            bg-white
            p-8
            shadow
          "
        >


          <div>

            <label className="text-sm font-medium">
              Category
            </label>


            <input
              name="category"
              placeholder="Ví dụ: menu, location"
              className="
                mt-2
                w-full
                rounded-xl
                border
                p-3
              "
              required
            />

          </div>




          <div>

            <label className="text-sm font-medium">
              Title
            </label>


            <input
              name="title"
              placeholder="Tên kiến thức"
              className="
                mt-2
                w-full
                rounded-xl
                border
                p-3
              "
              required
            />

          </div>




          <div>

            <label className="text-sm font-medium">
              Content
            </label>


            <textarea
              name="content"
              rows={6}
              placeholder="Nội dung AI cần biết..."
              className="
                mt-2
                w-full
                rounded-xl
                border
                p-3
              "
              required
            />

          </div>




          <button
            type="submit"
            className="
              rounded-xl
              bg-orange-600
              px-6
              py-3
              font-semibold
              text-white
              hover:bg-orange-700
            "
          >
            Lưu kiến thức
          </button>


        </form>


      </div>

    </main>

  );
}