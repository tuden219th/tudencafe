import OpenAI from "openai";

// Dùng để kiểm tra API có tồn tại hay không
export async function GET() {
  return Response.json({
    status: "OK",
    message: "AI TuDen API is running",
  });
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      return Response.json(
        {
          error: "Thiếu OPENROUTER_API_KEY",
        },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": "https://tudencafe.com", // đổi khi deploy
        "X-Title": "TuDen Cafe",
      },
    });

    const { message } = await req.json();

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

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        error: error?.message || "Có lỗi xảy ra",
      },
      { status: 500 }
    );
  }
}