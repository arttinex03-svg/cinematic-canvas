import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Film, Sparkles, Palette, Volume2, Users, Award, Briefcase, Clock } from "lucide-react";
import profileImage from "@/assets/profile-shiful.jpg";

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

const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 250, suffix: "+", label: "Projects Done" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support" },
];

// Counter Component with Animation
function CounterStat({ stat, isInView }: { stat: typeof stats[0]; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border group cursor-pointer overflow-hidden"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="w-14 h-14 rounded-xl bg-[hsl(var(--gold))]/10 flex items-center justify-center mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} className="text-[hsl(var(--gold))]" />
        </motion.div>
        <motion.span 
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          {count}{stat.suffix}
        </motion.span>
        <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
      </div>
    </motion.div>
  );
}

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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[hsl(var(--gold))]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {/* Section 1: About Me - Profile First */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          {/* 3D Tilt Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative perspective-1000 mb-8"
          >
            <TiltCard className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 cursor-pointer shadow-2xl">
              <img 
                src={profileImage} 
                alt="Md Shiful Islam - Professional Video Editor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </TiltCard>
            
            {/* Decorative ring */}
            <motion.div 
              className="absolute -inset-4 border-2 border-[hsl(var(--gold))]/30 rounded-full -z-10"
              animate={{
                rotate: 360,
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, opacity: { duration: 2, repeat: Infinity } }}
            />
            <motion.div 
              className="absolute -inset-8 border border-[hsl(var(--gold))]/10 rounded-full -z-10"
              animate={{
                rotate: -360,
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-[hsl(var(--gold))] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              5+ Years
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em] mb-3"
          >
            About Me
          </motion.span>
          <h2 className="font-dancing text-5xl md:text-6xl lg:text-7xl text-gradient mb-2">
            Md Shiful Islam
          </h2>
        </motion.div>

        {/* Section 2: Professional Video Editor - Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[hsl(var(--gold))]/30 bg-[hsl(var(--gold))]/5 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-[hsl(var(--gold))]" />
            <span className="font-playfair text-xl md:text-2xl text-[hsl(var(--gold))] italic">
              Professional Video Editor
            </span>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
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

          <motion.h3 
            className="font-playfair text-2xl md:text-3xl text-foreground italic mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "Turning raw footage into <span className="text-gradient">cinematic stories</span>"
          </motion.h3>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px hsl(var(--gold) / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg font-sora"
          >
            Let's Work Together
          </motion.a>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="font-dancing text-3xl md:text-4xl text-gradient text-center mb-10">
            My Expertise
          </h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
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
        </motion.div>

        {/* Stats Section with Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <CounterStat stat={stat} isInView={isInView} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
