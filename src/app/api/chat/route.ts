import { askAI } from "@/lib/ai/chat.service";
import {
  getOrCreateConversation,
} from "@/lib/db/repositories/conversation.repository";
import {
  saveMessage,
} from "@/lib/db/repositories/message.repository";

export async function GET() {
  return Response.json({
    status: "OK",
    message: "AI TuDen API is running",
  });
}

export async function POST(req: Request) {
  try {
    // 1. Kiá»ƒm tra API key

    if (!process.env.OPENROUTER_API_KEY) {
      return Response.json(
        {
          error: "Thiáº¿u OPENROUTER_API_KEY",
        },
        { status: 500 }
      );
    }

    // 2. Äá»c request

    const body = await req.json();

    const message = body.message;
    const sessionId = body.sessionId;

    if (
      typeof message !== "string" ||
      typeof sessionId !== "string"
    ) {
      return Response.json(
        {
          error: "Thiáº¿u message hoáº·c sessionId",
        },
        { status: 400 }
      );
    }

    // 3. Láº¥y hoáº·c táº¡o Conversation

    const conversation =
      await getOrCreateConversation(sessionId);

    // 4. LÆ°u cÃ¢u há»i cá»§a User

    await saveMessage(
      conversation.id,
      "user",
      message
    );

    // 5. Gá»i AI

    const aiResult = await askAI(
      message,
      conversation.id
    );

    // 6. LÆ°u cÃ¢u tráº£ lá»i cá»§a AI
    // + model
    // + prompt tokens
    // + completion tokens

    await saveMessage(
      conversation.id,
      "assistant",
      aiResult.reply,
      {
        model: aiResult.model,
        promptTokens: aiResult.promptTokens,
        completionTokens:
          aiResult.completionTokens,
      }
    );

    // 7. Tráº£ káº¿t quáº£ vá» frontend

    return Response.json({
      reply: aiResult.reply,
      model: aiResult.model,
    });
  } catch (error: unknown) {
    console.error(
      "AI API error:",
      error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "CÃ³ lá»—i xáº£y ra",
      },
      { status: 500 }
    );
  }
}
