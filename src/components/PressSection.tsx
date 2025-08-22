import { ExternalLink, Calendar, Smartphone, Tablet, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import pressCoverage from "@/assets/press-coverage.jpg";

const PressSection = () => {
  const pressItems = [
    {
      id: 1,
      type: "newspaper",
      publication: "The Mental Health Tribune",
      title: "Revolutionary Approach: NGO Empati Breaks Down Barriers in Community Mental Health",
      date: "December 15, 2023",
      summary: "How one organization is redefining mental health support by creating a unified empathy family.",
      device: "newspaper",
      link: "#"
    },
    {
      id: 2,
      type: "digital",
      publication: "Community Health Weekly",
      title: "Volunteer-Powered Mental Health: The Success Story of NGO Empati",
      date: "November 28, 2023",
      summary: "Deep dive into how trained volunteers and professional staff collaborate for better outcomes.",
      device: "tablet",
      link: "#"
    },
    {
      id: 3,
      type: "digital",
      publication: "Mental Wellness Journal",
      title: "From Participant to Peer Counselor: Transformation Stories from NGO Empati",
      date: "October 10, 2023",
      summary: "Personal journeys showing how the organization's model creates sustainable healing.",
      device: "phone",
      link: "#"
    },
    {
      id: 4,
      type: "digital",
      publication: "Innovation in Health",
      title: "24/7 Crisis Support: How Community Volunteers Save Lives",
      date: "September 22, 2023",
      summary: "Award-winning crisis response network combining professional expertise with peer support.",
      device: "desktop",
      link: "#"
    },
    {
      id: 5,
      type: "newspaper",
      publication: "City Health Gazette",
      title: "Mental Health Innovation Award Goes to NGO Empati for Community-Centered Care",
      date: "August 14, 2023",
      summary: "Recognition for outstanding contribution to community mental health approaches.",
      device: "newspaper",
      link: "#"
    },
    {
      id: 6,
      type: "digital",
      publication: "Nonprofit Leadership Today",
      title: "Building Empathy Families: Leadership Lessons from NGO Empati",
      date: "July 30, 2023",
      summary: "How collaborative leadership principles create sustainable impact in mental health.",
      device: "tablet",
      link: "#"
    }
  ];

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case "phone": return Smartphone;
      case "tablet": return Tablet;
      case "desktop": return Monitor;
      case "newspaper": return Calendar;
      default: return Monitor;
    }
  };

  const getDeviceClass = (device: string) => {
    switch (device) {
      case "phone": return "aspect-[9/16] max-w-[200px]";
      case "tablet": return "aspect-[4/3] max-w-[300px]";
      case "desktop": return "aspect-[16/10] max-w-[400px]";
      case "newspaper": return "aspect-[3/4] max-w-[350px]";
      default: return "aspect-[16/10] max-w-[400px]";
    }
  };

  return (
    <section id="press" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Press</span> Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our innovative approach to mental health support has been recognized 
            by leading publications and health organizations worldwide.
          </p>
        </div>

        {/* Featured Press Item */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-3xl p-8 shadow-healing border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Newspaper Image */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-warm">
                  <img 
                    src={pressCoverage} 
                    alt="Newspaper coverage of NGO Empati" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-3 bg-primary rounded-xl shadow-healing text-primary-foreground">
                  <Calendar className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary">
                  Featured Story
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  "Revolutionary Approach: NGO Empati Breaks Down Barriers in Community Mental Health"
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  The Mental Health Tribune's in-depth feature explores how our unified 
                  empathy family model is transforming community mental health support 
                  by dissolving traditional boundaries between providers and recipients.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span>The Mental Health Tribune</span>
                  <span>•</span>
                  <span>December 15, 2023</span>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  Read Full Article
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Press Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pressItems.slice(1).map((item, index) => {
            const DeviceIcon = getDeviceIcon(item.device);
            return (
              <div 
                key={item.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Device Mockup */}
                <div className="flex justify-center mb-4">
                  <div className={`${getDeviceClass(item.device)} relative`}>
                    {item.device === "newspaper" ? (
                      <div className="w-full h-full bg-background border-2 border-border rounded-lg p-4 shadow-card group-hover:shadow-warm transition-all">
                        <div className="text-xs font-bold mb-2 text-primary">
                          {item.publication}
                        </div>
                        <div className="text-xs font-semibold mb-1 line-clamp-3">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">
                          {item.date}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-4">
                          {item.summary}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-foreground rounded-lg p-1 shadow-card group-hover:shadow-warm transition-all">
                        <div className="w-full h-full bg-background rounded-md p-3 overflow-hidden">
                          <div className="text-xs font-bold mb-2 text-primary">
                            {item.publication}
                          </div>
                          <div className="text-xs font-semibold mb-1 line-clamp-2">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            {item.date}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-3">
                            {item.summary}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Device indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-card">
                      <DeviceIcon className="h-4 w-4 text-secondary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="sm" className="text-xs">
                    Read Article
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-secondary/10 rounded-3xl p-8 border border-secondary/20 shadow-warm">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                award: "Mental Health Innovation Award",
                year: "2023",
                organization: "National Mental Health Association",
                description: "For revolutionary community-centered approach"
              },
              {
                award: "Community Impact Excellence",
                year: "2022",
                organization: "Regional Health Council",
                description: "Outstanding volunteer engagement program"
              },
              {
                award: "Best Practices in Peer Support",
                year: "2021",
                organization: "International Peer Support Association",
                description: "Innovative peer counselor training model"
              }
            ].map((award, index) => (
              <div 
                key={award.award}
                className="text-center p-6 bg-card/50 rounded-xl border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {award.award}
                </h4>
                <div className="text-primary font-medium mb-2">
                  {award.year}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {award.organization}
                </div>
                <p className="text-xs text-muted-foreground">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Press Contact */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Media Inquiries
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in covering our story or learning more about our innovative approach? 
            We'd love to share our journey with your audience.
          </p>
          <Button variant="hero" size="lg">
            Contact Press Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PressSection;