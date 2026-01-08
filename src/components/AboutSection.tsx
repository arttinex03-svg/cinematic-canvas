import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]">
            About Me
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Crafting Visual <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] opacity-20 blur-3xl" />
                <span className="absolute font-sora text-6xl font-bold text-foreground/10">
                  PA
                </span>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-3 border-2 border-[hsl(var(--gold))]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a professional video editor with a passion for transforming
              raw footage into compelling visual narratives. With expertise in
              Premiere Pro, After Effects, and DaVinci Resolve, I bring creative
              visions to life through meticulous editing, stunning motion
              graphics, and cinematic color grading.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-5 bg-card rounded-xl border border-border hover:border-[hsl(var(--gold))]/30 transition-colors group"
                >
                  <skill.icon
                    size={28}
                    className="text-[hsl(var(--gold))] mb-3"
                  />
                  <h4 className="font-semibold text-foreground mb-1">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
