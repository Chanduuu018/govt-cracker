import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({
  children,
  className = "",
  id,
}: SectionProps) => {
  return (
<section id={id} className={`py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;