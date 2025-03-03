import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectShowcase />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
