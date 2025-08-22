import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PressSection from "@/components/PressSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <EventsSection />
        <GallerySection />
        <ImpactSection />
        <TestimonialsSection />
        <PressSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
