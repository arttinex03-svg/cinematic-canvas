import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";

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

// Animated filter button
function FilterButton({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: string; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? "text-black"
          : "bg-card border border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-[hsl(var(--gold))] rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{category}</span>
    </motion.button>
  );
}

// Portfolio card with hover effects
function PortfolioCard({ 
  project, 
  onClick 
}: { 
  project: typeof projects[0]; 
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className={`group cursor-pointer ${
        project.aspectRatio === "16/9" ? "col-span-2" : ""
      }`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-xl overflow-hidden bg-card"
        style={{ aspectRatio: project.aspectRatio }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image with zoom effect */}
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content overlay */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {/* Play button */}
          <motion.div
            className="w-16 h-16 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center mb-4 shadow-lg shadow-[hsl(var(--gold))]/30"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: isHovered ? 1 : 0, 
              rotate: isHovered ? 0 : -180 
            }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
          >
            <Play size={28} className="text-black ml-1" fill="currentColor" />
          </motion.div>
          
          {/* Title */}
          <motion.h4 
            className="font-semibold text-foreground text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h4>
          
          {/* Meta */}
          <motion.p 
            className="text-sm text-muted-foreground flex items-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ delay: 0.15 }}
          >
            {project.category} • {project.duration}
          </motion.p>
        </motion.div>

        {/* Corner badge */}
        <motion.div
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0 
          }}
          transition={{ delay: 0.2 }}
        >
          <ExternalLink size={14} className="text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

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
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={() => setSelectedVideo(project.videoUrl)}
              />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center text-black"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
              <div className="relative pb-[56.25%] bg-black rounded-xl overflow-hidden shadow-2xl shadow-[hsl(var(--gold))]/20">
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
