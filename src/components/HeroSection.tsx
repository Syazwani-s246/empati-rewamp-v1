import { ArrowRight, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import empatiLogo from "@/assets/empati-logo.png";
import heroCommunity from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCommunity} 
          alt="Community support circle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with animation */}
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-background/20 backdrop-blur-sm rounded-full shadow-healing animate-float">
              <img 
                src={empatiLogo} 
                alt="NGO Empati Butterfly Logo" 
                className="h-16 w-16"
              />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-hero-gradient">Empathy</span>{" "}
            <span className="text-foreground">in Action</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Where community members and volunteers unite as one empathy family, 
            transforming lives through compassionate mental health support and healing.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10 animate-slide-up">
            <div className="flex items-center gap-3 text-lg">
              <div className="p-2 bg-primary/20 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold">2,500+ Lives Touched</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <div className="p-2 bg-secondary/20 rounded-full">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-semibold">One Empathy Family</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
            >
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-background/20 backdrop-blur-sm hover:bg-background/30"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Mission statement */}
          <div className="mt-16 p-6 bg-background/10 backdrop-blur-sm rounded-2xl border border-border/20 shadow-card animate-fade-in">
            <p className="text-lg italic text-foreground/90 leading-relaxed">
              "We believe that healing happens in community. Every member and volunteer 
              brings unique strengths to our empathy family, creating a supportive 
              ecosystem where mental wellness flourishes through shared compassion."
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;