import Ani from "@/components/Ani";
import Header from "@/components/Header";
import Hero from "@/components/Herocopy";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Cta from "@/components/new/Cta";
export default function page() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* <Animated /> */}
      <div className="mt-15 hidden md:block">
        <Ani />
      </div>
      <div className="min-h-screen bg-white ">
        <Header />
        <Hero />
        <Testimonials />
        <Cta />
        <ProjectShowcase />
        <Services />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
