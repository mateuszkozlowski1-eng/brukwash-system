import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="tresc" className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
