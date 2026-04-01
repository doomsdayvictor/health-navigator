import { motion } from "framer-motion";
import {
  Heart, Shield, Activity, Stethoscope, Brain, Pill,
  Cross, Dna, Microscope, Syringe, Thermometer, Eye,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface FloatingIcon {
  Icon: LucideIcon;
  className: string;
  delay?: number;
}

const defaultIcons: FloatingIcon[] = [
  { Icon: Heart, className: "top-[10%] left-[5%] floating-element text-secondary/15", delay: 0 },
  { Icon: Shield, className: "top-[20%] right-[8%] floating-element-slow text-primary/10", delay: 0.5 },
  { Icon: Activity, className: "bottom-[15%] left-[10%] floating-element-reverse text-accent/12", delay: 1 },
  { Icon: Stethoscope, className: "top-[60%] right-[5%] floating-element-fast text-secondary/10", delay: 0.3 },
  { Icon: Brain, className: "top-[40%] left-[3%] floating-element-slow text-primary/8", delay: 0.8 },
  { Icon: Pill, className: "bottom-[30%] right-[12%] floating-element text-accent/10", delay: 0.2 },
  { Icon: Cross, className: "top-[8%] right-[25%] floating-element-reverse text-secondary/8", delay: 1.2 },
  { Icon: Dna, className: "bottom-[10%] right-[30%] floating-element-slow text-primary/10", delay: 0.6 },
  { Icon: Microscope, className: "top-[50%] left-[8%] floating-element text-accent/8", delay: 0.9 },
  { Icon: Syringe, className: "bottom-[40%] left-[20%] floating-element-reverse text-secondary/8", delay: 1.1 },
  { Icon: Thermometer, className: "top-[30%] right-[18%] floating-element-fast text-primary/8", delay: 0.4 },
  { Icon: Eye, className: "bottom-[20%] left-[30%] floating-element-slow text-accent/10", delay: 0.7 },
];

interface FloatingIconsProps {
  icons?: FloatingIcon[];
  count?: number;
}

const FloatingIcons = ({ icons = defaultIcons, count }: FloatingIconsProps) => {
  const displayIcons = count ? icons.slice(0, count) : icons;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {displayIcons.map(({ Icon, className, delay = 0 }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.8 }}
          className={`absolute ${className}`}
        >
          <Icon size={28} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
