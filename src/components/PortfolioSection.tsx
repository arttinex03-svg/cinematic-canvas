import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

const categories = ["All", "YouTube", "Reels", "Ads"];

const projects = [
  {
    id: 1,
    title: "Brand Documentary",
    category: "YouTube",
    duration: "15:00",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "16/9",
  },
  {
    id: 2,
    title: "Product Review",
    category: "YouTube",
    duration: "12:30",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "16/9",
  },
  {
    id: 3,
    title: "Lifestyle Reel",
    category: "Reels",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=450&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "9/16",
  },
  {
    id: 4,
    title: "Travel Montage",
    category: "Reels",
    duration: "0:45",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=450&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "9/16",
  },
  {
    id: 5,
    title: "Product Ad",
    category: "Ads",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=450&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "9/16",
  },
  {
    id: 6,
    title: "Brand Campaign",
    category: "Ads",
    duration: "0:45",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=450&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "9/16",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]">
            Portfolio
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[hsl(var(--gold))] text-black"
                  : "bg-card border border-border text-muted-foreground hover:border-[hsl(var(--gold))]/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group cursor-pointer ${
                  project.aspectRatio === "16/9" ? "col-span-2" : ""
                }`}
                onClick={() => setSelectedVideo(project.videoUrl)}
              >
                <div
                  className="relative rounded-xl overflow-hidden bg-card"
                  style={{ aspectRatio: project.aspectRatio }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform">
                      <Play size={24} className="text-black ml-1" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.category} • {project.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center text-black hover:opacity-80 transition-opacity"
              >
                <X size={20} />
              </button>
              <div className="relative pb-[56.25%] bg-black rounded-lg overflow-hidden">
                <iframe
                  src={selectedVideo}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
