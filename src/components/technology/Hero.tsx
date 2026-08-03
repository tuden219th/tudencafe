import Image from "next/image";

const sideArticles = [
  {
    title: "Apple chuẩn bị thay đổi lớn trên iPhone thế hệ mới",
    category: "Apple",
  },
  {
    title: "Laptop AI đang trở thành xu hướng mới năm nay",
    category: "Laptop",
  },
  {
    title: "Những công nghệ nổi bật đáng chú ý tuần này",
    category: "Công nghệ",
  },
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-12">

      {/* Main */}
      <article
        className="
          relative
          overflow-hidden
          rounded-2xl
          lg:col-span-8
          aspect-[16/10]
        "
      >

        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI technology"
          fill
          sizes="(max-width:1024px) 100vw, 66vw"
          className="object-cover"
        />


        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />


        <div
          className="
            absolute
            bottom-0
            p-6
            md:p-8
          "
        >

          <span
            className="
              rounded-full
              bg-white/20
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur
            "
          >
            AI
          </span>


          <h1
            className="
              mt-3
              max-w-3xl
              text-2xl
              font-bold
              leading-tight
              text-white
              md:text-4xl
            "
          >
            ChatGPT 6 có gì mới? Những thay đổi đáng chú ý sau bản cập nhật mới
          </h1>


          <p
            className="
              mt-3
              hidden
              max-w-xl
              text-sm
              leading-6
              text-white/80
              md:block
            "
          >
            OpenAI tiếp tục cải thiện khả năng suy luận,
            tốc độ phản hồi và trải nghiệm người dùng.
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
                h-8
                w-8
                rounded-full
                bg-white/30
              "
            />


            <div className="text-xs text-white">
              <p className="font-medium">
                Từ Đến
              </p>

              <p className="text-white/70">
                3 phút trước
              </p>
            </div>

          </div>

        </div>

      </article>



      {/* Side */}
      <aside
        className="
          space-y-4
          lg:col-span-4
        "
      >

        {sideArticles.map((item, index) => (

          <article
            key={index}
            className="
              flex
              gap-4
              rounded-xl
              bg-white
              p-3
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="technology"
                fill
                sizes="128px"
                className="object-cover"
              />

            </div>


            <div>

              <span
                className="
                  text-xs
                  font-medium
                  text-blue-600
                "
              >
                {item.category}
              </span>


              <h3
                className="
                  mt-1
                  line-clamp-3
                  text-sm
                  font-semibold
                  leading-5
                  text-[#202124]
                "
              >
                {item.title}
              </h3>


              <p className="mt-2 text-xs text-[#777]">
                2 giờ trước
              </p>

            </div>

          </article>

        ))}

      </aside>

    </section>
  );
}