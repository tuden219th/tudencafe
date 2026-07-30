import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://tudencafe.com",
    "X-Title": "TuDen Cafe",
  },
});

export async function askAI(message: string) {
  const completion = await client.chat.completions.create({
    model: "deepseek/deepseek-v3.2-exp",
    messages: [
      {
        role: "system",
        content:
          "Bạn là AI của quán cà phê Từ Đến. Trả lời ngắn gọn, thân thiện bằng tiếng Việt.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0].message.content ?? "";
}