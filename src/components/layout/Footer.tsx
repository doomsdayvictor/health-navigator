import { Link } from "react-router-dom";
import { Mail, Phone, Heart, ArrowUpRight } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_PHONE_DISPLAY_2, CONTACT_PHONE_TEL_2 } from "@/lib/contact";

const Footer = () => (
  <footer className="border-t border-border bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground">
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="MetrixConvo" className="h-10 w-auto max-w-[200px] object-contain brightness-0 invert" />
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Honest wellness conversations with real specialists. Friendly, private, and always on your terms.
          </p>
          <div className="flex items-center gap-1 text-xs text-primary-foreground/40">
            <span>Built with</span> <Heart size={12} className="text-secondary fill-secondary" /> <span>for your health</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-primary-foreground/90">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/60">
            {[
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Treatments", to: "/treatments" },
              { label: "How It Works", to: "/how-it-works" },
              { label: "Blog", to: "/blog" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-primary-foreground/90">Legal</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/60">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Disclaimer", to: "/disclaimer" },
              { label: "Advertising Disclosure", to: "/advertising-disclosure" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-primary-foreground/90">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-secondary/80" />
              <a href="mailto:support@metrixconvo.com" className="hover:text-primary-foreground transition-colors">
                support@metrixconvo.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-secondary/80" />
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-primary-foreground transition-colors">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-secondary/80" />
              <a href={`tel:${CONTACT_PHONE_TEL_2}`} className="hover:text-primary-foreground transition-colors">
                {CONTACT_PHONE_DISPLAY_2}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
        <p>\u00a9 {new Date().getFullYear()} MetrixConvo. All rights reserved.</p>
        <p className="mt-2 max-w-2xl mx-auto">
          MetrixConvo doesn't diagnose or prescribe. Everything we share is for general wellness information only \u2014 always check in with a licensed healthcare provider before making changes.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
