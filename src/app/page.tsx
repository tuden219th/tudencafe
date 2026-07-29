import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Journey from "@/components/home/Journey";
import CoreValues from "@/components/home/CoreValues";
import Menu from "@/components/home/Menu";
import Footer from "@/components/layout/Footer";
import Assistant from "@/components/ai/Assistant";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Journey />
      <CoreValues />
      <Menu />
      <Footer />
      <Assistant />
    </main>
  );
}