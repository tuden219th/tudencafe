"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "./types";

type Props = {
  message: Message;
};

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full items-end gap-2.5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar AI */}
      {!isUser && (
        <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C96A2B] to-[#994411] text-xs text-white shadow-xs">
          ☕
        </div>
      )}

      {/* Bubble tin nhắn */}
      <div
        className={`max-w-[86%] break-words px-4 py-3 text-[15px] leading-[1.65] shadow-xs sm:max-w-[80%] sm:px-4.5 sm:py-3.5 ${
          isUser
            ? "rounded-[20px] rounded-br-xs bg-gradient-to-br from-[#C96A2B] to-[#B6561B] text-white shadow-[#C96A2B]/15"
            : "rounded-[20px] rounded-bl-xs border border-[#EADCCC] bg-white text-[#3B2416]"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="space-y-2 text-[15px] leading-relaxed select-text">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0 leading-[1.65]">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[#241309]">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 list-disc pl-4 space-y-1 last:mb-0">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-2 list-decimal pl-4 space-y-1 last:mb-0">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-[1.6]">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-2 border-l-3 border-[#C96A2B] pl-3 italic text-[#6E5A49]">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#C96A2B] underline decoration-[#C96A2B]/50 underline-offset-2 hover:decoration-[#C96A2B]"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}