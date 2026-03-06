import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutBrief from "@/components/AboutBrief";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutBrief />
        <Services />
        <Features />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
