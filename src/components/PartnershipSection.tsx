import { Heart, Award, Users, Building2, Stethoscope, GraduationCap } from "lucide-react";

const PartnershipSection = () => {
  const partners = [
    {
      id: 1,
      name: "National Mental Health Alliance",
      type: "Healthcare Partner",
      icon: Stethoscope,
      description: "Providing clinical expertise and professional development resources",
      category: "healthcare"
    },
    {
      id: 2,
      name: "Community Wellness Foundation",
      type: "Funding Partner",
      icon: Heart,
      description: "Supporting our community programs and volunteer training initiatives",
      category: "foundation"
    },
    {
      id: 3,
      name: "University Psychology Department",
      type: "Academic Partner",
      icon: GraduationCap,
      description: "Research collaboration and evidence-based practice development",
      category: "academic"
    },
    {
      id: 4,
      name: "Local Health District",
      type: "Government Partner",
      icon: Building2,
      description: "Integration with public health services and policy advocacy",
      category: "government"
    },
    {
      id: 5,
      name: "Peer Support Network",
      type: "Community Partner",
      icon: Users,
      description: "Shared resources and collaborative peer support programs",
      category: "community"
    },
    {
      id: 6,
      name: "Mental Health Innovation Lab",
      type: "Research Partner",
      icon: Award,
      description: "Advancing innovative approaches to community mental health",
      category: "research"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "healthcare": return "text-blue-600 bg-blue-50 border-blue-200";
      case "foundation": return "text-primary bg-primary/10 border-primary/20";
      case "academic": return "text-purple-600 bg-purple-50 border-purple-200";
      case "government": return "text-gray-600 bg-gray-50 border-gray-200";
      case "community": return "text-secondary bg-secondary/10 border-secondary/20";
      case "research": return "text-orange-600 bg-orange-50 border-orange-200";
      default: return "text-primary bg-primary/10 border-primary/20";
    }
  };

  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our</span> Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building stronger mental health support through strategic partnerships 
            that amplify our collective impact and reach.
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Active Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Years Collaborating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Joint Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">3,000+</div>
            <div className="text-sm text-muted-foreground">Lives Impacted</div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div 
                key={partner.id}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${getCategoryColor(partner.category)} transition-all group-hover:scale-110`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(partner.category)}`}>
                      {partner.type}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
                
                {/* Collaboration indicator */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Heart className="h-3 w-3 text-primary" />
                    <span>Active Partnership</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Values */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 mb-16 border border-primary/10">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Our Partnership Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Shared Mission</h4>
              <p className="text-sm text-muted-foreground">
                Aligned commitment to improving mental health outcomes for all community members.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Collaborative Impact</h4>
              <p className="text-sm text-muted-foreground">
                Working together to create sustainable change that benefits our entire empathy family.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Excellence Together</h4>
              <p className="text-sm text-muted-foreground">
                Maintaining the highest standards while fostering innovation and growth.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Interested in Partnership?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of dedicated partners working to transform mental health support 
            in our community and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors shadow-soft">
              Explore Partnership Opportunities
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;