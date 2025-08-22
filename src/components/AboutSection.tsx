import { Heart, Users, Lightbulb, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapySession from "@/assets/therapy-session.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is guided by empathy, understanding, and genuine care for mental wellbeing."
    },
    {
      icon: Users,
      title: "Community Unity",
      description: "Members and volunteers work together as one family, breaking down traditional hierarchies."
    },
    {
      icon: Lightbulb,
      title: "Innovative Approaches",
      description: "We blend evidence-based practices with community wisdom for holistic healing."
    },
    {
      icon: HandHeart,
      title: "Collaborative Impact",
      description: "Every person contributes their unique strengths to create meaningful change."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Approach</span> to Healing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NGO Empati reimagines mental health support by creating a unified community 
            where traditional boundaries between staff and volunteers dissolve into 
            one empathy family working toward shared healing.
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
            <div className="absolute -bottom-6 -right-6 p-4 bg-primary rounded-2xl shadow-healing text-primary-foreground">
              <Heart className="h-8 w-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Beyond Traditional Mental Health
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've evolved beyond the conventional model of service providers and recipients. 
              At NGO Empati, we recognize that healing is a collaborative journey where 
              everyone—whether joining as a community member seeking support or as a 
              volunteer offering skills—brings valuable perspectives to our shared mission.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our innovative approach creates space for mutual support, where today's 
              program participant might become tomorrow's peer counselor, and volunteers 
              often find their own healing through service. This creates a sustainable 
              ecosystem of care that grows stronger with each person who joins our family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero">
                Join Our Family
              </Button>
              <Button variant="outline">
                Our Programs
              </Button>
            </div>
          </div>
        </div>

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

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-secondary/10 rounded-3xl border border-secondary/20 shadow-warm">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
              "We believe that everyone deserves access to mental health support, 
              and everyone has something valuable to contribute to the healing of others."
            </blockquote>
            <cite className="text-lg text-primary font-semibold">
              — The NGO Empati Community
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;