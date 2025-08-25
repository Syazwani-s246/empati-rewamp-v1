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
    <section id="press" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ExternalLink className="h-4 w-4" />
            Press & Media
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Media Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our innovative approach to community mental health has gained recognition 
            from leading media outlets and industry publications worldwide.
          </p>
        </div>

        {/* Featured Story - Modern Design */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="group relative bg-gradient-to-br from-card via-card to-muted/20 rounded-3xl overflow-hidden border border-border/20 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] lg:aspect-[4/5] lg:h-full">
                  <img 
                    src={pressCoverage} 
                    alt="Featured press coverage" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-primary/10"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit backdrop-blur-sm">
                  <Calendar className="h-4 w-4" />
                  Featured Coverage
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                  "Revolutionary Community Mental Health Approach Transforms Lives"
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  An in-depth feature exploring how NGO Empati's unified empathy family model 
                  is breaking down traditional barriers and creating lasting impact in mental health support.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 p-4 bg-muted/30 rounded-xl border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-semibold text-foreground">The Mental Health Tribune</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="text-sm text-muted-foreground font-medium">December 15, 2023</div>
                </div>
                
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 w-fit group/btn">
                  <span>Read Full Article</span>
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Media Coverage Grid - Modern Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pressItems.slice(1).map((item, index) => (
            <article 
              key={item.id}
              className="group relative bg-gradient-to-br from-card via-card to-muted/10 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6">
                {/* Publication Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-primary group-hover:text-primary-hover transition-colors">{item.publication}</div>
                      <div className="text-xs text-muted-foreground font-medium">{item.date}</div>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary/10 to-secondary/20 text-secondary text-xs font-medium rounded-full border border-secondary/20">
                    {item.type === "digital" ? "Digital" : "Print"}
                  </span>
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
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-all font-medium text-sm group/btn">
                    <span>Read Article</span>
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Awards Section - Improved Design */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-primary/10 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Awards & Recognition
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to innovation in mental health support has been recognized by industry leaders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                award: "Mental Health Innovation Award",
                year: "2023",
                organization: "National Mental Health Association",
                description: "For revolutionary community-centered approach to mental wellness"
              },
              {
                award: "Community Impact Excellence",
                year: "2022", 
                organization: "Regional Health Council",
                description: "Outstanding volunteer engagement and peer support program"
              },
              {
                award: "Best Practices in Peer Support",
                year: "2021",
                organization: "International Peer Support Association",
                description: "Innovative peer counselor training and empowerment model"
              }
            ].map((award, index) => (
              <div 
                key={award.award}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center hover:shadow-soft transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="font-bold text-foreground mb-2 text-lg">
                  {award.award}
                </h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  {award.year}
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  {award.organization}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Contact - Enhanced */}
        <div className="text-center bg-card rounded-3xl p-12 border border-border shadow-card">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Media Inquiries
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in featuring our story or learning more about our innovative approach? 
            Our media team is ready to share insights and arrange interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all hover:scale-105 shadow-soft">
              Contact Media Team
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              Download Press Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;