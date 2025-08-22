import { Heart, Users, ArrowRight, CheckCircle, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GetInvolvedSection = () => {
  const memberBenefits = [
    "Access to all support programs and healing circles",
    "One-on-one peer counseling and professional support",
    "Family programs and community workshops",
    "Crisis intervention and 24/7 support network",
    "Opportunity to become a peer counselor",
    "Ongoing mental health education and resources"
  ];

  const volunteerBenefits = [
    "Comprehensive training in mental health support",
    "Flexible scheduling to fit your availability",
    "Meaningful contribution to community healing",
    "Professional development and skill building",
    "Access to ongoing support and supervision",
    "Part of a collaborative empathy family"
  ];

  const volunteerRoles = [
    {
      title: "Peer Support Facilitator",
      time: "4-6 hours/week",
      training: "20 hours",
      description: "Lead support groups and facilitate healing conversations"
    },
    {
      title: "Crisis Response Volunteer",
      time: "On-call shifts",
      training: "40 hours",
      description: "Provide immediate support during mental health crises"
    },
    {
      title: "Community Educator",
      time: "2-4 hours/week",
      training: "15 hours",
      description: "Deliver mental health literacy programs in schools and workplaces"
    },
    {
      title: "Family Program Assistant",
      time: "3-5 hours/week",
      training: "25 hours",
      description: "Support families navigating mental health challenges together"
    }
  ];

  return (
    <section id="get-involved" className="py-20 healing-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Join Our <span className="text-secondary">Empathy Family</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking support or ready to share your strengths, 
            there are two meaningful pathways to become part of our healing community.
          </p>
        </div>

        {/* Dual Pathways */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Community Member Path */}
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 shadow-healing">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                Become a Community Member
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Join our empathy family as someone seeking support, healing, and connection. 
                Every member is valued and has the potential to become a peer supporter.
              </p>
            </div>

            {/* Member Benefits */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-primary-foreground mb-4">What You'll Receive:</h4>
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Member CTA */}
            <div className="space-y-4">
              <Button 
                variant="warm" 
                size="lg" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/70 text-center">
                No cost • Confidential application • Quick response
              </p>
            </div>
          </div>

          {/* Volunteer Path */}
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 shadow-healing">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                Become a Volunteer
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Share your skills and compassion while growing personally and professionally. 
                Our volunteers often find as much healing as they provide.
              </p>
            </div>

            {/* Volunteer Benefits */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-primary-foreground mb-4">What You'll Gain:</h4>
              {volunteerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Volunteer CTA */}
            <div className="space-y-4">
              <Button 
                variant="warm" 
                size="lg" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Start Volunteering
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/70 text-center">
                Flexible commitment • Full training provided • Ongoing support
              </p>
            </div>
          </div>
        </div>

        {/* Volunteer Roles */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary-foreground">
            Volunteer <span className="text-secondary">Opportunities</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {volunteerRoles.map((role, index) => (
              <div 
                key={role.title}
                className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                  {role.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    <Clock className="h-3 w-3 mr-1" />
                    {role.time}
                  </Badge>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {role.training} training
                  </Badge>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-background/30">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              Ready to Join Our Mission?
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Every person who joins our empathy family makes our community stronger 
              and our impact more meaningful. Which path calls to you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="warm" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                I Need Support
              </Button>
              <Button 
                variant="warm" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                I Want to Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;