import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles, Monitor, Zap } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import profileImage from "@/assets/profile-shiful.jpg";

const stats = [
  { value: 50, label: "PROJECTS", suffix: "+" },
  { value: 1.5, label: "YEARS", suffix: "+", isDecimal: true },
  { value: 10, label: "VIEWS", suffix: "M+" },
];

const specializations = [
  "Reels & TikTok",
  "YouTube Long-Form",
  "UGC Ads",
  "Motion Graphics",
  "Color Grading",
  "Sound Design",
];

// Animated counter component
function AnimatedCounter({ value, suffix = "", isDecimal = false }: { value: number; suffix?: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, isDecimal]);
  
  return <span>{isDecimal ? count.toFixed(1) : count}{suffix}</span>;
}

// Magnetic button component
function MagneticButton({ children, href, className, variant = "primary" }: { children: React.ReactNode; href: string; className?: string; variant?: "primary" | "secondary" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = variant === "primary" 
    ? "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[hsl(200,30%,20%)] text-foreground font-medium rounded-full border border-[hsl(var(--border))]"
    : "inline-flex items-center justify-center px-6 py-3.5 border border-border text-foreground font-medium rounded-full bg-background/50 backdrop-blur-sm";

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${baseClasses} ${className || ""}`}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

// Floating particles
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[hsl(var(--gold))]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageHovered, setImageHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), springConfig);
  
  const handleImageMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  const handleImageMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setImageHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsla(var(--gold),0.08)_0%,_transparent_50%)]" />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-[hsl(var(--gold))]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-40"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold)), hsl(200, 30%, 25%), hsl(var(--gold-light)), hsl(200, 30%, 20%))",
                backgroundSize: "300% 300%",
              }}
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile image container with 3D tilt */}
            <motion.div
              ref={imageRef}
              className="relative group cursor-pointer"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleImageMouseMove}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={handleImageMouseLeave}
            >
              {/* Image wrapper */}
              <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] rounded-2xl overflow-hidden border border-[hsl(200,30%,25%)] bg-[hsl(220,15%,10%)]">
                <motion.img
                  src={profileImage}
                  alt="Md Shiful Islam - Professional Video Editor"
                  className="w-full h-full object-cover"
                  animate={imageHovered ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Bottom gradient overlay with name */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(220,15%,8%)] via-[hsl(220,15%,8%)]/95 to-transparent pt-20 pb-6 px-6">
                  <motion.span 
                    className="font-script text-xl md:text-2xl text-[hsl(var(--gold))] block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Hello, I'm
                  </motion.span>
                  <motion.h2 
                    className="font-sora text-2xl md:text-3xl font-bold text-foreground mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Md Shiful Islam
                  </motion.h2>
                  <motion.p 
                    className="text-sm text-muted-foreground mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Professional Video Editor & Designer
                  </motion.p>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 bg-[hsl(200,30%,15%)] rounded-xl flex items-center justify-center border border-[hsl(200,30%,25%)] shadow-lg"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={20} className="text-[hsl(var(--gold))]" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-4 w-10 h-10 bg-[hsl(200,30%,15%)] rounded-xl flex items-center justify-center border border-[hsl(200,30%,25%)] shadow-lg"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Monitor size={18} className="text-[hsl(200,40%,60%)]" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 left-4 w-10 h-10 bg-[hsl(var(--gold))] rounded-xl flex items-center justify-center shadow-lg shadow-[hsl(var(--gold))]/30"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap size={18} className="text-black" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Available badge */}
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[hsl(200,70%,50%)]" />
              <span className="text-sm font-medium text-[hsl(200,70%,60%)]">
                Available for Projects
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Crafting{" "}
              <span className="font-script text-[hsl(var(--gold))] italic">Visual</span>
              <br />
              <span className="text-[hsl(var(--gold))]">Masterpieces</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg"
            >
              With over 1.5 years of experience, I transform raw footage into
              compelling visual stories. From viral Instagram content to
              cinematic YouTube productions, every project receives meticulous
              attention to creativity, precision, and storytelling.
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="px-5 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-center min-w-[90px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold))" }}
                >
                  <span className="font-script text-2xl md:text-3xl text-[hsl(var(--gold))] block">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <MagneticButton href="#portfolio" variant="primary">
                <Play size={16} />
                View My Work
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Get in Touch
              </MagneticButton>
            </motion.div>

            {/* What I Specialize In */}
            <motion.div
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="pt-4"
            >
              <h3 className="text-sm font-medium mb-3">
                What I <span className="font-script text-[hsl(var(--gold))] text-base">Specialize</span> In
              </h3>
              <div className="flex flex-wrap gap-2">
                {specializations.slice(0, 4).map((spec, index) => (
                  <motion.span
                    key={spec}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-card/30 text-muted-foreground hover:border-[hsl(var(--gold))]/50 hover:text-foreground transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {spec}
                  </motion.span>
                ))}
                <motion.span
                  className="px-3 py-1.5 text-xs rounded-full border border-border bg-card/30 text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  +{specializations.length - 4} more
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
