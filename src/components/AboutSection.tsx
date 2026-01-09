import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Film, Sparkles, Palette, Volume2, Play } from "lucide-react";
import profileImage from "@/assets/profile-shiful.jpg";

const skills = [{
  icon: Film,
  title: "Video Editing",
  description: "Premiere Pro, DaVinci Resolve",
  level: 95
}, {
  icon: Sparkles,
  title: "Motion Graphics",
  description: "After Effects, Cinema 4D",
  level: 90
}, {
  icon: Palette,
  title: "Color Grading",
  description: "Professional color correction",
  level: 88
}, {
  icon: Volume2,
  title: "Sound Design",
  description: "Audio mixing & mastering",
  level: 85
}];

const stats = [
  { value: 150, label: "Projects", suffix: "+" },
  { value: 5, label: "Years Exp", suffix: "+" },
  { value: 50, label: "Clients", suffix: "+" },
];

// Animated counter component
function AnimatedCounter({ value, suffix = "", isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, value]);
  
  return <span>{count}{suffix}</span>;
}

// Interactive skill card with progress
function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative p-4 bg-card rounded-xl border border-border hover:border-[hsl(var(--gold))]/50 transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Icon with pulse effect */}
      <motion.div
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <skill.icon size={24} className="text-[hsl(var(--gold))] mb-2" />
      </motion.div>
      
      <h4 className="font-semibold text-foreground text-sm mb-0.5 relative z-10">
        {skill.title}
      </h4>
      <p className="text-xs text-muted-foreground mb-2 relative z-10">
        {skill.description}
      </p>
      
      {/* Skill progress bar */}
      <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.6 + index * 0.15, ease: "easeOut" }}
        />
      </div>
      <span className="text-[10px] text-muted-foreground mt-1 block relative z-10">{skill.level}%</span>
      
      {/* Corner accent */}
      <motion.div
        className="absolute -bottom-1 -right-1 w-8 h-8 bg-[hsl(var(--gold))]/20 rounded-tl-xl"
        animate={isHovered ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageHovered, setImageHovered] = useState(false);
  
  // Mouse parallax for image
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

  return (
    <section id="about" className="py-16 md:py-20 bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span 
            className="font-script text-2xl md:text-3xl text-[hsl(var(--gold))] tracking-wide inline-block"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Crafting Visual <span className="text-gradient font-script italic">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-3 rounded-2xl opacity-50"
              style={{
                background: "linear-gradient(45deg, hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)), hsl(var(--gold-light)))",
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
              whileTap={{ scale: 0.98 }}
            >
              {/* Outer decorative border */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))] rounded-2xl blur-sm transition-all duration-500"
                animate={imageHovered ? { opacity: 1, scale: 1.02 } : { opacity: 0.6, scale: 1 }}
              />

              {/* Inner ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[hsl(var(--gold))]/80 to-[hsl(var(--gold-light))]/80 rounded-2xl" />

              {/* Image wrapper */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden border-4 border-background">
                <motion.img
                  src={profileImage}
                  alt="Md Shiful Islam - Professional Video Editor"
                  className="w-full h-full object-cover"
                  animate={imageHovered ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Hover overlay with icon */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gold))]/50 via-transparent to-transparent flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={imageHovered ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={imageHovered ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-xl"
                  >
                    <Play size={24} className="text-[hsl(var(--gold))] ml-1" fill="hsl(var(--gold))" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating accent dots with enhanced animation */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--gold))] rounded-full shadow-lg shadow-[hsl(var(--gold))]/50"
                animate={{ 
                  y: [-2, 2, -2],
                  scale: imageHovered ? 1.2 : 1,
                  boxShadow: imageHovered 
                    ? "0 0 20px hsl(var(--gold))" 
                    : "0 10px 15px -3px hsl(var(--gold) / 0.5)"
                }}
                transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.3 } }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-4 h-4 bg-[hsl(var(--gold-light))] rounded-full shadow-lg shadow-[hsl(var(--gold-light))]/50"
                animate={{ 
                  y: [2, -2, 2],
                  scale: imageHovered ? 1.3 : 1 
                }}
                transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.3 } }}
              />
              
              {/* Stats around image */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="absolute bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-[hsl(var(--gold))]/30 shadow-lg"
                  style={{
                    top: index === 0 ? "-10%" : index === 1 ? "50%" : "auto",
                    bottom: index === 2 ? "-5%" : "auto",
                    left: index === 1 ? "-20%" : index === 2 ? "60%" : "auto",
                    right: index === 0 ? "-15%" : "auto",
                    transform: index === 1 ? "translateY(-50%)" : "none"
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <span className="text-lg font-bold text-[hsl(var(--gold))] block leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </span>
                  <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-script text-2xl text-[hsl(var(--gold))]">I'm</span> a professional video editor with a passion for transforming
              raw footage into compelling visual narratives. With expertise in
              Premiere Pro, After Effects, and DaVinci Resolve, I bring creative
              visions to life through meticulous editing, stunning motion
              graphics, and cinematic color grading.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <SkillCard key={skill.title} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="font-script text-lg mr-1 relative z-10">Let's</span>
              <span className="relative z-10">Work Together</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
