import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <Section
      id="home"
      className="
        relative
        overflow-hidden
        py-24
        lg:min-h-screen
        lg:flex
        lg:items-center
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[var(--background)]
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_left,rgba(201,106,43,.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(41,74,58,.08),transparent_30%)]
        "
      />

      <Container>
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          <HeroLeft />

          <HeroRight />
        </div>
      </Container>
    </Section>
  );
}