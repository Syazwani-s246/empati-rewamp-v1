import { Brain, Users2, Calendar, Phone, BookOpen, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Brain,
      title: "Peer Support Circles",
      description: "Small group sessions where community members and trained volunteers facilitate healing conversations in safe, judgement-free spaces.",
      staffLed: false,
      volunteerPowered: true,
      participants: "8-12 people",
      frequency: "Weekly",
      tags: ["Group Therapy", "Peer Support", "Community Led"]
    },
    {
      icon: Phone,
      title: "Crisis Response Network",
      description: "24/7 support system combining professional counselors with trained community volunteers for immediate mental health crisis intervention.",
      staffLed: true,
      volunteerPowered: true,
      participants: "One-on-one",
      frequency: "On-demand",
      tags: ["Crisis Intervention", "24/7 Support", "Professional + Peer"]
    },
    {
      icon: Users2,
      title: "Family Healing Workshops",
      description: "Interactive sessions helping families understand mental health together, led by professional facilitators with community member co-facilitators.",
      staffLed: true,
      volunteerPowered: true,
      participants: "Families",
      frequency: "Monthly",
      tags: ["Family Therapy", "Education", "Collaborative"]
    },
    {
      icon: BookOpen,
      title: "Mental Health Literacy",
      description: "Educational programs developed by mental health professionals and delivered by community volunteers in schools and workplaces.",
      staffLed: false,
      volunteerPowered: true,
      participants: "15-30 people",
      frequency: "Ongoing",
      tags: ["Education", "Prevention", "Community Outreach"]
    },
    {
      icon: Calendar,
      title: "Wellness Check-In Program",
      description: "Regular connection calls and visits by trained volunteers to community members, providing ongoing support and early intervention.",
      staffLed: false,
      volunteerPowered: true,
      participants: "One-on-one",
      frequency: "Weekly/Bi-weekly",
      tags: ["Prevention", "Community Care", "Volunteer Led"]
    },
    {
      icon: Mic,
      title: "Community Voice Sessions",
      description: "Monthly forums where community members share their stories, propose program improvements, and celebrate collective healing milestones.",
      staffLed: false,
      volunteerPowered: false,
      participants: "Open community",
      frequency: "Monthly",
      tags: ["Community Voice", "Celebration", "Empowerment"]
    }
  ];

  return (
    <section id="programs" className="py-20 warm-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Programs</span> That Transform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our initiatives seamlessly blend professional expertise with community wisdom, 
            creating programs where every participant contributes to the healing journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  {program.staffLed && (
                    <Badge variant="secondary" className="text-xs">
                      Staff Led
                    </Badge>
                  )}
                  {program.volunteerPowered && (
                    <Badge variant="outline" className="text-xs">
                      Volunteer Powered
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {program.description}
              </p>

              {/* Program Details */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Participants:</span>
                  <span className="font-medium">{program.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency:</span>
                  <span className="font-medium">{program.frequency}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {program.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-warm">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're seeking support or looking to share your skills, 
            there's a place for you in our empathy family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Join a Program
            </Button>
            <Button variant="community" size="lg">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;