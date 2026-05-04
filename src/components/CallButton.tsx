import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALL_CTA_LABEL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  showNumber?: boolean;
  label?: string;
  fullLabel?: boolean;
};

const CallButton = ({
  variant = "default",
  size = "lg",
  className,
  showNumber = false,
  label,
  fullLabel = true,
}: Props) => (
  <Button
    asChild
    size={size}
    variant={variant}
    className={cn(
      variant === "default" &&
        "bg-gradient-to-r from-secondary to-accent text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all",
      className,
    )}
  >
    <a href={`tel:${CONTACT_PHONE_TEL}`} aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}>
      <Phone className="mr-2" size={size === "sm" ? 14 : 18} />
      {label ?? (fullLabel ? CALL_CTA_LABEL : "Call Now")}
      {showNumber && <span className="ml-2 hidden sm:inline opacity-90">· {CONTACT_PHONE_DISPLAY}</span>}
    </a>
  </Button>
);

export default CallButton;