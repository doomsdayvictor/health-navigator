import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import {
  Target, Eye, Heart, Award, Globe, ShieldCheck, Users, Sparkles,
  BookOpen, PhoneCall, MessageCircle, GraduationCap, Lightbulb, Stethoscope,
  ClipboardList, HeartHandshake, Lock, Headphones, CheckCircle2, Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CallButton from "@/components/CallButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const About = () => (
  <Layout>
    <section className="relative py-24 bg-gradient-to-b from-primary/8 via-background to-secondary/5 overflow-hidden">
      <FloatingIcons count={8} />
      <div className="absolute top-40 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-6 mb-16">
          <motion.div variants={fadeUp} custom={0} className="flex justify-center">
            <div className="relative inline-flex items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-xl">
              <div className="absolute inset-0 rounded-3xl bg-secondary/10 blur-2xl pulse-glow" />
              <img src="/logo.svg" alt="MatrixMedSupport — health education platform" className="relative h-16 md:h-20 w-auto" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> About Us
          </motion.div>
          <motion.h1 variants={fadeUp} custom={2} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            Helping you{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">understand health</span>{" "}
            — one conversation at a time
          </motion.h1>
          <motion.p variants={fadeUp} custom={3} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MatrixMedSupport is a disease & medication education platform. Talk to our specialists on a free call to learn about
            conditions, treatment options, and how medications generally work — explained in simple, human language.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-3 pt-2">
            <CallButton label="Talk to a Specialist" fullLabel={false} />
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">How a Conversation Works</Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Target, title: "Our Mission", text: "To make wellness guidance approachable for everyone — clear, kind, and free of pressure.", color: "from-primary/10 to-accent/10 text-primary" },
            { icon: Eye, title: "Our Vision", text: "A world where anyone can have a thoughtful wellness conversation before making important health decisions.", color: "from-secondary/10 to-secondary/5 text-secondary" },
            { icon: Heart, title: "Our Values", text: "Privacy, honesty, and a genuine people-first approach guide everything we do.", color: "from-accent/10 to-primary/10 text-accent" },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Users, value: "10K+", label: "People Guided" },
            { icon: Globe, value: "50+", label: "Countries" },
            { icon: Award, value: "98%", label: "Would Recommend" },
            { icon: ShieldCheck, value: "100%", label: "Private" },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i}>
              <Card className="text-center border-none shadow-md">
                <CardContent className="p-5 space-y-2">
                  <stat.icon size={22} className="mx-auto text-secondary" />
                  <p className="text-2xl font-heading font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="font-heading text-foreground">Who We Are</h2>
          <p>
            MatrixMedSupport is a disease & medication education platform. We are not a pharmacy, we do not diagnose, and we do not
            prescribe. What we do is help people understand their condition, learn how different categories of treatment generally
            work, and feel confident when they speak with a licensed healthcare provider.
          </p>
          <p>
            Whether you're curious about a recent diagnosis, the side-effects you've read about, or simply want to understand a
            health topic in plain English, our specialists are here for a calm, educational phone conversation — always alongside
            the care of your own qualified provider.
          </p>
          <p className="text-sm">
            <em>Educational only. Not a substitute for professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider.</em>
          </p>
        </motion.div>
      </div>
    </section>

    {/* What we are / what we are not */}
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">An education platform — not a pharmacy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clarity matters. Here's exactly what MatrixMedSupport is, and what it isn't.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Card className="h-full border-secondary/30 bg-secondary/5">
              <CardContent className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">What we are</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• A free verbal-knowledge service about diseases & treatment categories</li>
                  <li>• A friendly first stop to make sense of medical terminology</li>
                  <li>• A guide for preparing better questions for your doctor</li>
                  <li>• A private, judgement-free educational conversation</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <Card className="h-full border-primary/30 bg-primary/5">
              <CardContent className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">What we are not</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Not a pharmacy or medication seller</li>
                  <li>• Not a clinic — we do not diagnose conditions</li>
                  <li>• Not a prescriber — we do not issue prescriptions</li>
                  <li>• Not a replacement for your licensed healthcare provider</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>

    {/* What you can learn on a call */}
    <section className="relative py-20 overflow-hidden">
      <FloatingIcons count={6} />
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-3">
            <Headphones size={16} /> On the call
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">What you can learn on a free conversation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verbal, plain-language education across the topics people search for most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Disease awareness", text: "Understand symptoms, causes and progression of common chronic and lifestyle conditions." },
            { icon: Stethoscope, title: "Treatment categories", text: "Learn how different classes of treatments and therapies generally work — explained simply." },
            { icon: Lightbulb, title: "Lifestyle factors", text: "Sleep, nutrition, movement and stress — the everyday levers that influence long-term health." },
            { icon: ClipboardList, title: "Questions for your doctor", text: "Walk away with a thoughtful list of questions to bring to your own healthcare provider." },
            { icon: GraduationCap, title: "Medical terminology", text: "Decode the jargon you've read on your reports, prescriptions or online articles." },
            { icon: HeartHandshake, title: "Emotional support", text: "A calm, patient ear — no rush, no sales, no judgement." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How a conversation flows */}
    <section className="relative py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">How a free conversation flows</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No paperwork, no pressure — just a relaxed phone call with someone who listens.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {[
            { icon: PhoneCall, step: "01", title: "You call us", text: "Reach out whenever it suits you — no booking required." },
            { icon: MessageCircle, step: "02", title: "Share your topic", text: "Tell our specialist what you'd like to understand better." },
            { icon: BookOpen, step: "03", title: "Verbal education", text: "We explain the disease, terminology, and treatment categories in plain language." },
            { icon: ClipboardList, step: "04", title: "Next steps", text: "Walk away with clarity and questions ready for your own doctor." },
          ].map((item, i) => (
            <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="relative">
              <Card className="h-full text-center border-none shadow-md bg-card/80 backdrop-blur">
                <CardContent className="p-6 space-y-3">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                    <item.icon size={24} />
                  </div>
                  <p className="text-xs font-mono tracking-widest text-secondary">STEP {item.step}</p>
                  <h3 className="font-heading font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="relative py-20 overflow-hidden">
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">Principles we live by</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The values that shape every conversation we have.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Lock, title: "Private", text: "Your details stay confidential. Always." },
            { icon: HeartHandshake, title: "Empathetic", text: "We listen first, explain second." },
            { icon: ShieldCheck, title: "Honest", text: "Education only — no sales scripts." },
            { icon: GraduationCap, title: "Expert-led", text: "Specialists trained in patient education." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="relative py-20 bg-gradient-to-b from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">What people take away</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Reflections from people who joined a free educational call.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "I finally understood my own diagnosis. They didn't sell me anything — they just explained it.", name: "Anonymous caller" },
            { quote: "I left the call with a list of clear questions for my doctor. That was priceless.", name: "Anonymous caller" },
            { quote: "Calm, kind, and surprisingly thorough. Felt like talking to a knowledgeable friend.", name: "Anonymous caller" },
          ].map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote size={28} className="text-secondary/60" />
                  <p className="text-sm text-foreground/90 italic leading-relaxed">"{t.quote}"</p>
                  <p className="text-xs font-medium text-muted-foreground">— {t.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 overflow-hidden">
      <div className="container max-w-4xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <Card className="relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
            <CardContent className="relative p-10 md:p-14 text-center space-y-6">
              <img src="/logo.svg" alt="MatrixMedSupport" className="h-12 w-auto mx-auto opacity-95 brightness-0 invert" />
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Have a question? Let's talk it through.</h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                A free, no-obligation educational phone conversation about diseases, treatments, and the questions on your mind.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <CallButton variant="secondary" label="Start a Free Conversation" fullLabel={false} />
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/treatments">Browse Topics</Link>
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/70 pt-2">
                Educational only. Not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
