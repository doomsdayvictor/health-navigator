import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import {
  MessageSquare,
  BookOpen,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Sparkles,
  PhoneCall,
  HeartHandshake,
  ShieldCheck,
  Lock,
  Lightbulb,
  Stethoscope,
  ClipboardList,
  GraduationCap,
  Quote,
  Users,
} from "lucide-react";
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
    title: "Wellness Conversations",
    description:
      "A free, judgement-free phone conversation where a specialist listens to your questions and helps you better understand your condition in plain, simple language.",
    features: [
      "One-on-one verbal guidance",
      "Plain-language explanations",
      "Confidential and private",
      "No paperwork, no pressure",
    ],
    gradient: "from-primary to-accent",
  },
  {
    icon: BookOpen,
    title: "Health & Treatment Education",
    description:
      "Learn how different conditions work, what general treatment categories exist, and what questions to ask a qualified provider — all shared verbally over the phone.",
    features: [
      "Condition awareness",
      "Treatment category overviews",
      "Lifestyle and wellness tips",
      "Questions to ask your doctor",
    ],
    gradient: "from-secondary to-secondary/70",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Wellness Guidance",
    description:
      "Health understanding isn't a one-time event. Reach back out any time for follow-up conversations as your questions or wellness goals evolve.",
    features: [
      "Friendly follow-up calls",
      "Updated educational resources",
      "Wellness goal check-ins",
      "Always free, always optional",
    ],
    gradient: "from-accent to-primary",
  },
];

const learningTopics = [
  { icon: Stethoscope, title: "Understanding Conditions", text: "Learn how common health conditions develop and progress in everyday language." },
  { icon: BookOpen, title: "Treatment Categories", text: "Understand the broad categories of treatment approaches used in modern wellness care." },
  { icon: Lightbulb, title: "Lifestyle Factors", text: "Discover diet, sleep, and movement choices that influence long-term well-being." },
  { icon: ClipboardList, title: "What to Ask a Provider", text: "Walk into your next appointment prepared with the right questions to ask." },
  { icon: GraduationCap, title: "Health Literacy", text: "Build confidence in reading information and making informed wellness choices." },
  { icon: HeartHandshake, title: "Emotional Support", text: "Talk through worries with someone who genuinely listens, without judgement." },
];

const steps = [
  { icon: PhoneCall, title: "Reach Out", text: "Call us or share your details and pick a convenient time to talk." },
  { icon: MessageSquare, title: "Have a Conversation", text: "A friendly specialist listens to your questions and concerns." },
  { icon: BookOpen, title: "Learn the Basics", text: "Get clear, verbal education tailored to what you want to understand." },
  { icon: ClipboardList, title: "Plan Next Steps", text: "Walk away with clarity on questions to bring to a qualified provider." },
];

const principles = [
  { icon: Lock, title: "Private", text: "Conversations are confidential and stay between you and our specialist." },
  { icon: HeartHandshake, title: "Empathetic", text: "We listen first. You set the pace and the topics that matter to you." },
  { icon: ShieldCheck, title: "Honest", text: "Educational only — we never pressure, prescribe, or sell medication." },
  { icon: GraduationCap, title: "Expert-led", text: "Conversations led by knowledgeable specialists trained in health education." },
];

const testimonials = [
  { name: "A. Mehta", text: "I finally understood what my diagnosis actually meant — and what to ask my doctor next." },
  { name: "R. Kapoor", text: "The call was relaxed and informative. No pressure, just useful answers in plain words." },
  { name: "S. Iyer", text: "It helped me feel less alone with my questions. A genuinely supportive conversation." },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-b from-primary/10 via-secondary/5 to-background overflow-hidden">
      <FloatingIcons count={6} />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-6 mb-16">
          <motion.div variants={fadeUp} custom={0} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl pulse-glow" />
              <div className="relative bg-card border border-border/50 rounded-2xl p-4 shadow-lg">
                <img src="/logo.svg" alt="Brand logo" className="h-12 md:h-14 w-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> Free Wellness Conversations
          </motion.div>
          <motion.h1 variants={fadeUp} custom={2} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            How We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Help You</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={3} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a health information service — not a pharmacy or clinic. Everything we offer happens through a free, friendly phone conversation designed to help you understand your health better.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-3 pt-2">
            <CallButton size="lg" showNumber />
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">
                See How It Works <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
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
      </div>
    </section>

    {/* What you can learn on a call */}
    <section className="relative py-24 bg-muted/30 overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating-element-slow" />
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <BookOpen size={16} /> What You Can Learn
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Topics we cover on a <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">free call</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bring any wellness question. Our specialists explain things simply, so you walk away more confident about your health journey.
          </p>
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

    {/* How it flows */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-3xl" />
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <PhoneCall size={16} /> The Conversation Flow
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Simple, calm, and entirely on your terms
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="h-full relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="absolute top-3 right-4 text-5xl font-heading font-extrabold text-primary/10">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent text-secondary-foreground flex items-center justify-center">
                    <s.icon size={22} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="relative py-24 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheck size={16} /> Our Principles
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            How we approach every conversation
          </h2>
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
    <section className="relative py-24 bg-muted/30 overflow-hidden">
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl floating-element" />
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Users size={16} /> Reflections from Callers
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Real conversations, real clarity
          </h2>
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
              Have a question? Let's talk it through.
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Pick up the phone for a free, friendly wellness conversation. No paperwork, no commitment — just clear answers.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <CallButton size="lg" variant="secondary" showNumber />
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <Link to="/consultation">
                  Request a Callback <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
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

export default Services;
