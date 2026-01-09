import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Film, Sparkles, Palette, Volume2 } from "lucide-react";
import profileImage from "@/assets/profile-shiful.jpg";
const skills = [{
  icon: Film,
  title: "Video Editing",
  description: "Premiere Pro, DaVinci Resolve"
}, {
  icon: Sparkles,
  title: "Motion Graphics",
  description: "After Effects, Cinema 4D"
}, {
  icon: Palette,
  title: "Color Grading",
  description: "Professional color correction"
}, {
  icon: Volume2,
  title: "Sound Design",
  description: "Audio mixing & mastering"
}];
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-16 md:py-20 bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-10">
          <span className="font-script text-2xl md:text-3xl text-[hsl(var(--gold))] tracking-wide">
            About Me
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Crafting Visual <span className="text-gradient font-script italic">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="relative flex justify-center lg:justify-start"
          >
            {/* Animated glow ring */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
              <motion.div 
                className="w-72 h-72 md:w-80 md:h-80 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)), transparent, hsl(var(--gold)))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Profile image container */}
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer decorative border */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))] rounded-full opacity-60 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
              
              {/* Inner ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[hsl(var(--gold))]/80 to-[hsl(var(--gold-light))]/80 rounded-full" />
              
              {/* Image wrapper */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background">
                <motion.img 
                  src={profileImage} 
                  alt="Md Shiful Islam - Professional Video Editor"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gold))]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              {/* Floating accent dots */}
              <motion.div 
                className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--gold))] rounded-full shadow-lg shadow-[hsl(var(--gold))]/50"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-1 -left-1 w-4 h-4 bg-[hsl(var(--gold-light))] rounded-full shadow-lg shadow-[hsl(var(--gold-light))]/50"
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-script text-2xl text-[hsl(var(--gold))]">I'm</span> a professional video editor with a passion for transforming
              raw footage into compelling visual narratives. With expertise in
              Premiere Pro, After Effects, and DaVinci Resolve, I bring creative
              visions to life through meticulous editing, stunning motion
              graphics, and cinematic color grading.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => <motion.div key={skill.title} initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.1
            }} className="p-4 bg-card rounded-xl border border-border hover:border-[hsl(var(--gold))]/30 transition-colors group">
                  <skill.icon size={24} className="text-[hsl(var(--gold))] mb-2" />
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>)}
            </div>

            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
              <span className="font-script text-lg mr-1">Let's</span> Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
}