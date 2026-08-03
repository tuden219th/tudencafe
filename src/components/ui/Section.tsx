import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  contained = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
    >
      {contained ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}