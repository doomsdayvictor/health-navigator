import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  PhoneCall,
  MessageCircle,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Stethoscope,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Quote,
  Headphones,
  Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { Card, CardContent } from "@/components/ui/card";
import { treatmentCategories } from "@/data/treatments";
import CallButton from "@/components/CallButton";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const gradients = [
  "from-primary/10 to-accent/10 text-primary",
  "from-secondary/10 to-secondary/5 text-secondary",
  "from-accent/10 to-primary/10 text-accent",
];

const learningTopics = [
  { icon: Stethoscope, title: "Understanding Conditions", text: "Learn how common health conditions develop and progress in plain language." },
  { icon: BookOpen, title: "Treatment Categories", text: "Get a clear overview of the broad treatment categories available in modern wellness care." },
  { icon: Lightbulb, title: "Lifestyle Factors", text: "Discover the everyday choices that shape long-term well-being and health outcomes." },
  { icon: ClipboardList, title: "Questions for Your Doctor", text: "Walk into your next appointment with thoughtful, well-prepared questions." },
  { icon: GraduationCap, title: "Medical Terminology", text: "Decode reports, prescriptions, and articles without the confusing jargon." },
  { icon: HeartHandshake, title: "Emotional Support", text: "A patient ear, a calm voice — no rush, no pressure, no judgement." },
];

const steps = [
  { icon: PhoneCall, step: "01", title: "You Call Us", text: "Reach out whenever it suits you — no booking needed." },
  { icon: MessageCircle, step: "02", title: "Share Your Topic", text: "Tell our specialist what you'd like to understand better." },
  { icon: BookOpen, step: "03", title: "Verbal Education", text: "We explain conditions, terminology, and treatment categories simply." },
  { icon: ClipboardList, step: "04", title: "Next Steps", text: "Walk away with clarity and questions ready for your own provider." },
];

const principles = [
  { icon: Lock, title: "Private", text: "Your conversation stays confidential. Always." },
  { icon: HeartHandshake, title: "Empathetic", text: "We listen first and explain second." },
  { icon: ShieldCheck, title: "Honest", text: "Educational only. No sales scripts, ever." },
  { icon: GraduationCap, title: "Expert-led", text: "Specialists trained in patient education." },
];

const testimonials = [
  { name: "Anonymous caller", text: "I finally understood what my diagnosis actually meant — and what to ask next." },
  { name: "Anonymous caller", text: "Calm, kind, and informative. No pressure, just useful answers in plain words." },
  { name: "Anonymous caller", text: "It helped me feel less alone with my questions. A genuinely supportive conversation." },
];

const Treatments = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-b from-primary/8 via-background to-secondary/5 overflow-hidden">
      <FloatingIcons count={8} />
      <div className="absolute top-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-6 mb-16">
          <motion.div variants={fadeUp} custom={0} className="flex justify-center">
            <div className="relative inline-flex items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-xl">
              <div className="absolute inset-0 rounded-3xl bg-secondary/10 blur-2xl pulse-glow" />
              <img src="/logo.svg" alt="Wellness education platform" className="relative h-16 md:h-20 w-auto" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> Explore Options
          </motion.div>
          <motion.h1 variants={fadeUp} custom={2} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            Wellness Topics{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">We Talk About</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={3} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse the wellness areas our specialists cover during a free educational conversation. Each topic is explained in plain, simple language.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-3 pt-2">
            <CallButton label="Talk to a Specialist" fullLabel={false} />
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">How a Conversation Works</Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="space-y-14">
          {treatmentCategories.map((cat, ci) => (
            <motion.div key={cat.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={ci}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradients[ci % gradients.length]}`}>
                  <cat.icon size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {cat.treatments.map((treatment) => (
                  <Link key={treatment.slug} to={`/treatments/${treatment.slug}`}>
                    <Card className="group hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 h-full">
                      <CardContent className="p-5 flex items-center justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{treatment.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>
                        </div>
                        <ArrowRight size={20} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What we are / are not */}
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">A Quick Note</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-2 mb-3">An education platform, not a pharmacy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clarity matters. Here's exactly what we do — and what we don't.
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
                  <h3 className="font-heading font-semibold text-xl">What we do</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free verbal education across wellness topics</li>
                  <li>• Plain-language explanations of conditions</li>
                  <li>• Help preparing better questions for your doctor</li>
                  <li>• A private, judgement-free conversation</li>
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
                  <li>• Not a clinic — we do not diagnose</li>
                  <li>• Not a prescriber — we do not issue prescriptions</li>
                  <li>• Not a replacement for your licensed provider</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Learning Topics */}
    <section className="relative py-20 overflow-hidden">
      <FloatingIcons count={6} />
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-3">
            <Headphones size={16} /> On the call
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">What you can learn on a free conversation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verbal, plain-language education across the wellness topics people ask about most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {learningTopics.map((item, i) => (
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

    {/* Conversation Flow */}
    <section className="relative py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">How a free conversation flows</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No paperwork, no pressure. Just a relaxed phone call with someone who listens.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((item, i) => (
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
          {principles.map((item, i) => (
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
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-3">
            <Users size={16} /> Reflections from Callers
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">What people take away</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Reflections from people who joined a free educational call.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full hover:shadow-lg transition-all">
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

    {/* Final CTA */}
    <section className="relative py-24 overflow-hidden">
      <div className="container max-w-5xl relative z-10">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-2xl">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pulse-glow" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl floating-element-slow" />
          <CardContent className="relative p-10 md:p-14 text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/20">
                <img src="/logo.svg" alt="Brand logo" className="h-10 w-auto brightness-0 invert" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Curious about a topic? Let's talk it through.
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Pick up the phone for a free, friendly wellness conversation. No paperwork, no commitment — just clear answers.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <CallButton size="lg" variant="secondary" showNumber />
            </div>
            <p className="text-xs text-primary-foreground/70 pt-2">
              Educational only. We are not a pharmacy and do not prescribe or sell medication.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  </Layout>
);

export default Treatments;
