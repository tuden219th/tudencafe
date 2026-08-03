import { ReactNode } from "react";

type HeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Heading({
  title,
  subtitle,
  align = "left",
  className = "",
}: HeadingProps) {
  return (
    <div
      className={`
        mb-12
        ${align === "center" ? "text-center" : ""}
        ${className}
      `}
    >
      <h2>{title}</h2>

      {subtitle && (
        <p
          className={`
            mt-4
            max-w-2xl
            text-[var(--text-light)]
            leading-8
            ${
              align === "center"
                ? "mx-auto"
                : ""
            }
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}