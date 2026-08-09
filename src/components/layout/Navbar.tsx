import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base = `
    inline-flex
    items-center
    justify-center

    whitespace-nowrap
    select-none

    font-semibold
    leading-none

    rounded-[2px]

    border

    transition-all
    duration-300
    ease-out

    active:scale-[0.98]

    disabled:pointer-events-none
    disabled:opacity-50
  `;

  const variants = {
    primary: `
      bg-[#C96A2B]
      !text-white
      border-[#C96A2B]

      tracking-[0.3px]

      shadow-none

      hover:bg-[#C96A2B]
      hover:-translate-y-0.5
    `,

    secondary: `
      bg-[var(--surface)]
      text-[var(--foreground)]

      border-[var(--border)]

      shadow-sm

      hover:border-[var(--primary)]
      hover:text-[var(--primary)]
      hover:-translate-y-0.5
      hover:shadow-md
    `,

    ghost: `
      bg-transparent
      text-[var(--foreground)]

      border-transparent

      hover:text-[var(--primary)]
    `,
  };

  const sizes = {
    sm: `
      h-10
      px-5
      text-sm
    `,

    md: `
      h-11
      px-7
      text-[14px]
    `,

    lg: `
      h-14
      px-10
      text-base
    `,
  };

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const content = loading ? "Loading..." : children;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || loading}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}