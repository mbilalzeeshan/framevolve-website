import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/hero/Stats";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
    </>
  );
}
