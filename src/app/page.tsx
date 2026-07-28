import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Menu from "@/components/home/Menu";
import Footer from "@/components/layout/Footer";
import Assistant from "@/components/ai/Assistant";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Footer />
      <Assistant />
    </main>
  );
}