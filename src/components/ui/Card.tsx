import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-[var(--radius)]
        bg-[var(--surface)]
        border
        border-[var(--border)]
        shadow-[var(--shadow)]

        transition-all
        duration-300

        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-lg"
            : ""
        }

        p-6

        ${className}
      `}
    >
      {children}
    </div>
  );
}