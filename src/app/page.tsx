import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Menu from "@/components/home/Menu";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Footer />
    </main>
  );
}