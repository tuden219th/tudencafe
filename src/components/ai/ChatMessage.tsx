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
      className={`flex w-full items-start gap-2.5 min-w-0 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar AI */}
      {!isUser && (
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D47A3D] to-[#994411] text-xs text-white shadow-xs">
          ☕
        </div>
      )}

      {/* Bubble tin nhắn */}
      <div
        className={`relative break-words text-[15px] leading-[1.65] shadow-xs ${
          isUser
            ? "max-w-[80%] rounded-[20px] rounded-tr-[4px] bg-[#D47A3D] px-4.5 py-3 text-white"
            : "max-w-[85%] rounded-[20px] rounded-tl-[4px] border border-[#EAE1D5] bg-white px-4.5 py-3 text-[#2B180D]"
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
                  <strong className="font-semibold text-[#1F1108]">
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
                  <blockquote className="my-2 border-l-3 border-[#D47A3D] pl-3 italic text-[#6E5A49]">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#D47A3D] underline decoration-[#D47A3D]/50 underline-offset-2 hover:decoration-[#D47A3D]"
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