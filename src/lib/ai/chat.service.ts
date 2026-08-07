import OpenAI from "openai";
import { getAIKnowledge } from "./knowledge.service";
import {
  getConversationMessages,
} from "@/lib/db/repositories/message.repository";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://tudencafe.com",
    "X-Title": "TuDen Cafe",
  },
});

const AI_MODELS = [
  "google/gemma-4-31b-it:free",
  "openrouter/free",
];

function shouldFallback(error: unknown) {
  if (!(error instanceof Error)) {
    return true;
  }

  const errorMessage = error.message.toLowerCase();

  return (
    errorMessage.includes("429") ||
    errorMessage.includes("rate limit") ||
    errorMessage.includes("quota") ||
    errorMessage.includes("provider") ||
    errorMessage.includes("503") ||
    errorMessage.includes("502") ||
    errorMessage.includes("500")
  );
}

export async function askAI(
  message: string,
  conversationId: string
) {
  const knowledge = await getAIKnowledge();

  const history = await getConversationMessages(
    conversationId,
    9
  );

  const systemPrompt =
    "Báº¡n lÃ  AI Assistant chÃ­nh thá»©c cá»§a quÃ¡n cÃ  phÃª Tá»« Äáº¿n.\n\n" +
    "Vai trÃ²:\n" +
    "- LÃ  nhÃ¢n viÃªn tÆ° váº¥n khÃ¡ch hÃ ng online cá»§a quÃ¡n.\n" +
    "- Há»— trá»£ khÃ¡ch tÃ¬m hiá»ƒu quÃ¡n, menu vÃ  dá»‹ch vá»¥.\n" +
    "- Tráº£ lá»i báº±ng tiáº¿ng Viá»‡t.\n" +
    "- ThÃ¢n thiá»‡n, tá»± nhiÃªn nhÆ° má»™t nhÃ¢n viÃªn tháº­t.\n\n" +
    "Quy táº¯c:\n" +
    "- Chá»‰ sá»­ dá»¥ng thÃ´ng tin Ä‘Æ°á»£c cung cáº¥p bÃªn dÆ°á»›i.\n" +
    "- KhÃ´ng tá»± bá»‹a thÃ´ng tin.\n" +
    "- Náº¿u chÆ°a cÃ³ thÃ´ng tin, hÃ£y nÃ³i khÃ¡ch liÃªn há»‡ quÃ¡n Ä‘á»ƒ Ä‘Æ°á»£c há»— trá»£.\n" +
    "- Tráº£ lá»i ngáº¯n gá»n, dá»… hiá»ƒu.\n" +
    '- CÃ³ thá»ƒ dÃ¹ng "Dáº¡", "áº¡" khi phÃ¹ há»£p.\n' +
    "- KhÃ´ng nháº¯c Ä‘áº¿n model AI.\n" +
    "- KhÃ´ng nháº¯c Ä‘áº¿n API.\n" +
    "- KhÃ´ng nháº¯c Ä‘áº¿n OpenRouter.\n" +
    "- KhÃ´ng nÃ³i ráº±ng báº¡n Ä‘ang Ä‘á»c dá»¯ liá»‡u há»‡ thá»‘ng.\n" +
    "- Æ¯u tiÃªn giÃºp khÃ¡ch cÃ³ tráº£i nghiá»‡m tá»‘t vá»›i Tá»« Äáº¿n.\n\n" +
    "Dá»¯ liá»‡u kiáº¿n thá»©c cá»§a Tá»« Äáº¿n Coffee:\n\n" +
    knowledge;

  const messages = [
    {
      role: "system" as const,
      content: systemPrompt,
    },

    ...history.map((item) => ({
      role: item.role as "user" | "assistant",
      content: item.content,
    })),

    {
      role: "user" as const,
      content: message,
    },
  ];

  let lastError: unknown = null;

  for (const model of AI_MODELS) {
    try {
      console.log(
        "[TuDen AI] Trying model:",
        model
      );

      const completion =
        await client.chat.completions.create({
          model,
          messages,
        });

      const reply =
        completion.choices[0]?.message?.content ?? "";

      if (!reply.trim()) {
        throw new Error(
          "Model returned empty response"
        );
      }

      const actualModel =
        completion.model ?? model;

      console.log(
        "[TuDen AI] Success:",
        actualModel
      );

      console.log(
        "[TuDen AI] Usage:",
        completion.usage
      );

      return {
        reply,
        model: actualModel,
        promptTokens:
          completion.usage?.prompt_tokens ?? 0,
        completionTokens:
          completion.usage?.completion_tokens ?? 0,
      };
    } catch (error) {
      lastError = error;

      console.error(
        "[TuDen AI] Model failed:",
        model,
        error
      );

      if (!shouldFallback(error)) {
        throw error;
      }

      console.log(
        "[TuDen AI] Falling back to next model..."
      );
    }
  }

  console.error(
    "[TuDen AI] All models failed:",
    lastError
  );

  throw new Error(
    "Táº¥t cáº£ AI model hiá»‡n táº¡i Ä‘á»u khÃ´ng kháº£ dá»¥ng."
  );
}
