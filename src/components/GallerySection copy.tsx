import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Heart, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import volunteerEvent from "@/assets/volunteer-event.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery items (in a real app, these would come from a CMS or API)
  const galleryItems = [
    {
      id: 1,
      src: volunteerEvent,
      alt: "Community volunteers at mental health awareness event",
      category: "Community Events",
      title: "Mental Health Awareness Day",
      description: "Our empathy family came together to spread awareness and reduce stigma in the community."
    },
    {
      id: 2,
      src: therapySession,
      alt: "Support group session in welcoming environment",
      category: "Support Groups",
      title: "Healing Circle Session",
      description: "Weekly peer support group where community members share their journey and find strength together."
    },
    {
      id: 3,
      src: heroCommunity,
      alt: "Diverse community members supporting each other",
      category: "Community",
      title: "Our Empathy Family",
      description: "The heart of our organization - a unified community where everyone belongs and contributes."
    },
    {
      id: 4,
      src: volunteerEvent,
      alt: "Training workshop for volunteers",
      category: "Training",
      title: "Volunteer Empowerment Workshop",
      description: "Equipping our community members with skills to support and empower others."
    },
    {
      id: 5,
      src: therapySession,
      alt: "Family counseling session",
      category: "Programs",
      title: "Family Healing Workshop",
      description: "Families learning to support each other through mental health challenges."
    },
    {
      id: 6,
      src: heroCommunity,
      alt: "Community celebration event",
      category: "Celebrations",
      title: "Community Milestone Celebration",
      description: "Celebrating the collective achievements and healing journey of our empathy family."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Community Events", "Support Groups", "Training", "Programs", "Celebrations"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Moments</span> of Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Capturing the beautiful journey of healing, connection, and transformation 
            within our empathy family community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "hero" : "outline"}
              size="sm"
              onClick={() => {
                setFilter(category);
                setCurrentIndex(0);
              }}
              className="transition-gentle"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Main Featured Carousel */}
        <div className="relative mb-16">
          <div className="aspect-[21/9] max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-healing border border-border/20 bg-gradient-to-br from-card to-card/50">
            <div className="relative h-full">
              <img 
                src={filteredItems[currentIndex]?.src} 
                alt={filteredItems[currentIndex]?.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    {filteredItems[currentIndex]?.category === "Community Events" && <Calendar className="h-5 w-5 text-primary" />}
                    {filteredItems[currentIndex]?.category === "Support Groups" && <Users className="h-5 w-5 text-primary" />}
                    {filteredItems[currentIndex]?.category === "Community" && <Heart className="h-5 w-5 text-primary" />}
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {filteredItems[currentIndex]?.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {filteredItems[currentIndex]?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {filteredItems[currentIndex]?.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Navigation */}
              <button 
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-healing hover:bg-background transition-all hover:scale-110"
              >
                <ChevronLeft className="h-7 w-7 text-foreground" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-healing hover:bg-background transition-all hover:scale-110"
              >
                <ChevronRight className="h-7 w-7 text-foreground" />
              </button>

              {/* Expand button */}
              <button 
                onClick={() => setSelectedImage(currentIndex)}
                className="absolute top-6 right-6 w-12 h-12 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-healing hover:bg-background transition-all hover:scale-110"
              >
                <Expand className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </div>

          {/* Enhanced dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 h-3 bg-primary scale-125 rounded-full" 
                    : "w-3 h-3 bg-muted hover:bg-primary/50 rounded-full hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Grid Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-card hover:shadow-healing transition-all duration-500 hover:-translate-y-2 bg-card border border-border/50"
              onClick={() => setSelectedImage(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {item.category === "Community Events" && <Calendar className="h-4 w-4 text-primary" />}
                      {item.category === "Support Groups" && <Users className="h-4 w-4 text-primary" />}
                      {item.category === "Community" && <Heart className="h-4 w-4 text-primary" />}
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Expand className="h-4 w-4 text-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Share Your Story
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every moment in our empathy family is worth celebrating. Share your photos 
            and stories to inspire others in their healing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all hover:scale-105 shadow-soft">
              Upload Your Photos
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <img 
              src={filteredItems[selectedImage]?.src} 
              alt={filteredItems[selectedImage]?.alt}
              className="w-full h-full object-contain rounded-xl shadow-healing"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-background transition-gentle"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;