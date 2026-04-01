import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-medical-navy text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="MatrixMedSupport" className="h-10 w-auto max-w-[200px] object-contain brightness-0 invert" />
          </Link>
          <p className="text-sm text-primary-foreground/70">
            Smarter medical support, delivered with care. Access trusted solutions for your health needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Treatments", to: "/treatments" },
              { label: "How It Works", to: "/how-it-works" },
              { label: "Blog", to: "/blog" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Disclaimer", to: "/disclaimer" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:support@matrixmedsupport.com" className="hover:text-primary-foreground transition-colors">
                support@matrixmedsupport.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>Mon–Fri, 9AM–6PM EST</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} MatrixMedSupport. All rights reserved.</p>
        <p className="mt-2">
          MatrixMedSupport does not provide medical diagnosis or prescriptions. All information is for educational purposes only. Consult a licensed healthcare provider before use.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
