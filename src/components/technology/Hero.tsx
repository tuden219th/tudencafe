import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-5
        lg:grid-cols-12
      "
    >

      {/* Main featured */}
      <article
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#e8e8e8]
          bg-white
          lg:col-span-8
        "
      >

        <div className="relative aspect-[16/9] w-full">

          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI technology"
            fill
            sizes="(max-width:1024px) 100vw, 66vw"
            className="object-cover"
          />

        </div>


        <div className="p-6">


          <span
            className="
              text-sm
              font-medium
              text-blue-600
            "
          >
            AI
          </span>


          <h1
            className="
              mt-3
              text-2xl
              font-bold
              leading-tight
              text-[#202124]
              md:text-[28px]
            "
          >
            ChatGPT 6 có gì mới? Những thay đổi đáng chú ý sau bản cập nhật mới
          </h1>


          <p
            className="
              mt-3
              text-base
              leading-7
              text-[#666]
            "
          >
            OpenAI tiếp tục cải thiện khả năng suy luận,
            tốc độ phản hồi và trải nghiệm người dùng
            với phiên bản mới nhất.
          </p>


          <div
            className="
              mt-5
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                h-9
                w-9
                rounded-full
                bg-gray-200
              "
            />


            <div className="text-sm">

              <p className="font-medium text-[#222]">
                Từ Đến
              </p>

              <p className="text-[#777]">
                3 phút trước
              </p>

            </div>

          </div>


        </div>


      </article>



      {/* Side articles */}

      <aside
        className="
          space-y-4
          lg:col-span-4
        "
      >

        {[1,2,3].map((item)=>(

          <article
            key={item}
            className="
              flex
              gap-4
              border-b
              border-[#e8e8e8]
              pb-4
            "
          >

            <div
              className="
                relative
                h-24
                w-32
                shrink-0
                overflow-hidden
                rounded-xl
              "
            >

              <Image
                src={`https://images.unsplash.com/photo-1518770660439-4636190af475`}
                alt="technology"
                fill
                sizes="128px"
                className="object-cover"
              />

            </div>



            <div className="min-w-0">


              <span
                className="
                  text-xs
                  font-medium
                  text-blue-600
                "
              >
                Công nghệ
              </span>



              <h3
                className="
                  mt-1
                  line-clamp-3
                  text-base
                  font-semibold
                  leading-6
                  text-[#202124]
                "
              >
                Bài viết công nghệ nổi bật số {item}
              </h3>



              <p
                className="
                  mt-2
                  text-xs
                  text-[#777]
                "
              >
                2 giờ trước
              </p>


            </div>


          </article>


        ))}


      </aside>


    </section>
  );
}