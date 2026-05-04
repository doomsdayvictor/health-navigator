import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import { MessageSquare, Pill, RefreshCw, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CallButton from "@/components/CallButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const services = [
  {
    icon: MessageSquare,
    title: "Consultation Support",
    description: "Personalized guidance based on your unique health needs. Our specialists review your concerns and provide expert recommendations tailored to your situation.",
    features: ["One-on-one specialist review", "Personalized health assessment", "Confidential communication", "Follow-up support included"],
    gradient: "from-primary to-accent",
  },
  {
    icon: Pill,
    title: "Medication Assistance",
    description: "Help navigating and sourcing appropriate treatment solutions. We guide you through available options and connect you with trusted sources.",
    features: ["Treatment option guidance", "Trusted sourcing network", "Dosage information support", "Interaction awareness"],
    gradient: "from-secondary to-secondary/70",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Wellness Support",
    description: "Continuous care doesn't stop after consultation. We provide follow-ups, progress tracking, and updated recommendations as your needs evolve.",
    features: ["Regular check-ins", "Progress monitoring", "Plan adjustments", "Wellness resource library"],
    gradient: "from-accent to-primary",
  },
];

const Services = () => (
  <Layout>
    <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
      <FloatingIcons count={6} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> What We Offer
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical support designed around your health journey.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`p-8 md:p-10 flex items-center justify-center bg-gradient-to-br ${svc.gradient} text-primary-foreground md:w-48 shrink-0`}>
                      <svc.icon size={48} strokeWidth={1.5} />
                    </div>
                    <div className="p-6 md:p-8 space-y-4 flex-1">
                      <h2 className="text-2xl font-heading font-bold text-foreground">{svc.title}</h2>
                      <p className="text-muted-foreground">{svc.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle size={14} className="text-secondary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mt-14 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link to="/consultation">
              Book a Free Conversation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <CallButton size="lg" showNumber />
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
