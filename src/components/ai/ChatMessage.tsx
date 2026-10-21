"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { Coffee, Copy, Check, Sparkles } from "lucide-react";
import { Message } from "./types";

type Props = {
  message: Message;
};

export default function ChatMessage({ message }: Props) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="my-2 flex min-w-0 w-full justify-end"
      >
        <div
          style={{ padding: "12px 18px", borderRadius: "14px", borderBottomRightRadius: "3px" }}
          className="max-w-[84%] sm:max-w-[80%] bg-gradient-to-br from-[#381F12] to-[#221108] text-[#FFF9F3] shadow-[0_4px_16px_rgba(35,20,12,0.18)] border border-[#5A331D]/60"
        >
          <p
            style={{ margin: 0, lineHeight: 1.75 }}
            className="whitespace-pre-wrap text-[14.5px] font-normal select-text"
          >
            {message.content}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="group relative my-2.5 flex min-w-0 w-full items-start gap-3"
    >
      {/* Avatar AI */}
      <div
        style={{ borderRadius: "10px" }}
        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-gradient-to-br from-[#3D2518] to-[#1F140E] text-white shadow-xs ring-1 ring-[#D8B996]/60"
      >
        <Coffee className="h-4 w-4 text-[#F5DEBE]" />
      </div>

      <div
        style={{ padding: "15px 20px", borderRadius: "14px", borderTopLeftRadius: "3px" }}
        className="relative min-w-0 max-w-[88%] sm:max-w-[84%] border border-[#E8DAC8] bg-[#FFFDF9] shadow-[0_3px_12px_rgba(42,29,21,0.04)]"
      >
        {/* Content Box */}
        <div
          style={{ lineHeight: 1.8 }}
          className="text-[14.5px] text-[#2F2119] select-text"
        >
          <div className="space-y-3">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => (
                  <p
                    style={{ margin: "0 0 12px 0", lineHeight: 1.8 }}
                    className="last:mb-0 text-[#34241B]"
                  >
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong
                    style={{ padding: "2px 6px" }}
                    className="font-bold text-[#A8521B] bg-[#C96A2B]/12 rounded"
                  >
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul
                    style={{ margin: "10px 0", paddingLeft: "24px" }}
                    className="list-disc space-y-2 text-[#34241B] last:mb-0"
                  >
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol
                    style={{ margin: "10px 0", paddingLeft: "24px" }}
                    className="list-decimal space-y-2 text-[#34241B] last:mb-0"
                  >
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li style={{ paddingLeft: "4px", lineHeight: 1.75 }}>
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote
                    style={{ margin: "12px 0", padding: "8px 14px" }}
                    className="border-l-3 border-[#C96A2B] bg-[#FAF3EA] rounded-r-xl italic text-[#5C3F2E]"
                  >
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#C96A2B] underline decoration-[#C96A2B]/40 underline-offset-2 hover:decoration-[#C96A2B] hover:text-[#994715]"
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

        {/* Discreet Copy Action at bottom */}
        <div
          style={{ marginTop: "12px", paddingTop: "8px" }}
          className="flex items-center justify-end border-t border-[#F3E8DB]/60"
        >
          <button
            onClick={handleCopy}
            title={copied ? "Đã sao chép" : "Sao chép"}
            aria-label="Sao chép nội dung"
            style={{ padding: "3px 8px" }}
            className="flex items-center gap-1 rounded-md text-[11px] font-medium text-[#9A7E6C] transition-all hover:bg-[#F2E5D6] hover:text-[#2A1D15]"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Đã chép</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Sao chép</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}