import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Community Member & Peer Counselor",
      type: "member",
      journey: "Member → Volunteer → Peer Counselor",
      quote: "I came to NGO Empati seeking support during my darkest period. What I found was not just healing, but purpose. Today, I facilitate peer support groups and help others find their light. This organization doesn't just help people - it transforms them into healers.",
      program: "Peer Support Circles",
      duration: "3 years with us",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Volunteer Coordinator",
      type: "volunteer",
      journey: "Volunteer → Training Leader → Coordinator",
      quote: "What makes NGO Empati special is how they honor everyone's contribution. Whether you're receiving support or giving it, you're valued equally. I've grown as much helping others as they have receiving support. We're truly one family.",
      program: "Crisis Response Network",
      duration: "2 years volunteering",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Amara Okafor",
      role: "Professional Counselor & Community Member",
      type: "both",
      journey: "Professional Staff & Community Member",
      quote: "As a mental health professional, I thought I understood community care. NGO Empati showed me what true collaboration looks like. Here, my clinical expertise combines with community wisdom to create something more powerful than either could achieve alone.",
      program: "Family Healing Workshops",
      duration: "Staff member for 4 years",
      rating: 5
    },
    {
      id: 4,
      name: "Family of Four - The Johnsons",
      role: "Participating Family",
      type: "family",
      journey: "Family Program → Community Advocates",
      quote: "Mental health challenges affected our entire family. The Family Healing Workshops didn't just help our teenager - they taught all of us how to support each other. Now we're advocates helping other families navigate similar journeys.",
      program: "Family Healing Workshops",
      duration: "18 months involved",
      rating: 5
    },
    {
      id: 5,
      name: "Elena Vasquez",
      role: "Youth Program Volunteer",
      type: "volunteer",
      journey: "Community Member → Youth Mentor",
      quote: "NGO Empati gave me tools to heal from my own trauma, then empowered me to support others. Working with youth in our community programs, I see the same transformation happening - pain becoming purpose, isolation becoming connection.",
      program: "Mental Health Literacy Program",
      duration: "2.5 years volunteering",
      rating: 5
    },
    {
      id: 6,
      name: "James Park",
      role: "Crisis Response Volunteer",
      type: "volunteer",
      journey: "Community Member → Crisis Responder",
      quote: "The 24/7 crisis support saved my life when I needed it most. Six months later, I completed training to become a crisis responder myself. There's something powerful about being helped by someone who truly understands your experience because they've been there too.",
      program: "Crisis Response Network",
      duration: "1 year as responder",
      rating: 5
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "member": return "bg-primary/10 text-primary";
      case "volunteer": return "bg-secondary/10 text-secondary-foreground";
      case "both": return "bg-accent/10 text-accent-foreground";
      case "family": return "bg-muted/10 text-muted-foreground";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "member": return Heart;
      case "volunteer": return Users;
      case "both": return Star;
      case "family": return Users;
      default: return Heart;
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];
  const TypeIcon = getTypeIcon(current.type);

  return (
    <section id="stories" className="py-20 warm-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Stories</span> of Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our empathy family members - community participants, volunteers, 
            and staff - about their journeys of healing, growth, and purpose.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-healing border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="h-24 w-24 text-primary" />
            </div>

            {/* Type badge and icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <TypeIcon className="h-5 w-5 text-primary" />
              </div>
              <Badge className={getTypeColor(current.type)}>
                {current.type === "member" && "Community Member"}
                {current.type === "volunteer" && "Volunteer"}
                {current.type === "both" && "Staff & Community"}
                {current.type === "family" && "Family Program"}
              </Badge>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 relative z-10">
              "{current.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <cite className="text-lg font-semibold text-foreground not-italic">
                  {current.name}
                </cite>
                <div className="text-muted-foreground">
                  {current.role}
                </div>
                <div className="text-sm text-primary font-medium mt-1">
                  {current.journey}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1 md:justify-end">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {current.program}
                </div>
                <div className="text-xs text-muted-foreground">
                  {current.duration}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button 
                variant="outline" 
                size="sm"
                onClick={prevTestimonial}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? "bg-primary w-6" 
                        : "bg-muted hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm"
                onClick={nextTestimonial}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Story Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              type: "Community Members",
              icon: Heart,
              count: "500+",
              description: "Stories of healing and personal transformation"
            },
            {
              type: "Volunteers",
              icon: Users,
              count: "850+",
              description: "Journeys from helping others to finding purpose"
            },
            {
              type: "Families",
              icon: Users,
              count: "200+",
              description: "Families learning to support each other"
            },
            {
              type: "Staff & Community",
              icon: Star,
              count: "50+",
              description: "Professionals who found community and growth"
            }
          ].map((category, index) => (
            <div 
              key={category.type}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {category.count}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {category.type}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Share Your Story
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your journey matters. Whether you're a community member, volunteer, 
              or staff, your story can inspire others and strengthen our empathy family.
            </p>
            <Button variant="hero" size="lg">
              Tell Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;