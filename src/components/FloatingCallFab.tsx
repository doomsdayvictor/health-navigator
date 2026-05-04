import { Phone } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact";

const FloatingCallFab = () => (
  <a
    href={`tel:${CONTACT_PHONE_TEL}`}
    aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}
    className="fixed bottom-5 right-5 z-50 group flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent text-secondary-foreground px-4 py-3 shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all"
  >
    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-background/15">
      <span className="absolute inset-0 rounded-full bg-background/20 animate-ping" />
      <Phone size={18} />
    </span>
    <span className="hidden sm:flex flex-col leading-tight pr-1">
      <span className="text-[10px] uppercase tracking-wider opacity-80">Speak with a specialist</span>
      <span className="text-sm font-semibold">{CONTACT_PHONE_DISPLAY}</span>
    </span>
  </a>
);

export default FloatingCallFab;