import { askAI } from "@/lib/ai/chat.service";
import { getOrCreateConversation } from "@/lib/db/repositories/conversation.repository";
import { saveMessage } from "@/lib/db/repositories/message.repository";

// Kiểm tra API
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

    const body = await req.json();

    const message = body.message;
    const sessionId = body.sessionId;

    if (
      typeof message !== "string" ||
      typeof sessionId !== "string"
    ) {
      return Response.json(
        {
          error: "Thiếu message hoặc sessionId",
        },
        { status: 400 }
      );
    }

    // Lấy hoặc tạo Conversation
    const conversation = await getOrCreateConversation(sessionId);

    // Lưu câu hỏi của User
    await saveMessage(conversation.id, "user", message);

    // AI trả lời
    const reply = (await askAI(message)) ?? "";

    // Lưu câu trả lời của AI
    await saveMessage(conversation.id, "assistant", reply);

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