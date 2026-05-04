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
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const categories = [
  { icon: Stethoscope, title: "Men's Wellness", description: "Everyday energy, focus and confidence, talked through in plain language.", slug: "mens-health", color: "bg-primary/10 text-primary" },
  { icon: Activity, title: "Hormonal Balance", description: "Get a feel for how your hormones shape your mood, sleep and energy.", slug: "hormone-support", color: "bg-secondary/10 text-secondary" },
  { icon: Shield, title: "Immune & Recovery", description: "Small daily habits that help your body bounce back stronger.", slug: "immune-recovery", color: "bg-accent/10 text-accent" },
  { icon: Moon, title: "Sleep & Mind", description: "Wind down better, sleep deeper, and wake up with a clearer head.", slug: "sleep-wellness", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Heart & Circulation", description: "Simple lifestyle ideas for looking after your heart day to day.", slug: "heart-blood", color: "bg-secondary/10 text-secondary" },
  { icon: Droplets, title: "Metabolic Wellness", description: "Make sense of metabolism, energy dips and how it all fits together.", slug: "metabolic", color: "bg-accent/10 text-accent" },
];

const steps = [
  { num: "01", title: "Tell us a bit about you", description: "Drop us a few quick details about what you'd like to work on. Nothing fancy, no commitment.", icon: ClipboardIcon },
  { num: "02", title: "Chat with a specialist", description: "One of our wellness specialists hops on a call and walks you through your options in plain English.", icon: Users },
  { num: "03", title: "Keep things moving", description: "We follow up when it helps and leave you with clear next steps to bring to a licensed provider.", icon: Heart },
];

function ClipboardIcon(props: any) {
  return <Sparkles {...props} />;
}

const features = [
  { icon: Shield, title: "Stays between us", description: "What you share with us stays with us. We never pass your details on without asking first." },
  { icon: Users, title: "Real people, real listening", description: "Our specialists are friendly humans who actually hear you out before saying a word." },
  { icon: Zap, title: "Quick and easy", description: "A short, relaxed call that respects your time. No jargon, no pressure, no upsell." },
  { icon: Brain, title: "Always educational", description: "Honest, useful info so you can make wellness choices you actually feel good about." },
];

const faqs = [
  {
    q: "What exactly is MetrixConvo?",
    a: "We're a wellness and health information service. You hop on a free, private call with one of our specialists and we help you understand your options in plain language. We're not a pharmacy, and we don't prescribe or sell medication.",
  },
  {
    q: "Is the first conversation really free?",
    a: "Yep, completely free, with zero obligation. It's just a chance to talk through what's on your mind and see if our guidance is useful to you.",
  },
  {
    q: "Will my information stay private?",
    a: "Always. Anything you tell us stays confidential and never goes anywhere without your say-so. The full details are in our Privacy Policy.",
  },
  {
    q: "Do you provide medical advice or prescriptions?",
    a: "No, and we're upfront about that. We share educational wellness information only. For anything diagnosis, prescription or treatment-related, please speak with a qualified, licensed healthcare provider.",
  },
  {
    q: "How long does a wellness conversation take?",
    a: "Usually around 10 to 15 minutes. We keep it focused so you walk away with something useful, not a lecture.",
  },
  {
    q: "How do I get started?",
    a: "Easiest thing is to give us a call, or fill in the short form. A specialist will get back to you and find a time that actually works for you.",
  },
];

const stats = [
  { value: "10K+", label: "People we've chatted with", icon: Users },
  { value: "98%", label: "Would tell a friend", icon: Star },
  { value: "24/7", label: "Here when you need us", icon: Clock },
  { value: "100%", label: "Private by default", icon: Lock },
];

const learningTopics = [
  { icon: Stethoscope, title: "Making sense of conditions", text: "We break down how common health issues actually work, without the textbook talk." },
  { icon: BookOpen, title: "The lay of the land", text: "Get a clearer picture of the different wellness approaches people are using today." },
  { icon: Lightbulb, title: "Everyday lifestyle stuff", text: "Sleep, food, movement and stress \u2014 the small choices that quietly add up over time." },
  { icon: ClipboardList, title: "Questions for your doctor", text: "Walk into your next appointment with the kind of questions that get real answers." },
  { icon: GraduationCap, title: "Reading the fine print", text: "Feel more confident decoding health info instead of second-guessing what it means." },
  { icon: HeartHandshake, title: "Someone to talk to", text: "Sometimes you just want a calm voice on the other end. We're good at that bit." },
];

const principles = [
  { icon: Lock, title: "Private", text: "Whatever you share stays between you and the specialist on the call." },
  { icon: HeartHandshake, title: "Kind", text: "We listen first. You set the pace and pick what we talk about." },
  { icon: ShieldCheck, title: "Honest", text: "Education only. We won't pitch you anything, prescribe, or sell medication." },
  { icon: GraduationCap, title: "Specialist-led", text: "You're talking with people trained to explain health, not push products." },
];

const testimonials = [
  { name: "Michael Carter", text: "Honestly, I left the call understanding my own diagnosis for the first time. They didn't try to sell me a thing." },
  { name: "Jessica Bennett", text: "I was a bit nervous picking up the phone, but it felt like chatting with a friend who happens to know their stuff." },
  { name: "David Thompson", text: "I had a list of questions in my head for months. After 15 minutes I finally felt like I had answers I could work with." },
];

const Index = () => (
  <Layout>
    <SEO
      title="MetrixConvo \u2014 Free Wellness Conversations With Real Specialists"
      description="Talk to a friendly wellness specialist on a free, private call. Honest, educational guidance to help you make confident decisions about your health."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MetrixConvo",
        url: "https://metrixconvo.com",
        logo: "https://metrixconvo.com/logo.png",
        description: "Wellness and health information platform offering free, private educational conversations with specialists.",
      }}
    />
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
            A real conversation, not a sales pitch
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-tight"
          >
            Wellness answers that actually{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              make sense.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Hop on a free, private call with one of our wellness specialists. We'll talk things through in plain language so you can make decisions you feel good about.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-4">
            <CallButton size="lg" className="text-base px-8" label="Talk to us" />
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary/30 hover:bg-primary/5">
              <Link to="/services">See how we help</Link>
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">What we cover</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">The stuff people actually call us about</h2>
          <p className="mt-3 text-muted-foreground">A friendly conversation about whatever's on your mind, across the wellness topics that come up most.</p>
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Who we are</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">A wellness chat. Nothing more, nothing less.</h2>
          <p className="mt-3 text-muted-foreground">We're here to help you understand your health better through honest conversation. We're not a clinic, a pharmacy, or a prescriber.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Card className="h-full border-secondary/30 hover:shadow-lg transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <CheckCircle size={22} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">What you'll get</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> A free call, no strings attached</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> Someone who listens before they speak</li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" /> Sharper questions to bring to your doctor</li>
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
                <h3 className="font-heading font-semibold text-lg text-foreground">What we're not</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary mt-0.5">•</span> Not a pharmacy and not selling medication</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">•</span> Not diagnosing or writing prescriptions</li>
                  <li className="flex gap-2"><span className="text-primary mt-0.5">•</span> Not a stand-in for your own doctor</li>
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">How it works</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Three steps. That's pretty much it.</h2>
          <p className="mt-3 text-muted-foreground">No forms to wade through, no waiting rooms. Just a quick chat that leaves you with a clearer head.</p>
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
            <BookOpen size={16} /> Stuff worth talking about
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What we can <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">chat about</span>
          </h2>
          <p className="text-muted-foreground">Bring whatever's been bugging you. We'll talk it through and you'll walk away feeling a little more in control.</p>
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Why people stick around</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">A calmer way to look after yourself</h2>
          <p className="mt-3 text-muted-foreground">Honest, friendly, people-first. No pushy scripts, ever.</p>
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
            <ShieldCheck size={16} /> What we stand for
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How we show up on every call</h2>
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
            <Users size={16} /> What people say
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Real chats, in their own words</h2>
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

    {/* FAQ */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-element-slow" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl floating-element-reverse" />
      <div className="container relative z-10 max-w-3xl">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle size={16} /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Things people usually ask</h2>
          <p className="text-muted-foreground">A quick rundown before you pick up the phone.</p>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border bg-card rounded-xl px-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready for a calmer kind of conversation?</h2>
        </motion.div>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Grab a free, private wellness call with one of our specialists. No pressure, no scripts \u2014 just a friendly chat.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Shield, label: "Stays private" },
            { icon: Lock, label: "Confidential by default" },
            { icon: CheckCircle, label: "First call's on us" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur px-4 py-2 rounded-full text-sm">
              <badge.icon size={16} /> {badge.label}
            </div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton size="lg" className="text-base px-8" label="Give us a call" />
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
