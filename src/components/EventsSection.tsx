import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventsSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Community Wellness Circle",
      date: "2024-01-15",
      time: "18:00",
      duration: "90 minutes",
      location: "Community Center Hall",
      type: "Support Group",
      capacity: "12 people",
      facilitator: "Community volunteers",
      description: "Weekly gathering for peer support and shared healing experiences."
    },
    {
      id: 2,
      title: "Mental Health First Aid Training",
      date: "2024-01-20",
      time: "09:00",
      duration: "6 hours",
      location: "Training Room A",
      type: "Workshop",
      capacity: "20 people",
      facilitator: "Professional trainers",
      description: "Comprehensive training for community members wanting to support others."
    },
    {
      id: 3,
      title: "Family Healing Workshop",
      date: "2024-01-25",
      time: "14:00",
      duration: "2 hours",
      location: "Family Resource Center",
      type: "Family Program",
      capacity: "6 families",
      facilitator: "Staff & volunteer co-facilitators",
      description: "Interactive session helping families navigate mental health together."
    },
    {
      id: 4,
      title: "Mindfulness & Movement",
      date: "2024-01-28",
      time: "10:00",
      duration: "60 minutes",
      location: "Outdoor Pavilion",
      type: "Wellness Activity",
      capacity: "25 people",
      facilitator: "Volunteer instructors",
      description: "Gentle yoga and mindfulness practice in nature."
    },
    {
      id: 5,
      title: "Community Voice Forum",
      date: "2024-02-02",
      time: "19:00",
      duration: "2 hours",
      location: "Main Assembly Hall",
      type: "Community Meeting",
      capacity: "Open to all",
      facilitator: "Community members",
      description: "Monthly forum for sharing stories and celebrating our collective journey."
    },
    {
      id: 6,
      title: "Crisis Intervention Training",
      date: "2024-02-08",
      time: "13:00",
      duration: "4 hours",
      location: "Training Room B",
      type: "Professional Development",
      capacity: "15 people",
      facilitator: "Clinical staff",
      description: "Advanced training for volunteers joining our crisis response network."
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Support Group": return "bg-primary/10 text-primary";
      case "Workshop": return "bg-secondary/10 text-secondary-foreground";
      case "Family Program": return "bg-accent/10 text-accent-foreground";
      case "Wellness Activity": return "bg-muted/10 text-muted-foreground";
      case "Community Meeting": return "bg-primary/20 text-primary";
      case "Professional Development": return "bg-secondary/20 text-secondary-foreground";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en', { month: 'short' }),
      weekday: date.toLocaleDateString('en', { weekday: 'short' })
    };
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Upcoming</span> Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our empathy family at upcoming events designed to foster connection, 
            learning, and healing within our community.
          </p>
        </div>

        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8 p-4 bg-card rounded-xl border border-border shadow-card">
          <div className="flex items-center gap-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">
              {currentMonth.toLocaleDateString('en', { month: 'long', year: 'numeric' })}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => {
            const dateInfo = formatDate(event.date);
            return (
              <div 
                key={event.id}
                className="bg-card rounded-2xl border border-border shadow-card hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Date Banner */}
                <div className="bg-primary text-primary-foreground p-4 text-center">
                  <div className="text-2xl font-bold">{dateInfo.day}</div>
                  <div className="text-sm opacity-90">{dateInfo.month} • {dateInfo.weekday}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Type Badge */}
                  <Badge 
                    className={`mb-3 ${getEventTypeColor(event.type)}`}
                  >
                    {event.type}
                  </Badge>

                  {/* Title */}
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {event.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  {/* Facilitator */}
                  <div className="mb-4 p-3 bg-muted/20 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Facilitated by:</div>
                    <div className="font-medium text-sm">{event.facilitator}</div>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calendar CTA */}
        <div className="text-center bg-secondary/10 rounded-3xl p-8 border border-secondary/20 shadow-warm">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Stay Connected to Our Community
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our calendar to never miss an opportunity to connect, 
            learn, and grow with your empathy family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Subscribe to Calendar
            </Button>
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;