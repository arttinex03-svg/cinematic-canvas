import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    date: "2023 - Present",
    title: "Founder & Creative Lead",
    company: "Portfolio_Atlas Studios",
    description:
      "Leading creative direction for video projects, managing client relationships, and delivering high-quality content for brands and creators.",
    icon: Briefcase,
  },
  {
    date: "2022 - 2023",
    title: "Video Editor",
    company: "Freelance",
    description:
      "Worked with various clients on YouTube content, social media videos, and advertising campaigns.",
    icon: Award,
  },
  {
    date: "2022",
    title: "Video Editing Certification",
    company: "Digital Dropout Academy",
    description:
      "Intensive training in professional video editing, motion graphics, and content creation strategies.",
    icon: GraduationCap,
  },
];

// Timeline Item with animations
function TimelineItem({ 
  exp, 
  index, 
  isInView 
}: { 
  exp: typeof experiences[0]; 
  index: number; 
  isInView: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
        isEven ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
      }`}
    >
      {/* Animated Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-1 w-4 h-4 rounded-full bg-[hsl(var(--gold))] transform md:-translate-x-1/2 ring-4 ring-background z-10"
        animate={{
          scale: isHovered ? 1.5 : 1,
          boxShadow: isHovered 
            ? "0 0 20px hsl(var(--gold))" 
            : "0 0 0 hsl(var(--gold))"
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, y: -5 }}
        className={`bg-card p-6 rounded-xl border border-border transition-all duration-300 ${
          isEven ? "md:mr-8" : "md:ml-8"
        }`}
        style={{
          boxShadow: isHovered ? "0 20px 40px -20px hsl(var(--gold) / 0.3)" : "none"
        }}
      >
        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-[hsl(var(--gold))] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--gold))]/10 mb-3 ${
            isEven ? "md:ml-auto" : ""
          }`}
          animate={{ 
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          <Icon size={20} className="text-[hsl(var(--gold))]" />
        </motion.div>

        {/* Date badge */}
        <motion.span 
          className="inline-block px-3 py-1 text-xs font-medium text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 rounded-full mb-3"
          animate={{ 
            backgroundColor: isHovered ? "hsl(var(--gold))" : "hsl(var(--gold) / 0.1)",
            color: isHovered ? "hsl(0 0% 0%)" : "hsl(var(--gold))"
          }}
          transition={{ duration: 0.3 }}
        >
          {exp.date}
        </motion.span>
        
        <motion.h3 
          className="font-sora text-xl font-semibold text-foreground mb-1"
          animate={{ color: isHovered ? "hsl(var(--gold))" : "hsl(var(--foreground))" }}
          transition={{ duration: 0.3 }}
        >
          {exp.title}
        </motion.h3>
        
        <p className="text-sm text-muted-foreground mb-3">
          {exp.company}
        </p>
        
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {exp.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experience
          </motion.span>
          <motion.h2 
            className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--gold))]/50 to-transparent transform md:-translate-x-1/2"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Glowing orb that follows the line */}
          <motion.div
            className="absolute left-0 md:left-1/2 w-2 h-2 rounded-full bg-[hsl(var(--gold))] transform md:-translate-x-1/2 blur-sm"
            initial={{ top: 0, opacity: 0 }}
            animate={isInView ? { 
              top: ["0%", "100%"],
              opacity: [0, 1, 1, 0]
            } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index} 
              exp={exp} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
