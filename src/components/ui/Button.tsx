import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base = `
    inline-flex
    items-center
    justify-center
    gap-2

    h-12
    px-7

    rounded-full

    text-sm
    font-semibold
    tracking-[0.02em]

    transition-all
    duration-300

    active:scale-[0.98]
    hover:-translate-y-0.5

    whitespace-nowrap
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-[var(--primary)]
      text-white

      shadow-[0_12px_28px_rgba(201,106,43,.28)]

      hover:brightness-105
      hover:shadow-[0_18px_38px_rgba(201,106,43,.35)]
    `,

    secondary: `
      bg-white
      text-[var(--foreground)]

      border
      border-[#DED4C8]

      hover:border-[var(--primary)]
      hover:bg-[#FFF8F3]
    `,

    ghost: `
      bg-transparent
      text-[var(--foreground)]

      hover:bg-black/5
    `,
  };

  const classes = `
    ${base}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}