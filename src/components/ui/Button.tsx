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
    px-8

    rounded-xl

    text-[15px]
    font-medium
    tracking-wide

    transition-all
    duration-300
    ease-out

    whitespace-nowrap
    select-none

    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-[var(--primary)]
      text-[#F5EBDD]

      border
      border-[#D9874B]

      shadow-sm

      hover:-translate-y-0.5
      hover:shadow-md
      hover:shadow-black/20

      active:translate-y-0
    `,

    secondary: `
      bg-[#F5EBDD]
      text-[var(--foreground)]

      border
      border-black/10

      shadow-sm

      hover:bg-white
      hover:border-[var(--primary)]
      hover:text-[var(--primary)]

      hover:-translate-y-0.5
      hover:shadow-md
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
      <Link
        href={href}
        className={classes}
      >
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