import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    date: "2023 - Present",
    title: "Founder & Creative Lead",
    company: "Portfolio_Atlas Studios",
    description:
      "Leading creative direction for video projects, managing client relationships, and delivering high-quality content for brands and creators.",
  },
  {
    date: "2022 - 2023",
    title: "Video Editor",
    company: "Freelance",
    description:
      "Worked with various clients on YouTube content, social media videos, and advertising campaigns.",
  },
  {
    date: "2022",
    title: "Video Editing Certification",
    company: "Digital Dropout Academy",
    description:
      "Intensive training in professional video editing, motion graphics, and content creation strategies.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]">
            Experience
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--gold))] to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-[hsl(var(--gold))] transform md:-translate-x-1/2 ring-4 ring-background`}
              />

              <div
                className={`bg-card p-6 rounded-xl border border-border hover:border-[hsl(var(--gold))]/30 transition-colors ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 rounded-full mb-3">
                  {exp.date}
                </span>
                <h3 className="font-sora text-xl font-semibold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
