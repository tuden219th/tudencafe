"use client";

type Props = {
    onSelect: (text: string) => void;
};

const suggestions = [
    {
        icon: "☕",
        title: "Chọn cà phê",
        prompt: "Tư vấn cho tôi một ly cà phê phù hợp."
    },
    {
        icon: "🍰",
        title: "Chọn bánh",
        prompt: "Quán có những loại bánh nào?"
    },
    {
        icon: "📖",
        title: "Câu chuyện",
        prompt: "Ý nghĩa tên Từ đến là gì?"
    },
    {
        icon: "🎁",
        title: "Khuyến mãi",
        prompt: "Quán đang có chương trình ưu đãi gì?"
    }
];

export default function SuggestionCards({ onSelect }: Props) {

    return (

        <div className="grid grid-cols-2 gap-3">

            {suggestions.map((item) => (

                <button
                    key={item.title}
                    onClick={() => onSelect(item.prompt)}
                    className="rounded-2xl border border-orange-200 bg-orange-50 p-4 text-left transition hover:bg-orange-100"
                >

                    <div className="text-2xl">

                        {item.icon}

                    </div>

                    <div className="mt-2 font-semibold">

                        {item.title}

                    </div>

                </button>

            ))}

        </div>

    );

}