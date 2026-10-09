"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "./types";

type Props = {
  message: Message;
};

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex w-full justify-end min-w-0 my-1">
        <div className="max-w-[82%] sm:max-w-[78%] rounded-2xl rounded-tr-xs bg-[#262626] px-4 py-2.5 text-white shadow-xs">
          <p className="whitespace-pre-wrap text-[14.5px] leading-relaxed font-normal select-text m-0 p-0 text-white">
            {message.content}
          </p>
        </div>
      </div>
    );
  }

  // AI Assistant message: Dạng luồng hội thoại mở như Antigravity IDE / Claude
  return (
    <div className="flex w-full items-start gap-3 min-w-0 my-2">
      {/* Icon Barista nhỏ gọn */}
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2A1D15] text-xs text-white shadow-xs">
        ☕
      </div>

      {/* Nội dung tin nhắn AI mở, thoáng đãng */}
      <div className="flex-1 min-w-0 text-[14.5px] leading-[1.7] text-gray-800">
        <div className="mb-1 text-[12px] font-semibold tracking-wide text-gray-400">
          Từ Đến AI
        </div>

        <div className="space-y-2 select-text">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="mb-2.5 last:mb-0 leading-[1.7] text-gray-800">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-950">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="mb-2.5 list-disc pl-4 space-y-1.5 text-gray-800 last:mb-0">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-2.5 list-decimal pl-4 space-y-1.5 text-gray-800 last:mb-0">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-[1.65] pl-0.5">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-2 border-l-2 border-gray-300 pl-3 italic text-gray-600">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C96A2B] underline decoration-[#C96A2B]/40 underline-offset-2 hover:decoration-[#C96A2B]"
                >
                  {children}
                </a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}