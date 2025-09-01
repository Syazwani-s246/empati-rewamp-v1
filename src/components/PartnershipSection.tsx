import { partners } from "@/data/partnersData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const PartnershipSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // scroll ~80% width

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Rakan <span className="text-gradient">Kerjasama</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Bersama membina sokongan kesihatan mental yang lebih kukuh melalui
          kerjasama strategik yang memberi impak dan capaian lebih meluas.
        </p>

        {/* Scrollable Banner */}
        <div className="relative">
          {/* Chevron kiri */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card shadow hover:bg-muted"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Container with auto-scroll + manual scroll */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden no-scrollbar animate-marquee hover:[animation-play-state:paused]"
          >


            {/* duplicate list untuk loop effect */}
            {[...partners, ...partners].map((partner, i) => {
              const IconComponent = partner.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-card px-6 py-4 rounded-xl shadow-card border border-border min-w-[280px]"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">{partner.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chevron kanan */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card shadow hover:bg-muted"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>



        {/* CTA */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Berminat untuk bekerjasama?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors shadow-soft">
              Hubungi Kami
            </button>

          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PartnershipSection;
