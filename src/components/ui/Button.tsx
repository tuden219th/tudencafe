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

    h-12
    px-6

    rounded-full

    text-sm
    font-medium

    transition-all
    duration-300
    ease-out

    whitespace-nowrap
    select-none

    active:scale-[0.97]
  `;

  const variants = {
    primary: `
      bg-[var(--primary)]
      text-white

      border
      border-[var(--primary)]

      hover:-translate-y-0.5
      hover:shadow-xl
      hover:shadow-[rgba(201,106,43,0.25)]

      active:translate-y-0
    `,

    secondary: `
      bg-white
      text-[var(--foreground)]

      border
      border-neutral-300

      hover:bg-neutral-50
      hover:border-[var(--primary)]
      hover:text-[var(--primary)]
    `,

    ghost: `
      bg-transparent
      text-[var(--foreground)]

      hover:text-[var(--primary)]
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

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
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}