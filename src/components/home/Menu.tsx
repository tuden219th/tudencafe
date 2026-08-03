const menuStops = [
  {
    number: "01",
    stage: "START",
    title: "Cà phê Việt",
    description: "Điểm bắt đầu quen thuộc",
    items: ["Đen", "Nâu", "Bạc xỉu"],
    price: "25K+",
  },
  {
    number: "02",
    stage: "EXPLORE",
    title: "Espresso Bar",
    description: "Khám phá những chuyển động mới",
    items: [
      "Espresso",
      "Americano",
      "Latte",
      "Cappuccino",
    ],
    price: "35K+",
  },
  {
    number: "03",
    stage: "ARRIVE",
    title: "Tea & Food",
    description: "Những khoảnh khắc nhẹ nhàng",
    items: [
      "Trà",
      "Fruit Tea",
      "Bánh ngọt",
    ],
    price: "",
  },
];


export default function Menu() {
  return (
    <section
      id="menu"
      className="py-32"
    >
      <div className="container">

        {/* Header */}
        <div className="mb-20">

          <p className="
            mb-5
            text-sm
            tracking-[0.35em]
            text-[var(--primary)]
          ">
            MENU
          </p>


          <h2 className="
            text-5xl
            leading-tight
          ">
            Những điểm dừng
          </h2>


          <p className="
            mt-6
            max-w-xl
            text-lg
            text-black/60
          ">
            Từ hương vị quen thuộc,
            đến những trải nghiệm mới.
          </p>

        </div>



        {/* Menu Journey */}
        <div className="
          grid
          gap-16
          md:grid-cols-3
        ">

          {menuStops.map((item) => (

            <article
              key={item.number}
              className="
                group
                border-t
                border-black/10
                pt-8
                transition-transform
                duration-300
                hover:-translate-y-2
              "
            >

              {/* Number + Stage */}
              <div className="
                flex
                items-center
                justify-between
                mb-12
              ">

                <span className="
                  text-sm
                  tracking-[0.35em]
                  text-[var(--primary)]
                ">
                  {item.number}
                </span>


                <span className="
                  text-xs
                  tracking-[0.35em]
                  text-black/40
                ">
                  {item.stage}
                </span>

              </div>



              {/* Title */}
              <h3 className="
                text-3xl
                font-medium
                tracking-tight
              ">
                {item.title}
              </h3>



              <p className="
                mt-4
                text-black/50
              ">
                {item.description}
              </p>



              {/* Divider */}
              <div className="
                my-10
                h-px
                bg-black/10
              " />



              {/* Items */}
              <ul className="
                space-y-3
                text-lg
              ">
                {item.items.map((drink) => (
                  <li
                    key={drink}
                  >
                    {drink}
                  </li>
                ))}
              </ul>



              {/* Price */}
              {item.price && (
                <p className="
                  mt-10
                  text-[var(--primary)]
                  tracking-wide
                ">
                  {item.price}
                </p>
              )}


            </article>

          ))}

        </div>

      </div>
    </section>
  );
}