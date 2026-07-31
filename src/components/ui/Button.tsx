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

    h-14
    px-8

    rounded-full

    text-[15px]
    font-medium
    tracking-[0.01em]

    transition
    duration-300

    whitespace-nowrap
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-[var(--primary)]
      text-white

      border
      border-[var(--primary)]

      hover:bg-[#B85E22]
    `,

    secondary: `
      bg-transparent
      text-[var(--foreground)]

      border
      border-[#D8CCBF]

      hover:border-[var(--primary)]
      hover:text-[var(--primary)]
    `,

    ghost: `
      bg-transparent
      text-[var(--foreground)]

      hover:text-[var(--primary)]
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