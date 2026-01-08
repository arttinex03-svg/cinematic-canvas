import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#packages", label: "Packages" },
];

const serviceLinks = [
  { href: "#services", label: "YouTube Editing" },
  { href: "#services", label: "Short-Form" },
  { href: "#services", label: "UGC Ads" },
  { href: "#services", label: "Motion Graphics" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-[hsl(var(--surface))] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="font-sora text-2xl font-bold tracking-wider text-foreground"
            >
              KORVN
            </a>
            <p className="text-muted-foreground mt-3 text-sm">
              Turning raw footage into cinematic stories.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold))]/50 transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@korvn.com"
                  className="text-sm text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors"
                >
                  hello@korvn.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KORVN. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
