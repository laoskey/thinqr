import Ani from "@/components/Ani";
import Header from "@/components/Header";
import Hero from "@/components/Herocopy";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
export default function page() {
  return (
    <div className=" ">
      {/* <Animated /> */}
      <div className="mt-15 hidden md:block">
        <Ani />
      </div>
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <ProjectShowcase />
        <Services />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
