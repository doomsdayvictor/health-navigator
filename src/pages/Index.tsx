import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Users, Zap, Heart, Stethoscope, Brain, Moon, Activity, Droplets,
  ArrowRight, CheckCircle, Star, Clock, Lock, Sparkles,
  BookOpen, PhoneCall, MessageCircle, GraduationCap, ShieldCheck,
  HeartHandshake, Lightbulb, ClipboardList, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import CallButton from "@/components/CallButton";
import CallPopup from "@/components/CallPopup";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const categories = [
  { icon: Stethoscope, title: "Men's Wellness", description: "Everyday energy, focus, and confidence — explained simply.", slug: "mens-health", color: "bg-primary/10 text-primary" },
  { icon: Activity, title: "Hormonal Balance Education", description: "Understand how hormonal health shapes how you feel.", slug: "hormone-support", color: "bg-secondary/10 text-secondary" },
  { icon: Shield, title: "Immune & Recovery Wellness", description: "Habits that support your body's natural resilience.", slug: "immune-recovery", color: "bg-accent/10 text-accent" },
  { icon: Moon, title: "Sleep & Mind Wellness", description: "Better rest, focus, and mental clarity.", slug: "sleep-wellness", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Heart & Circulation Wellness", description: "Lifestyle education for everyday heart wellbeing.", slug: "heart-blood", color: "bg-secondary/10 text-secondary" },
  { icon: Droplets, title: "Metabolic Wellness", description: "Education on metabolism, energy, and balance.", slug: "metabolic", color: "bg-accent/10 text-accent" },
];

const steps = [
  { num: "01", title: "Tell Us About You", description: "Share a few details about your wellness goals through our private form — no commitment required.", icon: ClipboardIcon },
  { num: "02", title: "Talk With a Specialist", description: "A wellness specialist reviews your goals and prepares personalized educational guidance.", icon: Users },
  { num: "03", title: "Stay Supported", description: "Receive ongoing wellness check-ins and clear next steps to discuss with a licensed provider.", icon: Heart },
];

function ClipboardIcon(props: any) {
  return <Sparkles {...props} />;
}

const features = [
  { icon: Shield, title: "Private & Confidential", description: "Your information is protected and never shared without your permission." },
  { icon: Users, title: "People-First Specialists", description: "Friendly wellness specialists who actually listen to your goals." },
  { icon: Zap, title: "Simple & Stress-Free", description: "A short conversation that respects your time — no jargon, no pressure." },
  { icon: Brain, title: "Educational, Always", description: "Clear, honest information so you can make confident wellness decisions." },
];

const faqs = [
  {
    q: "What exactly is MetrixConvo?",
    a: "MetrixConvo is a wellness and health information platform. We offer free, private conversations with wellness specialists who provide educational guidance — we are not a pharmacy and do not prescribe or sell medication.",
  },
  {
    q: "Is the first conversation really free?",
    a: "Yes. Your first wellness conversation is completely free, with no obligation. It's simply a chance to talk through your wellness goals and explore your options.",
  },
  {
    q: "Will my information stay private?",
    a: "Absolutely. Your details are kept confidential and are never shared without your permission. We follow strict privacy practices outlined in our Privacy Policy.",
  },
  {
    q: "Do you provide medical advice or prescriptions?",
    a: "No. MetrixConvo provides educational wellness information only. For diagnosis, prescriptions, or medical treatment, we encourage you to speak with a qualified, licensed healthcare provider.",
  },
  {
    q: "How long does a wellness conversation take?",
    a: "Most conversations last around 10–15 minutes. Our specialists respect your time and focus on giving you clear, useful information.",
  },
  {
    q: "How do I get started?",
    a: "Simply share a few details through our private form or give us a call. A wellness specialist will reach out to schedule a convenient time to chat.",
  },
];

const stats = [
  { value: "10K+", label: "People Guided", icon: Users },
  { value: "98%", label: "Would Recommend", icon: Star },
  { value: "24/7", label: "Always Reachable", icon: Clock },
  { value: "100%", label: "Privacy Protected", icon: Lock },
];

const learningTopics = [
  { icon: Stethoscope, title: "Understanding Conditions", text: "Learn how common health conditions develop, in simple everyday language." },
  { icon: BookOpen, title: "Treatment Categories", text: "Understand the broad categories of wellness approaches available today." },
  { icon: Lightbulb, title: "Lifestyle Factors", text: "Discover diet, sleep, and movement choices that shape long-term wellbeing." },
  { icon: ClipboardList, title: "What to Ask a Provider", text: "Walk into your next appointment prepared with the right questions." },
  { icon: GraduationCap, title: "Health Literacy", text: "Build confidence in reading information and making informed wellness choices." },
  { icon: HeartHandshake, title: "Emotional Support", text: "Talk through worries with someone who genuinely listens, without judgement." },
];

const principles = [
  { icon: Lock, title: "Private", text: "Conversations stay confidential between you and our specialist." },
  { icon: HeartHandshake, title: "Empathetic", text: "We listen first. You set the pace and the topics that matter." },
  { icon: ShieldCheck, title: "Honest", text: "Educational only — we never pressure, prescribe, or sell medication." },
  { icon: GraduationCap, title: "Expert-led", text: "Conversations led by specialists trained in health education." },
];

const testimonials = [
  { name: "Michael Carter", text: "I finally understood what my diagnosis actually meant — and what to ask my doctor next." },
  { name: "Jessica Bennett", text: "The call was relaxed and informative. No pressure, just useful answers in plain words." },
  { name: "David Thompson", text: "It helped me feel less alone with my questions. A genuinely supportive conversation." },
];

const Index = () => (
  <Layout>
    <CallPopup />
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
          <motion.div variants={fadeUp} custom={0} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl pulse-glow" />
              <div className="relative bg-card border border-border/50 rounded-2xl p-4 shadow-lg">
                <img src="/logo.png" alt="Brand logo" className="h-12 md:h-14 w-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            Personalized Wellness Guidance
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-tight"
          >
            Better Wellness Decisions,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Made Simple.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Talk to a friendly wellness specialist for personalized, educational guidance. No pressure, just clarity.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-4">
            <CallButton size="lg" className="text-base px-8" label="Call Now" />
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary/30 hover:bg-primary/5">
              <Link to="/services">How We Help</Link>
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
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur h-full">
                <CardContent className="p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                    <stat.icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl sm:text-2xl font-heading font-extrabold text-foreground leading-tight">{stat.value}</p>
                    <p className="text-xs text-muted-foreground leading-snug break-words">{stat.label}</p>
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Wellness Areas</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Where We Can Help</h2>
          <p className="mt-3 text-muted-foreground">Educational guidance across the wellness topics that matter most.</p>
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

    {/* What we are / are not */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating-element-slow" />
      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">A Wellness Information Service Nothing More, Nothing Less</h2>
          <p className="mt-3 text-muted-foreground">We exist to help you understand health better through conversation. We are not a clinic, pharmacy, or prescriber.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Card className="h-full border-secondary/30 hover:shadow-lg transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <CheckCircle size={22} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">What we are</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> A free educational helpline</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> A friendly listening ear</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> A guide to better questions for your provider</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <Card className="h-full border-primary/30 hover:shadow-lg transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">What we are not</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary mt-0.5">•</span> Not a pharmacy or medication seller</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">•</span> Not a diagnosis or prescribing service</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">•</span> Not a replacement for a licensed provider</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">How a Conversation Works</h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to clearer wellness decisions.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center space-y-4 relative flex flex-col items-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground text-xl font-heading font-bold shadow-lg shadow-primary/20">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-[calc(100%+4rem)] h-px bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />
                )}
                {step.num}
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What you can learn on a call */}
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating-element-slow" />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <BookOpen size={16} /> What You Can Learn
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Topics we cover on a <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">free call</span>
          </h2>
          <p className="text-muted-foreground">Bring any wellness question. We explain it simply, so you walk away more confident.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTopics.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/60">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center text-primary">
                    <t.icon size={24} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Why People Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">A Calmer Way to Care for Your Wellbeing</h2>
          <p className="mt-3 text-muted-foreground">Honest, educational, people-first without the pressure.</p>
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

    {/* Principles */}
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheck size={16} /> Our Principles
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How we approach every conversation</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center">
                    <p.icon size={26} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl floating-element" />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Users size={16} /> Reflections from Callers
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Real conversations, real clarity</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <Quote className="text-primary/40" size={28} />
                  <p className="text-muted-foreground italic">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">— {t.name}</p>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready for Clearer Wellness Answers?</h2>
        </motion.div>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Book a free, private wellness conversation. No pressure — just thoughtful, educational guidance.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Shield, label: "100% Private" },
            { icon: Lock, label: "Secure & Confidential" },
            { icon: CheckCircle, label: "Free First Conversation" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur px-4 py-2 rounded-full text-sm">
              <badge.icon size={16} /> {badge.label}
            </div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton size="lg" className="text-base px-8" label="Call Now" />
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
