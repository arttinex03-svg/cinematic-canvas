import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Basic",
    description: "Perfect for simple edits",
    price: 49,
    features: [
      "Up to 3 minutes",
      "Basic cuts & transitions",
      "Background music",
      "2 revisions",
      "1-day delivery",
    ],
  },
  {
    name: "Standard",
    description: "Great for content creators",
    price: 99,
    featured: true,
    features: [
      "Up to 10 minutes",
      "Advanced transitions",
      "Motion graphics",
      "Color grading",
      "Sound design",
      "3 revisions",
      "2-3 day delivery",
    ],
  },
  {
    name: "Premium",
    description: "For brands & businesses",
    price: 199,
    features: [
      "Up to 20 minutes",
      "Cinematic editing",
      "Custom animations",
      "Advanced VFX",
      "Premium color grading",
      "Unlimited revisions",
      "2-5 day delivery",
      "Priority support",
    ],
  },
];

// 3D Pricing Card
function PricingCard({ 
  pkg, 
  index, 
  isInView 
}: { 
  pkg: typeof packages[0]; 
  index: number; 
  isInView: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const brightness = useTransform(mouseXSpring, [-0.5, 0.5], [0.9, 1.1]);

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        filter: `brightness(${brightness})`,
      }}
      className={`relative p-8 rounded-2xl border text-center ${
        pkg.featured
          ? "bg-gradient-to-b from-[hsl(var(--gold))]/15 to-card border-[hsl(var(--gold))] scale-105 z-10"
          : "bg-card border-border"
      }`}
    >
      {/* Animated glow for featured */}
      {pkg.featured && (
        <motion.div
          className="absolute -inset-px rounded-2xl opacity-50"
          style={{
            background: "linear-gradient(45deg, hsl(var(--gold)), transparent, hsl(var(--gold)))",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{
            x: isHovered ? ["100%", "-100%"] : "-100%",
          }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        {pkg.featured && (
          <motion.span 
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-[hsl(var(--gold))] text-black rounded-full whitespace-nowrap flex items-center gap-1"
            animate={{ 
              y: [0, -3, 0],
              boxShadow: [
                "0 0 0 0 hsl(var(--gold) / 0.5)",
                "0 0 20px 5px hsl(var(--gold) / 0.3)",
                "0 0 0 0 hsl(var(--gold) / 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={12} />
            Most Popular
          </motion.span>
        )}

        <motion.h3 
          className="font-sora text-xl font-semibold text-foreground"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        >
          {pkg.name}
        </motion.h3>
        <p className="text-sm text-muted-foreground mt-1">
          {pkg.description}
        </p>

        <motion.div 
          className="py-6 border-b border-border my-6"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-muted-foreground text-lg align-top">$</span>
          <motion.span 
            className="font-sora text-5xl font-bold text-[hsl(var(--gold))]"
            animate={{ 
              textShadow: isHovered ? "0 0 30px hsl(var(--gold))" : "none" 
            }}
          >
            {pkg.price}
          </motion.span>
          <span className="text-muted-foreground">/video</span>
        </motion.div>

        <ul className="space-y-3 text-left mb-8">
          {pkg.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
              className="flex items-center gap-3 text-sm text-muted-foreground group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Check size={16} className="text-[hsl(var(--gold))] shrink-0" />
              </motion.div>
              <span className="group-hover:text-foreground transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className={`relative block w-full py-3 rounded-lg font-semibold overflow-hidden ${
            pkg.featured
              ? "bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black"
              : "border border-border text-foreground"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button hover effect */}
          <motion.span
            className={`absolute inset-0 ${
              pkg.featured 
                ? "bg-white/20" 
                : "bg-[hsl(var(--gold))]"
            }`}
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <span className="relative flex items-center justify-center gap-2">
            Get Started
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function PackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]"
          >
            Packages
          </motion.span>
          <motion.h2 
            className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Pricing <span className="text-gradient">Plans</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transparent pricing for every budget. All packages include revisions.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
          {packages.map((pkg, index) => (
            <PricingCard 
              key={pkg.name} 
              pkg={pkg} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
