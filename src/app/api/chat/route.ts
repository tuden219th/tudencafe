import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "TuDen Cafe",
  },
});

// Dùng để kiểm tra API có tồn tại hay không
export async function GET() {
  return Response.json({
    status: "OK",
    message: "AI TuDen API is running",
  });
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      // Tạm thời để nguyên, lát nữa nếu cần sẽ đổi model
      model: "deepseek/deepseek-v3.2-exp",
      messages: [
        {
          role: "system",
          content:
            "Bạn là AI của quán cà phê Từ đến. Trả lời ngắn gọn, thân thiện bằng tiếng Việt.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        error: error?.message ?? "Có lỗi xảy ra",
      },
      { status: 500 }
    );
  }
}