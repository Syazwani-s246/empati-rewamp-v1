import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapySession from "@/assets/therapy-session.jpg";
import Timeline from "./Timeline";
import ValuesGrid from "./ValuesGrid";
import MissionStatement from "./MissionStatement";

const AboutSection = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const aboutHeaderRef = useRef<HTMLDivElement>(null);
  const [isTimelineInView, setIsTimelineInView] = useState(false);

  // Intersection Observer for timeline visibility
  useEffect(() => {
    if (!showTimeline || !timelineRef.current) {
      setIsTimelineInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTimelineInView(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1, // Show button when 10% of timeline is visible
        rootMargin: "-100px 0px -100px 0px" // Add some margin for better UX
      }
    );

    observer.observe(timelineRef.current);

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [showTimeline]);

  // Handle timeline close
  const handleCloseTimeline = () => {
    setShowTimeline(false);
    // Smooth scroll back to about header
    if (aboutHeaderRef.current) {
      aboutHeaderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Smooth scroll to timeline when opened
  useEffect(() => {
    if (showTimeline && timelineRef.current) {
      setTimeout(() => {
        timelineRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }, [showTimeline]);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={aboutHeaderRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mengenai <span className="text-gradient">Empati</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empati diasaskan dengan visi untuk membina masyarakat yang bebas stigma
            dan prejudis. Kami percaya bahawa proses penyembuhan adalah perjalanan
            kolektif, "Sama-Sama Sembuh".
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm hover-lift">
              <img
                src={therapySession}
                alt="Community therapy session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Melangkaui Sokongan Tradisional
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Di NGO Empati, kami percaya bahawa penyembuhan bukan sekadar proses
              individu, tetapi perjalanan kolaboratif. Setiap orang, sama ada ahli
              komuniti yang mencari sokongan atau sukarelawan yang menawarkan
              kemahiran, membawa nilai dan perspektif tersendiri dalam misi
              penyembuhan bersama.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pendekatan kami mewujudkan ruang sokongan dua hala: hari ini seseorang
              mungkin hadir sebagai peserta, tetapi esok mereka boleh menjadi
              penyokong sebaya; manakala sukarelawan pula sering menemui
              kesembuhan melalui khidmat yang diberikan. Inilah ekosistem sokongan
              lestari yang bakal kukuh dengan setiap individu baharu.
            </p>

            {/* CTA button */}
            <div className="text-center mt-12">
              <Button
                variant="butterfly"
                size="lg"
                onClick={() => setShowTimeline(!showTimeline)}
              >
                {showTimeline ? "Kembali Ringkas" : "Lihat Perjalanan Kami"}
              </Button>
            </div>
          </div>
        </div>

        {/* Timeline (toggle) */}
        {showTimeline && (
          <div ref={timelineRef} className="mb-20">
            <Timeline />
          </div>
        )}

        {/* Floating Close Button */}
        {showTimeline && isTimelineInView && (
          <button
            onClick={handleCloseTimeline}
            className="fixed top-1/2 right-0 z-50 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-3 rounded-l-lg shadow-lg hover:bg-gray-900 transition-all duration-200 flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            <span className="text-sm font-medium">Tutup</span>
          </button>
        )}

        {/* Values Grid */}
        <ValuesGrid />

        {/* Mission Statement */}
        <MissionStatement />
      </div>
    </section>
  );
};

export default AboutSection;