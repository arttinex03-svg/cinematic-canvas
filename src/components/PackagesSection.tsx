import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    description: "Perfect for simple edits",
    price: 49,
    features: [
      "Up to 3 minutes",
      "Basic cuts & transitions",
      "Background music",
      "2 revisions",
      "1-day delivery",
    ],
  },
  {
    name: "Standard",
    description: "Great for content creators",
    price: 99,
    featured: true,
    features: [
      "Up to 10 minutes",
      "Advanced transitions",
      "Motion graphics",
      "Color grading",
      "Sound design",
      "3 revisions",
      "2-3 day delivery",
    ],
  },
  {
    name: "Premium",
    description: "For brands & businesses",
    price: 199,
    features: [
      "Up to 20 minutes",
      "Cinematic editing",
      "Custom animations",
      "Advanced VFX",
      "Premium color grading",
      "Unlimited revisions",
      "2-5 day delivery",
      "Priority support",
    ],
  },
];

export default function PackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="py-24 md:py-32 bg-[hsl(var(--surface))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-[0.15em]">
            Packages
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Pricing <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Transparent pricing for every budget. All packages include revisions.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative p-8 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? "bg-gradient-to-b from-[hsl(var(--gold))]/10 to-card border-[hsl(var(--gold))] scale-105"
                  : "bg-card border-border hover:border-[hsl(var(--gold))]/30"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-[hsl(var(--gold))] text-black rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h3 className="font-sora text-xl font-semibold text-foreground">
                {pkg.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {pkg.description}
              </p>

              <div className="py-6 border-b border-border my-6">
                <span className="text-muted-foreground text-lg align-top">$</span>
                <span className="font-sora text-5xl font-bold text-[hsl(var(--gold))]">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground">/video</span>
              </div>

              <ul className="space-y-3 text-left mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="text-[hsl(var(--gold))] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 rounded-lg font-semibold transition-all ${
                  pkg.featured
                    ? "bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black hover:opacity-90"
                    : "border border-border text-foreground hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
