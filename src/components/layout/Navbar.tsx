import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Treatments", to: "/treatments" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/90 backdrop-blur-xl supports-[backdrop-filter]:bg-card/70">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="MatrixMedSupport" className="h-10 w-auto max-w-[200px] object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10 hover:text-secondary">
            <a href={`tel:${CONTACT_PHONE_TEL}`} aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}>
              <Phone className="mr-1" size={14} />
              {CONTACT_PHONE_DISPLAY}
            </a>
          </Button>
          <Button asChild size="sm" className="shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <Link to="/consultation">
              Book Consultation <ArrowRight className="ml-1" size={14} />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/60 bg-card/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 shadow-md shadow-primary/15" size="sm">
              <Link to="/consultation" onClick={() => setMobileOpen(false)}>
                Book Consultation <ArrowRight className="ml-1" size={14} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-secondary/40 text-secondary">
              <a href={`tel:${CONTACT_PHONE_TEL}`} onClick={() => setMobileOpen(false)}>
                <Phone className="mr-1" size={14} /> {CONTACT_PHONE_DISPLAY}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
