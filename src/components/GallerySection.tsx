import { useState, useEffect } from "react";
import { Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/galleryData";

const GallerySection = () => {
  const [filter, setFilter] = useState("Semua");
  const [showAll, setShowAll] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(4); // default desktop

  const categories = ["Semua", ...new Set(galleryItems.map((item) => item.category))];

  const filteredItems =
    filter === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth < 640) {
        setItemsPerRow(2); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerRow(3); // tablet
      } else {
        setItemsPerRow(4); // desktop
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, itemsPerRow);

  return (
    <section id="galeri" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Tajuk Seksyen */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Momen</span> Bermakna
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Menyimpan kenangan indah perjalanan bersama komuniti penuh empati.
          </p>
        </div>

        {/* Butang Kategori */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "hero" : "outline"}
              size="sm"
              onClick={() => {
                setFilter(category);
                setShowAll(false);
              }}
              className="transition-gentle"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid Galeri */}
        {filteredItems.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-card hover:shadow-healing transition-all duration-500 hover:-translate-y-2 bg-card border border-border/50"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Ikon Besar */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <Expand className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Butang Papar Lagi / Kurang */}
            {filteredItems.length > itemsPerRow && (
              <div className="text-center">
                <Button variant="outline" onClick={() => setShowAll((prev) => !prev)}>
                  {showAll ? "Lihat Kurang" : "Lihat Lagi"}
                </Button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-muted-foreground">
            Tiada gambar dalam kategori ini.
          </p>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
