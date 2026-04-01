import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, HeartPulse, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  { icon: ClipboardList, title: "Submit Your Request", description: "Fill out our secure consultation form with your health concerns, goals, and any relevant medical history. All information is kept strictly confidential." },
  { icon: UserCheck, title: "Get Reviewed by Specialists", description: "Our team of healthcare support specialists reviews your submission and prepares personalized recommendations based on your unique profile." },
  { icon: HeartPulse, title: "Receive Expert Guidance", description: "You'll receive tailored guidance including treatment support options, lifestyle recommendations, and next steps for your health journey." },
  { icon: RefreshCw, title: "Ongoing Support", description: "Your care doesn't end with a single consultation. We provide follow-ups, progress tracking, and plan adjustments as your needs evolve." },
];

const HowItWorks = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes accessing quality health support simple and stress-free.
          </p>
        </motion.div>

        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-border hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <div className="relative z-10 shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                <step.icon size={28} />
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Step {i + 1}: {step.title}
                </h3>
                <p className="text-muted-foreground mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-16">
          <Button asChild size="lg">
            <Link to="/consultation">Start Your Journey</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
