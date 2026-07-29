import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/hero/Stats";
import Services from "@/components/services/Services";
import FeaturedProject from "@/components/featured/FeaturedProject";
import Pricing from "@/components/pricing/Pricing";
import Contact from "@/components/contact/Contacts";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FeaturedProject />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
