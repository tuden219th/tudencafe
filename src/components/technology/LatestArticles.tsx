import Image from "next/image";

const articles = [
  {
    title: "Google ra mắt công nghệ AI mới cho người dùng",
    category: "AI",
    time: "1 giờ trước",
    image: "https://picsum.photos/500/300?1",
    description:
      "Những cải tiến mới giúp AI xử lý nhanh hơn và thông minh hơn."
  },
  {
    title: "Laptop AI đang trở thành xu hướng mới",
    category: "Máy tính",
    time: "3 giờ trước",
    image: "https://picsum.photos/500/300?2",
    description:
      "Các hãng máy tính đang tập trung phát triển dòng laptop tích hợp AI."
  },
  {
    title: "Điện thoại thế hệ mới có gì đáng chú ý?",
    category: "Điện thoại",
    time: "5 giờ trước",
    image: "https://picsum.photos/500/300?3",
    description:
      "Thiết kế, hiệu năng và camera tiếp tục là điểm cạnh tranh chính."
  },
];


export default function LatestArticles() {
  return (
    <section className="mt-10 grid grid-cols-12 gap-6">


      {/* Article feed */}
      <div className="col-span-8 space-y-5">


        <h2 className="
          text-2xl
          font-bold
          text-[#202124]
        ">
          Bài viết mới nhất
        </h2>


        {articles.map((article) => (

          <article
            key={article.title}
            className="
              flex
              gap-5
              rounded-xl
              bg-white
              border
              border-[#e8e8e8]
              p-5
            "
          >

            <div className="
              relative
              h-36
              w-52
              shrink-0
              overflow-hidden
              rounded-lg
            ">

              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />

            </div>


            <div>

              <span className="
                text-sm
                font-medium
                text-blue-600
              ">
                {article.category}
              </span>


              <h3 className="
                mt-2
                text-xl
                font-bold
                leading-7
                text-[#202124]
              ">
                {article.title}
              </h3>


              <p className="
                mt-3
                text-sm
                leading-6
                text-[#666]
              ">
                {article.description}
              </p>


              <p className="
                mt-3
                text-xs
                text-[#888]
              ">
                {article.time}
              </p>


            </div>


          </article>

        ))}


      </div>



      {/* Sidebar */}
      <aside className="col-span-4">


        <div className="
          rounded-xl
          bg-white
          border
          border-[#e8e8e8]
          p-5
        ">

          <h3 className="
            text-lg
            font-bold
            text-[#202124]
          ">
            Chủ đề nổi bật
          </h3>


          <div className="
            mt-4
            flex
            flex-wrap
            gap-2
          ">

            {[
              "AI",
              "Apple",
              "Android",
              "Laptop",
              "Gaming",
              "Camera"
            ].map((item)=>(
              <span
                key={item}
                className="
                  rounded-full
                  bg-[#f1f3f4]
                  px-3
                  py-2
                  text-sm
                  text-[#444]
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>



        <div className="
          mt-5
          rounded-xl
          bg-white
          border
          border-[#e8e8e8]
          p-5
        ">

          <h3 className="
            text-lg
            font-bold
          ">
            Xem nhiều
          </h3>


          <ol className="
            mt-4
            space-y-3
            text-sm
            text-[#444]
          ">

            <li>
              01. ChatGPT thay đổi thế giới AI
            </li>

            <li>
              02. Smartphone đáng chú ý năm nay
            </li>

            <li>
              03. Xu hướng công nghệ mới
            </li>

          </ol>

        </div>


      </aside>


    </section>
  );
}