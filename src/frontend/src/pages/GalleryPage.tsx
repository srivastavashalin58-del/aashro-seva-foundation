import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GALLERY_ITEMS } from "@/constants/organization";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const categories = [
  "All",
  "Care",
  "Events",
  "Construction",
  "Community",
  "Volunteers",
  "Outreach",
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        breadcrumb="Media"
        title="Photo Gallery"
        subtitle="Glimpses of our work, our residents, and the community we serve with love."
      />

      <section className="py-16 bg-background" data-ocid="gallery.main_section">
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            data-ocid="gallery.filter.tab"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                data-ocid={`gallery.filter.${cat.toLowerCase()}_tab`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-video bg-muted"
                onClick={() => setLightbox(item.src)}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full mb-1">
                      {item.category}
                    </span>
                    {item.caption && (
                      <p className="text-primary-foreground text-sm font-medium">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="gallery.empty_state"
            >
              <div className="text-5xl mb-4">📷</div>
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            data-ocid="gallery.lightbox.dialog"
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 bg-card rounded-full text-foreground hover:bg-muted transition-smooth"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              data-ocid="gallery.lightbox.close_button"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              src={lightbox}
              alt="Enlarged community event"
              className="max-w-full max-h-[85vh] rounded-xl shadow-elevated object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
