"use client";

import { useEffect, useRef, useState } from "react";

type TextFlippingBoardProps = {
  text: string;
  className?: string;
};

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function TextFlippingBoard({
  text,
  className = "",
}: TextFlippingBoardProps) {
  const [display, setDisplay] = useState(text);

  const frame = useRef(0);
  const animationRef = useRef<number | null>(null);
  const lastTime = useRef(0);

  useEffect(() => {
    frame.current = 0;
    setDisplay(text);

    const speed = 40;

    const animate = (time: number) => {
      if (time - lastTime.current >= speed) {
        lastTime.current = time;

        frame.current++;

        setDisplay(() => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "\n") {
                return char;
              }

              if (index < frame.current) {
                return char;
              }

              return CHARSET[
                Math.floor(Math.random() * CHARSET.length)
              ];
            })
            .join("");
        });

        if (frame.current <= text.length) {
          animationRef.current =
            requestAnimationFrame(animate);
        } else {
          setDisplay(text);
        }
      } else {
        animationRef.current =
          requestAnimationFrame(animate);
      }
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text]);

  return (
    <div
      className={`
        bg-transparent
        border-0
        shadow-none
        rounded-none

        p-0

        font-sans
        text-xl
        md:text-2xl
        font-medium
        leading-relaxed
        tracking-wide

        whitespace-pre-line

        text-[var(--foreground)]

        transition-all
        duration-300

        ${className}
      `}
    >
      {display}
    </div>
  );
}