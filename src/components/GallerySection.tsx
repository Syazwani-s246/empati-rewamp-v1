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
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Journey</span> in Pictures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Moments of connection, healing, and transformation from our empathy family's 
            journey together in building stronger mental health support.
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

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-warm">
            <img 
              src={filteredItems[currentIndex]?.src} 
              alt={filteredItems[currentIndex]?.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  {filteredItems[currentIndex]?.category === "Community Events" && <Calendar className="h-4 w-4 text-primary" />}
                  {filteredItems[currentIndex]?.category === "Support Groups" && <Users className="h-4 w-4 text-primary" />}
                  {filteredItems[currentIndex]?.category === "Community" && <Heart className="h-4 w-4 text-primary" />}
                  <span className="text-sm text-primary font-medium">
                    {filteredItems[currentIndex]?.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {filteredItems[currentIndex]?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {filteredItems[currentIndex]?.description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-background transition-gentle"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-background transition-gentle"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Expand button */}
            <button 
              onClick={() => setSelectedImage(currentIndex)}
              className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-background transition-gentle"
            >
              <Expand className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid mb-12">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="masonry-item cursor-pointer hover-lift"
              onClick={() => setSelectedImage(index)}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.category === "Community Events" && <Calendar className="h-4 w-4 text-primary" />}
                    {item.category === "Support Groups" && <Users className="h-4 w-4 text-primary" />}
                    {item.category === "Community" && <Heart className="h-4 w-4 text-primary" />}
                    <span className="text-xs text-primary font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Share Your Story
          </Button>
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