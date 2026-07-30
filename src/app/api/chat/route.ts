import { askAI } from "@/lib/ai/chat.service";

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

    const { message } = await req.json();

    const reply = await askAI(message);

    return Response.json({
      reply,
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