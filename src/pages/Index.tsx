import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Users, Zap, Heart, Stethoscope, Brain, Pill, Moon, Activity, Droplets,
  ArrowRight, CheckCircle, Star, Clock, Lock, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const categories = [
  { icon: Stethoscope, title: "Men's Health", description: "Vitality and wellness solutions tailored for men", slug: "mens-health", color: "bg-primary/10 text-primary" },
  { icon: Activity, title: "Hormone Support", description: "Balanced hormone therapy and TRT options", slug: "hormone-support", color: "bg-secondary/10 text-secondary" },
  { icon: Pill, title: "Infections & Antibiotics", description: "Guidance on infection treatment support", slug: "infections", color: "bg-accent/10 text-accent" },
  { icon: Moon, title: "Sleep & Wellness", description: "Better sleep and cognitive wellness support", slug: "sleep-wellness", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Heart & Blood Care", description: "Circulation and cardiovascular support", slug: "heart-blood", color: "bg-secondary/10 text-secondary" },
  { icon: Droplets, title: "Diabetes Support", description: "Blood sugar management and care", slug: "diabetes", color: "bg-accent/10 text-accent" },
];

const steps = [
  { num: "01", title: "Share Your Needs", description: "Tell us about your health concerns through our secure consultation form.", icon: ClipboardIcon },
  { num: "02", title: "Get Expert Guidance", description: "Our specialists review your needs and provide personalized recommendations.", icon: Users },
  { num: "03", title: "Receive Ongoing Support", description: "Get continuous care, follow-ups, and adjustments to your wellness plan.", icon: Heart },
];

function ClipboardIcon(props: any) {
  return <Sparkles {...props} />;
}

const features = [
  { icon: Shield, title: "Confidential & Secure", description: "Your health information is protected with industry-leading security." },
  { icon: Users, title: "Expert-Backed Support", description: "Our team of specialists ensures quality care for every patient." },
  { icon: Zap, title: "Easy Process", description: "Streamlined consultations that respect your time and privacy." },
  { icon: Brain, title: "Reliable Network", description: "Trusted fulfillment and care network you can depend on." },
];

const stats = [
  { value: "10K+", label: "Patients Supported", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "24/7", label: "Available Support", icon: Clock },
  { value: "100%", label: "Privacy Secured", icon: Lock },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-secondary/6 py-24 lg:py-36">
      <FloatingIcons />
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            Trusted Medical Support Platform
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-tight"
          >
            Smarter Medical Support.{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Delivered with Care.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Access trusted solutions for your health needs — from consultation to ongoing care.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link to="/consultation">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary/30 hover:bg-primary/5">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats Banner */}
    <section className="relative -mt-8 z-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Treatment Categories</h2>
          <p className="mt-3 text-muted-foreground">Explore our comprehensive range of medical support options.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link to={`/treatments/${cat.slug}`}>
                <Card className="group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${cat.color} group-hover:scale-110 transition-transform`}>
                      <cat.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                    </div>
                    <ArrowRight size={18} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-24 bg-gradient-to-b from-muted/40 to-background relative overflow-hidden">
      <div className="absolute -right-20 top-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl floating-element-slow" />
      <div className="absolute -left-10 bottom-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl floating-element" />
      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to better health support.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center space-y-4 relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground text-xl font-heading font-bold shadow-lg shadow-primary/20">
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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Why Choose MatrixMedSupport</h2>
          <p className="mt-3 text-muted-foreground">Trusted by patients who value quality, privacy, and convenience.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div key={feat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="text-center h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-transparent hover:border-secondary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feat.icon size={26} />
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.2),transparent_60%)]" />
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/10 rounded-full floating-element" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary-foreground/10 rounded-full floating-element-reverse" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground/5 rounded-xl rotate-45 floating-element-slow" />

      <div className="container relative z-10 text-center space-y-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Take Control of Your Health?</h2>
        </motion.div>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Start your confidential consultation today. Secure, private, and expert-backed.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Shield, label: "Privacy Assured" },
            { icon: Lock, label: "Secure Platform" },
            { icon: CheckCircle, label: "24/7 Support" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur px-4 py-2 rounded-full text-sm">
              <badge.icon size={16} /> {badge.label}
            </div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
          <Button asChild size="lg" variant="secondary" className="text-base px-10 shadow-xl hover:shadow-2xl transition-all">
            <Link to="/consultation">
              Start Your Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
