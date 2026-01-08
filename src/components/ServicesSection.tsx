import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Smartphone, Target, Wand2 } from "lucide-react";

const services = [
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    description:
      "Long-form content editing with engaging pacing, transitions, and retention-focused techniques.",
    features: [
      "Thumbnail-worthy moments",
      "Engaging intros & outros",
      "Custom graphics & text",
    ],
  },
  {
    icon: Smartphone,
    title: "Short-Form Content",
    description:
      "TikTok, Reels, and Shorts optimized for maximum engagement and viral potential.",
    features: [
      "Trending transitions",
      "Captions & subtitles",
      "Platform optimization",
    ],
    featured: true,
  },
  {
    icon: Target,
    title: "UGC Ads",
    description:
      "High-converting user-generated content style ads for brands and e-commerce.",
    features: ["Hook optimization", "Call-to-action editing", "A/B test versions"],
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description:
      "Custom animations, intros, lower thirds, and visual effects to elevate your content.",
    features: ["Logo animations", "Kinetic typography", "Visual effects"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-[hsl(var(--surface))]">
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
            Services
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                service.featured
                  ? "bg-gradient-to-b from-[hsl(var(--gold))]/10 to-card border-[hsl(var(--gold))]/50"
                  : "bg-card border-border hover:border-[hsl(var(--gold))]/30"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 right-6 px-3 py-1 text-xs font-semibold bg-[hsl(var(--gold))] text-black rounded-full">
                  Popular
                </span>
              )}

              <service.icon
                size={36}
                className="text-[hsl(var(--gold))] mb-4"
              />

              <h3 className="font-sora text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-[hsl(var(--gold))]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
