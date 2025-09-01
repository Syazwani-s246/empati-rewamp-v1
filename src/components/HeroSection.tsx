import { ArrowRight, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import empatiLogo from "@/assets/empati-logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-16 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background to-accent/20 pb-24"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with animation */}
          <div className="mb-8 flex justify-center mt-12">
            <img
              src={empatiLogo}
              alt="NGO Empati"
              className="h-24 w-24 rounded-full object-cover border-2 border-primary shadow-md transition-transform duration-500 hover:scale-105 hover:animate-gentle-bounce"
            />
          </div>



          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            <span className="text-butterfly-gradient">Empati</span>{" "}
            <span className="text-foreground"> Bersama </span>
          </h1>

          {/* Clarification: what Empati is */}
          <p className="text-base md:text-lg text-center text-foreground/60 italic mb-4 animate-fade-in">
            Sebuah inisiatif oleh <strong> NGO Empati</strong>, kelab advokasi pulih mental
          </p>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Komuniti yang peduli, tempat semua suara didengari. Kerana empati adalah bahasa yang difahami hati, walau tanpa kata.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 animate-slide-up">
            <div className="flex items-center gap-3 text-lg">
              <div className="p-2 bg-primary/20 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold">Satu Keluarga Empati</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <div className="p-2 bg-secondary/20 rounded-full">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-semibold">Ratusan Senyuman Tercipta</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              variant="butterfly"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Sertai Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="warm"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Ketahui Lebih Lanjut
            </Button>
          </div>

          {/* Mission statement */}
          {/* <div className="mt-16 p-6 bg-background/40 backdrop-blur-md rounded-2xl border border-primary/30 shadow-lg animate-fade-in">

            <p className="text-lg italic text-foreground/90 leading-relaxed">
              "Kami percaya kesembuhan lahir dari sokongan komuniti. Setiap ahli & sukarelawan membawa kekuatan tersendiri, mencipta ruang di mana kasih sayang menjadi sumber pemulihan."
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;