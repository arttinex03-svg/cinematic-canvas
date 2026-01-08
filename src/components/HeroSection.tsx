import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "200+", label: "Projects Completed" },
  { value: "1.5+", label: "Years Experience" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsla(var(--gold),0.1)_0%,_transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-medium text-[hsl(var(--gold))] uppercase tracking-[0.2em] mb-6"
        >
          Professional Video Editor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Turning Raw Footage Into
          <br />
          <span className="text-gradient">Cinematic Stories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Specializing in YouTube content, short-form videos, motion graphics,
          and high-converting UGC ads that captivate audiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            <Play size={18} />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-colors"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-sora text-3xl md:text-4xl font-bold text-[hsl(var(--gold))]">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-float"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
