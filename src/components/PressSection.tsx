import { ExternalLink } from "lucide-react";
import { pressItems } from "@/data/pressData";

const PressSection = () => {
  return (
    <section
      id="press"
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Pengiktirafan</span> Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pendekatan inovatif kami dalam kesihatan mental komuniti telah mendapat perhatian dan pengiktirafan daripada media utama serta industri penerbitan.
          </p>
        </div>

        {/* Media Coverage Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, index) => (
            <article
              key={item.id}
              className="group relative bg-gradient-to-br from-card via-card to-muted/10 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-6">
                {/* Publication Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-primary group-hover:text-primary-hover transition-colors">
                        {item.publication}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  {/* Optional: Article number or icon */}
                </div>

                {/* Article Content */}
                <h4 className="font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300 text-lg">
                  {item.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {item.summary}
                </p>

                {/* Read More Button */}
                <div className="pt-4 border-t border-border/30">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-all font-medium text-sm group/btn"
                  >
                    <span>Baca artikel</span>
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
