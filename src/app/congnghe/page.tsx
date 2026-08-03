import Navbar from "@/components/technology/Navbar";
import Stories from "@/components/technology/Stories";
import Hero from "@/components/technology/Hero";
import CategoryNav from "@/components/technology/CategoryNav";
import LatestArticles from "@/components/technology/LatestArticles";
import TechnologyFooter from "@/components/technology/TechnologyFooter";

export default function CongNghePage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#f7f8fa]
      "
    >

      <Navbar />


      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          py-6
          sm:px-5
          lg:px-10
        "
      >

        <Stories />

        <Hero />

        <CategoryNav />

        <LatestArticles />

        <TechnologyFooter />


      </div>


    </main>
  );
}