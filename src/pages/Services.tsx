import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MessageSquare, Pill, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    icon: MessageSquare,
    title: "Consultation Support",
    description: "Personalized guidance based on your unique health needs. Our specialists review your concerns and provide expert recommendations tailored to your situation.",
    features: ["One-on-one specialist review", "Personalized health assessment", "Confidential communication", "Follow-up support included"],
  },
  {
    icon: Pill,
    title: "Medication Assistance",
    description: "Help navigating and sourcing appropriate treatment solutions. We guide you through available options and connect you with trusted sources.",
    features: ["Treatment option guidance", "Trusted sourcing network", "Dosage information support", "Interaction awareness"],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Wellness Support",
    description: "Continuous care doesn't stop after consultation. We provide follow-ups, progress tracking, and updated recommendations as your needs evolve.",
    features: ["Regular check-ins", "Progress monitoring", "Plan adjustments", "Wellness resource library"],
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container max-w-5xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical support designed around your health journey.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <Card>
                <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 p-4 rounded-xl bg-primary/10 text-primary self-start">
                    <svc.icon size={32} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-foreground">{svc.title}</h2>
                    <p className="text-muted-foreground">{svc.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/consultation">Start Your Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
