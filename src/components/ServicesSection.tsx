import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Youtube, Smartphone, Target, Wand2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    description:
      "Long-form content editing with engaging pacing, transitions, and retention-focused techniques.",
    features: [
      "Thumbnail-worthy moments",
      "Engaging intros & outros",
      "Custom graphics & text",
    ],
  },
  {
    icon: Smartphone,
    title: "Short-Form Content",
    description:
      "TikTok, Reels, and Shorts optimized for maximum engagement and viral potential.",
    features: [
      "Trending transitions",
      "Captions & subtitles",
      "Platform optimization",
    ],
    featured: true,
  },
  {
    icon: Target,
    title: "UGC Ads",
    description:
      "High-converting user-generated content style ads for brands and e-commerce.",
    features: ["Hook optimization", "Call-to-action editing", "A/B test versions"],
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description:
      "Custom animations, intros, lower thirds, and visual effects to elevate your content.",
    features: ["Logo animations", "Kinetic typography", "Visual effects"],
  },
];

// Interactive Service Card
function ServiceCard({ 
  service, 
  index, 
  isInView 
}: { 
  service: typeof services[0]; 
  index: number; 
  isInView: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
        service.featured
          ? "bg-gradient-to-b from-[hsl(var(--gold))]/10 to-card border-[hsl(var(--gold))]/50"
          : "bg-card border-border"
      }`}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))]/20 via-transparent to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: isHovered ? ["0% 50%", "200% 50%"] : "0% 50%",
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {service.featured && (
          <motion.span 
            className="absolute -top-9 right-0 px-3 py-1 text-xs font-semibold bg-[hsl(var(--gold))] text-black rounded-full"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0 0 hsl(var(--gold) / 0.5)", "0 0 0 6px hsl(var(--gold) / 0)", "0 0 0 0 hsl(var(--gold) / 0.5)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Popular
          </motion.span>
        )}

        <motion.div
          animate={{ 
            rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={36} className="text-[hsl(var(--gold))] mb-4" />
        </motion.div>

        <h3 className="font-sora text-lg font-semibold text-foreground mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <motion.span 
                className="text-[hsl(var(--gold))]"
                animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                transition={{ delay: i * 0.1 }}
              >
                ✓
              </motion.span>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Hover indicator */}
        <motion.div
          className="mt-4 flex items-center gap-2 text-sm text-[hsl(var(--gold))] opacity-0"
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          Learn more <ArrowRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]"
          >
            Services
          </motion.span>
          <motion.h2 
            className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What I <span className="text-gradient">Offer</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
