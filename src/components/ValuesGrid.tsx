import { values } from "../data/aboutData";

const ValuesGrid: React.FC = () => {
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-foreground mb-10">
        Keistimewaan Kami
      </h3>

      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="p-6 bg-card rounded-2xl shadow-card hover-lift border border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-foreground">
              {value.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesGrid;