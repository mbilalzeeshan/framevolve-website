import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/hero/Stats";
import Services from "@/components/services/Services";
import FeaturedProject from "@/components/featured/FeaturedProject";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FeaturedProject />
    </>
  );
}
