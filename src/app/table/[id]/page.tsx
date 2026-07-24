import Header from "@/components/order/Header";
import MenuCard from "@/components/order/MenuCard";
import Category from "@/components/order/Category";


type Props = {
  params: Promise<{
    id: string;
  }>;
};


const menu = [
  {
    id: 1,
    name: "Đen đá",
    description: "Đậm vị • Arabica",
    price: 25000,
  },
  {
    id: 2,
    name: "Nâu đá",
    description: "Sữa đặc • Truyền thống",
    price: 25000,
  },
  {
    id: 3,
    name: "Bạc xỉu",
    description: "Ít cà phê • Nhiều sữa",
    price: 30000,
  },
  {
    id: 4,
    name: "Cà phê cốt dừa",
    description: "Béo • Mịn • Signature",
    price: 35000,
  },
  {
    id: 5,
    name: "Americano",
    description: "Espresso • Nước nóng",
    price: 35000,
  },
  {
    id: 6,
    name: "Latte",
    description: "Espresso • Fresh Milk",
    price: 40000,
  },
];


export default async function TablePage({ params }: Props) {

  const { id } = await params;


  return (
    <main className="min-h-screen bg-[#F5EBDD] text-[#3B2416]">


      <div className="mx-auto w-full max-w-md px-5 py-8 md:px-8">


        <Header tableId={id} />


        <Category />


        <div className="mt-8 space-y-5 pb-28">


          {menu.map((item) => (

            <MenuCard

              key={item.id}

              id={item.id}

              name={item.name}

              description={item.description}

              price={item.price}

            />

          ))}


        </div>


      </div>


    </main>
  );
}