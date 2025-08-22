import { TrendingUp, Users, Heart, Globe, Clock, Star } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Lives Touched",
      description: "Community members and families who have found support and healing"
    },
    {
      icon: Heart,
      number: "850+",
      label: "Active Volunteers",
      description: "Dedicated community members contributing to our empathy family"
    },
    {
      icon: Clock,
      number: "15,000+",
      label: "Support Hours",
      description: "Hours of peer support, counseling, and community care provided"
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Positive Outcomes",
      description: "Participants reporting improved mental wellbeing and community connection"
    },
    {
      icon: Globe,
      number: "12",
      label: "Partner Organizations",
      description: "Collaborating mental health organizations expanding our reach"
    },
    {
      icon: Star,
      number: "95%",
      label: "Satisfaction Rate",
      description: "Community members who would recommend our programs to others"
    }
  ];

  const achievements = [
    {
      year: "2019",
      title: "Founded NGO Empati",
      description: "Started with a vision to create unified mental health support where everyone contributes to healing."
    },
    {
      year: "2020",
      title: "Crisis Response Network",
      description: "Launched 24/7 support system combining professional counselors with trained community volunteers."
    },
    {
      year: "2021",
      title: "Community Recognition",
      description: "Received Mental Health Innovation Award for our collaborative approach to community care."
    },
    {
      year: "2022",
      title: "Program Expansion",
      description: "Expanded to serve 12 communities with our unified model of peer and professional support."
    },
    {
      year: "2023",
      title: "Volunteer Empowerment",
      description: "Launched comprehensive volunteer training program, creating pathways for community leadership."
    },
    {
      year: "2024",
      title: "Sustainable Impact",
      description: "Achieved self-sustaining community model where participants become peer supporters and leaders."
    }
  ];

  return (
    <section id="impact" className="py-20 community-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Measuring Our <span className="text-secondary">Collective Impact</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Every number represents a story of transformation, connection, and hope. 
            These are the tangible results of our empathy family working together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 shadow-warm hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary-foreground">
            Our Journey of <span className="text-secondary">Growth & Impact</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-background/30"></div>
            
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
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 shadow-warm">
                    <div className="text-2xl font-bold text-secondary mb-2">
                      {achievement.year}
                    </div>
                    <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 shadow-warm">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              Be Part of Our Growing Impact
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Every person who joins our empathy family contributes to these numbers 
              and becomes part of our collective story of healing and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;