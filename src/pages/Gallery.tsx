import { useState } from "react";
import { X } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";
import activitiesImage from "@/assets/activities.jpg";
import eventsImage from "@/assets/events.jpg";

type Category = "all" | "classrooms" | "activities" | "events" | "outdoor";

const galleryItems = [
  { id: 1, src: classroomImage, category: "classrooms", title: "Montessori Classroom" },
  { id: 2, src: outdoorImage, category: "outdoor", title: "Outdoor Play Area" },
  { id: 3, src: activitiesImage, category: "activities", title: "Art & Craft Session" },
  { id: 4, src: eventsImage, category: "events", title: "Annual Day Celebration" },
  { id: 5, src: classroomImage, category: "classrooms", title: "Reading Corner" },
  { id: 6, src: activitiesImage, category: "activities", title: "Music Class" },
  { id: 7, src: outdoorImage, category: "outdoor", title: "Garden Area" },
  { id: 8, src: eventsImage, category: "events", title: "Sports Day" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "classrooms", label: "Classrooms" },
  { value: "activities", label: "Activities" },
  { value: "events", label: "Events" },
  { value: "outdoor", label: "Outdoor Play" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into the vibrant life at Little Stars Montessori School.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-container">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setLightboxImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-background p-4 font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6 text-background" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
