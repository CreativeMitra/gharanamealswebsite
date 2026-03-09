import Hero from "@/components/Hero";
import AboutBrief from "@/components/AboutBrief";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <AboutBrief />
      <Services />
      <Features />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}
