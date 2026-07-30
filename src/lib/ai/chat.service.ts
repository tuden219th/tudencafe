import OpenAI from "openai";
import { getAIKnowledge } from "./knowledge.service";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://tudencafe.com",
    "X-Title": "TuDen Cafe",
  },
});


export async function askAI(message: string) {

  const knowledge = await getAIKnowledge();


  const completion = await client.chat.completions.create({

    model: "deepseek/deepseek-v3.2-exp",

    messages: [

      {
        role: "system",
        content: `
Bạn là AI Assistant chính thức của quán cà phê Từ Đến.

Vai trò:
- Là nhân viên tư vấn khách hàng online của quán.
- Hỗ trợ khách tìm hiểu quán, menu, dịch vụ.
- Trả lời bằng tiếng Việt.
- Thân thiện, tự nhiên như nhân viên thật.

Quy tắc:
- Chỉ sử dụng thông tin được cung cấp bên dưới.
- Không tự bịa thông tin.
- Nếu chưa có thông tin, hãy nói khách liên hệ quán để được hỗ trợ.

Dữ liệu kiến thức của Từ Đến Coffee:

${knowledge}


Cách trả lời:
- Ngắn gọn.
- Lịch sự.
- Có thể dùng "Dạ", "ạ" khi phù hợp.
- Ưu tiên giúp khách muốn ghé quán.
        `,
      },


      {
        role: "user",
        content: message,
      },

    ],

  });


  return completion.choices[0].message.content ?? "";

}