type CartProps = {
  count?: number;
  total?: number;
};


export default function Cart({
  count = 0,
  total = 0,
}: CartProps) {


  if (count === 0) {
    return null;
  }


  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        px-5
        pb-5
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-md
          items-center
          justify-between
          rounded-[28px]
          bg-[#294A3A]
          px-6
          py-5
          text-white
          shadow-2xl
        "
      >

        <div>

          <p className="text-sm opacity-80">
            🛒 {count} món
          </p>


          <p className="mt-1 text-xl font-bold">
            {total.toLocaleString("vi-VN")}đ
          </p>

        </div>



        <button
          className="
            rounded-full
            bg-[#F5EBDD]
            px-6
            py-3
            font-semibold
            text-[#294A3A]
            transition
            hover:scale-105
          "
        >
          Đặt hàng
        </button>


      </div>

    </div>

  );
}