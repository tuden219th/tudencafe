const categories = [
  "☕ Cà phê",
  "🫖 Trà",
  "🍵 Matcha",
  "🍰 Bánh",
];


export default function Category() {

  return (

    <div className="mb-8 flex gap-3 overflow-x-auto pb-2">


      {categories.map((item, index) => (

        <button

          key={item}

          className={`
            whitespace-nowrap
            rounded-full
            px-5
            py-3
            text-sm
            font-medium
            transition

            ${
              index === 0
                ? "bg-[#6B8E23] text-white"
                : "border border-[#E9DDCF] bg-white text-[#3B2416]"
            }
          `}

        >

          {item}

        </button>

      ))}


    </div>

  );
}