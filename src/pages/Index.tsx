import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnershipSection from "@/components/PartnershipSection";
import PressSection from "@/components/PressSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-10">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        {/* <ImpactSection /> */}
        {/* <TestimonialsSection /> */}
        <PartnershipSection />
        <PressSection />
        <GetInvolvedSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
