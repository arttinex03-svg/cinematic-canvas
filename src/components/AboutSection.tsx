import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Film, Sparkles, Palette, Volume2 } from "lucide-react";

const skills = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Premiere Pro, DaVinci Resolve",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "After Effects, Cinema 4D",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description: "Audio mixing & mastering",
  },
];

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// Skill Card with hover effects
function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-5 bg-card rounded-xl border border-border overflow-hidden group cursor-pointer"
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-[hsl(var(--gold))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        animate={{ 
          rotate: isHovered ? [0, -10, 10, 0] : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <Icon size={28} className="text-[hsl(var(--gold))] mb-3" />
      </motion.div>
      
      <h4 className="font-semibold text-foreground mb-1 relative z-10">
        {skill.title}
      </h4>
      <p className="text-sm text-muted-foreground relative z-10">
        {skill.description}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[hsl(var(--surface))] overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]"
          >
            About Me
          </motion.span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Crafting Visual <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 3D Tilt Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <TiltCard className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-card cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Animated background orb */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] opacity-20 blur-3xl" />
              </motion.div>
              
              <motion.span 
                className="absolute inset-0 flex items-center justify-center font-sora text-8xl font-bold text-foreground/10"
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ transform: "translateZ(50px)" }}
              >
                PA
              </motion.span>
            </TiltCard>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -inset-3 border-2 border-[hsl(var(--gold))]/20 rounded-2xl -z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[hsl(var(--gold))]/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a professional video editor with a passion for transforming
              raw footage into compelling visual narratives. With expertise in
              Premiere Pro, After Effects, and DaVinci Resolve, I bring creative
              visions to life through meticulous editing, stunning motion
              graphics, and cinematic color grading.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <SkillCard 
                  key={skill.title} 
                  skill={skill} 
                  index={index} 
                  isInView={isInView} 
                />
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px hsl(var(--gold) / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
