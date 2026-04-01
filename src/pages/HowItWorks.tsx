import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, HeartPulse, RefreshCw, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const steps = [
  { icon: ClipboardList, title: "Submit Your Request", description: "Fill out our secure consultation form with your health concerns, goals, and any relevant medical history. All information is kept strictly confidential.", color: "from-primary to-accent" },
  { icon: UserCheck, title: "Get Reviewed by Specialists", description: "Our team of healthcare support specialists reviews your submission and prepares personalized recommendations based on your unique profile.", color: "from-secondary to-secondary/70" },
  { icon: HeartPulse, title: "Receive Expert Guidance", description: "You'll receive tailored guidance including treatment support options, lifestyle recommendations, and next steps for your health journey.", color: "from-accent to-primary" },
  { icon: RefreshCw, title: "Ongoing Support", description: "Your care doesn't end with a single consultation. We provide follow-ups, progress tracking, and plan adjustments as your needs evolve.", color: "from-primary to-secondary" },
];

const HowItWorks = () => (
  <Layout>
    <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
      <FloatingIcons count={8} />
      <div className="absolute top-60 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

      <div className="container max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> Simple Process
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            How It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes accessing quality health support simple and stress-free.
          </motion.p>
        </motion.div>

        <div className="relative space-y-6">
          {/* Vertical connector */}
          <div className="absolute left-[39px] top-12 bottom-12 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Card className="group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex gap-0">
                    <div className={`relative z-10 shrink-0 w-20 flex items-center justify-center bg-gradient-to-br ${step.color} text-primary-foreground`}>
                      <step.icon size={28} />
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Step {i + 1}</p>
                      <h3 className="text-xl font-heading font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground mt-2">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mt-14">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link to="/consultation">
              Start Your Journey <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
