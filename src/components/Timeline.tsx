import { achievements } from "../data/aboutData";

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
          Perjalanan <span className="text-secondary-foreground">Empati</span>
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/30"></div>

          {achievements.map((achievement, index) => (
            <div
              key={achievement.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background/20 transform md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 shadow-warm">
                  <div className="text-2xl font-bold text-secondary mb-2">
                    {achievement.year}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;