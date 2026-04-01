import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Heart, Stethoscope, Brain, Pill, Moon, Activity, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const categories = [
  { icon: Stethoscope, title: "Men's Health", description: "Vitality and wellness solutions tailored for men", slug: "mens-health" },
  { icon: Activity, title: "Hormone Support", description: "Balanced hormone therapy and TRT options", slug: "hormone-support" },
  { icon: Pill, title: "Infections & Antibiotics", description: "Guidance on infection treatment support", slug: "infections" },
  { icon: Moon, title: "Sleep & Wellness", description: "Better sleep and cognitive wellness support", slug: "sleep-wellness" },
  { icon: Heart, title: "Heart & Blood Care", description: "Circulation and cardiovascular support", slug: "heart-blood" },
  { icon: Droplets, title: "Diabetes Support", description: "Blood sugar management and care", slug: "diabetes" },
];

const steps = [
  { num: "01", title: "Share Your Needs", description: "Tell us about your health concerns through our secure consultation form." },
  { num: "02", title: "Get Expert Guidance", description: "Our specialists review your needs and provide personalized recommendations." },
  { num: "03", title: "Receive Ongoing Support", description: "Get continuous care, follow-ups, and adjustments to your wellness plan." },
];

const features = [
  { icon: Shield, title: "Confidential & Secure", description: "Your health information is protected with industry-leading security." },
  { icon: Users, title: "Expert-Backed Support", description: "Our team of specialists ensures quality care for every patient." },
  { icon: Zap, title: "Easy Process", description: "Streamlined consultations that respect your time and privacy." },
  { icon: Brain, title: "Reliable Network", description: "Trusted fulfillment and care network you can depend on." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground"
          >
            Smarter Medical Support.{" "}
            <span className="text-primary">Delivered with Care.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Access trusted solutions for your health needs — from consultation to ongoing care.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/consultation">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/consultation">Book Consultation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
    </section>

    {/* Categories */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">Treatment Categories</h2>
          <p className="mt-3 text-muted-foreground">Explore our comprehensive range of medical support options.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link to={`/treatments/${cat.slug}`}>
                <Card className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <cat.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to better health support.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-heading font-bold">
                {step.num}
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">Why Choose MatrixMedSupport</h2>
          <p className="mt-3 text-muted-foreground">Trusted by patients who value quality, privacy, and convenience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div key={feat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="text-center h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <feat.icon size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground">{feat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust / CTA */}
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-heading font-bold">Ready to Take Control of Your Health?</h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Start your confidential consultation today. Secure, private, and expert-backed.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm">
            <Shield size={16} /> Privacy Assured
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm">
            <Shield size={16} /> Secure Platform
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm">
            <Shield size={16} /> 24/7 Support
          </div>
        </div>
        <Button asChild size="lg" variant="secondary" className="text-base px-8 mt-4">
          <Link to="/consultation">Start Your Consultation</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
