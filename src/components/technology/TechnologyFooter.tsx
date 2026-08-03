export default function TechnologyFooter() {
  return (
    <footer className="mt-16 border-t border-[#e5e5e5] bg-white">

      <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-8 px-5 py-10">


        {/* Brand */}
        <div className="col-span-4">

          <h2 className="
            text-xl
            font-bold
            text-[#202124]
          ">
            Từ Đến Công Nghệ
          </h2>


          <p className="
            mt-3
            text-sm
            leading-6
            text-[#666]
          ">
            Chia sẻ kiến thức công nghệ,
            AI, thiết bị và xu hướng số.
          </p>

        </div>



        {/* Categories */}
        <div className="col-span-2">

          <h3 className="font-bold text-[#202124]">
            Chủ đề
          </h3>


          <ul className="
            mt-4
            space-y-2
            text-sm
            text-[#666]
          ">

            <li>AI</li>
            <li>Điện thoại</li>
            <li>Máy tính</li>
            <li>Gaming</li>

          </ul>

        </div>



        {/* Community */}
        <div className="col-span-3">

          <h3 className="font-bold text-[#202124]">
            Cộng đồng
          </h3>


          <ul className="
            mt-4
            space-y-2
            text-sm
            text-[#666]
          ">

            <li>Bài viết</li>
            <li>Thảo luận</li>
            <li>Đánh giá</li>

          </ul>

        </div>



        {/* About */}
        <div className="col-span-3">

          <h3 className="font-bold text-[#202124]">
            Về Từ Đến
          </h3>


          <ul className="
            mt-4
            space-y-2
            text-sm
            text-[#666]
          ">

            <li>Website</li>
            <li>AI Assistant</li>
            <li>Liên hệ</li>

          </ul>

        </div>


      </div>



      <div className="
        border-t
        border-[#e5e5e5]
        py-5
        text-center
        text-sm
        text-[#777]
      ">
        © 2026 Từ Đến Coffee Technology
      </div>


    </footer>
  );
}