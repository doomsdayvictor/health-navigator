import { useEffect, useState } from "react";
import { Phone, X, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  CALL_CTA_LABEL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";

const STORAGE_KEY = "mm_call_popup_dismissed_at";
const COOLDOWN_MS = 1000 * 60 * 60 * 24; // 24h

const CallPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const last = localStorage.getItem(STORAGE_KEY);
      if (last && Date.now() - Number(last) < COOLDOWN_MS) return;
    } catch {
      // ignore
    }
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (next: boolean) => {
    if (!next) {
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        // ignore
      }
    }
    setOpen(next);
  };

  return (
    <Dialog open={open} onOpenChange={dismiss}>
      <DialogContent
        className="sm:max-w-md p-0 overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-2xl"
      >
        <button
          onClick={() => dismiss(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-background/15 hover:bg-background/25 p-1.5 text-primary-foreground transition-colors"
        >
          <X size={16} />
        </button>

        <div className="absolute -top-20 -right-20 w-56 h-56 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-accent/30 rounded-full blur-3xl" />

        <div className="relative p-7 text-center">
          <div className="mx-auto mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background/15 backdrop-blur">
            <Phone size={26} />
          </div>
          <h2 className="text-2xl font-heading font-extrabold leading-tight">
            Hop on a free call with a wellness specialist
          </h2>
          <p className="mt-2 text-primary-foreground/85 text-sm">
            A friendly chat, totally free. We listen, you ask questions, no one tries to sell you anything.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 text-[11px] text-primary-foreground/85">
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck size={16} /> Stays private
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock size={16} /> ~10 to 20 min
            </div>
            <div className="flex flex-col items-center gap-1">
              <HeartHandshake size={16} /> No strings
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full font-semibold shadow-lg"
            >
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                onClick={() => dismiss(false)}
                aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}
              >
                <Phone className="mr-2" size={18} />
                {CALL_CTA_LABEL}
              </a>
            </Button>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              onClick={() => dismiss(false)}
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            <button
              onClick={() => dismiss(false)}
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
            >
              Maybe later
            </button>
          </div>

          <p className="mt-5 text-[10px] text-primary-foreground/60 leading-relaxed">
            Wellness info only. We're not a pharmacy or prescriber, and we don't provide medical diagnosis or treatment.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallPopup;