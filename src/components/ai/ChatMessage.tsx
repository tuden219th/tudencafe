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
      className={`flex w-full items-end gap-2 min-w-0 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar AI */}
      {!isUser && (
        <div className="mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C96A2B] to-[#994411] text-xs text-white shadow-xs">
          ☕
        </div>
      )}

      {/* Bubble tin nhắn */}
      <div
        className={`relative break-words text-[15px] leading-[1.65] shadow-xs ${
          isUser
            ? "max-w-[82%] rounded-[20px] rounded-br-sm bg-gradient-to-br from-[#C96A2B] to-[#B3581E] px-4 py-2.5 text-white"
            : "max-w-[85%] rounded-[20px] rounded-bl-sm border border-[#EADBCC] bg-white px-4 py-3 text-[#3B2416]"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap leading-relaxed select-text m-0 p-0 text-white font-normal">
            {message.content}
          </p>
        ) : (
          <div className="space-y-2 text-[15px] leading-relaxed select-text m-0 p-0">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0 leading-[1.65]">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[#23150D]">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 list-none pl-0 space-y-1.5 last:mb-0">
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