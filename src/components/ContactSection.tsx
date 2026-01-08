import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@portfolioatlas.com", href: "mailto:hello@portfolioatlas.com" },
  { icon: Phone, label: "WhatsApp", value: "+1 (234) 567-890", href: "https://wa.me/1234567890" },
  { icon: MapPin, label: "Location", value: "Available Worldwide", href: null },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
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
            Contact
          </span>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-[hsl(var(--gold))] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold))]/50 transition-all hover:-translate-y-1"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 grid md:grid-cols-2 gap-5"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Service</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors"
              >
                <option value="">Select a service</option>
                <option value="youtube">YouTube Video Editing</option>
                <option value="shortform">Short-Form Content</option>
                <option value="ugc">UGC Ads</option>
                <option value="motion">Motion Graphics</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Budget</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors"
              >
                <option value="">Select your budget</option>
                <option value="basic">$49 - Basic</option>
                <option value="standard">$99 - Standard</option>
                <option value="premium">$199 - Premium</option>
                <option value="custom">Custom Project</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
