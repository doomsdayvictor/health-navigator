import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import {
  ClipboardList,
  UserCheck,
  HeartPulse,
  RefreshCw,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Lock,
  HeartHandshake,
  GraduationCap,
  Quote,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CallButton from "@/components/CallButton";

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
          <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl pulse-glow rounded-full" />
              <div className="relative bg-gradient-to-br from-background to-muted/40 border border-border/60 rounded-2xl px-6 py-4 shadow-lg">
                <img src="/logo.svg" alt="Matrixmed Support" className="h-10 md:h-12 w-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> Simple Process
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            How It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes accessing quality health support simple and stress-free.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-3 pt-4">
            <CallButton size="lg" label="Call Now" showNumber />
            <Button asChild size="lg" variant="outline">
              <Link to="/consultation">
                Start a Wellness Conversation <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
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
      </div>
    </section>

    {/* What to Expect */}
    <section className="py-20 bg-muted/30">
      <div className="container max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What to Expect</h2>
          <p className="text-muted-foreground mt-3">A clear picture of how each conversation unfolds — no pressure, no obligation.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-xl transition-all">
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">What we offer</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> A friendly, judgment-free space to share concerns</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> General wellness information and educational guidance</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Help understanding what to discuss with a qualified provider</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Clear, plain-language answers to your questions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-all">
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">What we don't do</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We are not a pharmacy and do not sell or supply medication</li>
                <li>• We do not diagnose conditions or write prescriptions</li>
                <li>• We do not replace your doctor or licensed healthcare provider</li>
                <li>• We never share your details without your consent</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* How a Conversation Flows */}
    <section className="py-20">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How a Conversation Flows</h2>
          <p className="text-muted-foreground mt-3">Four simple moments — from first hello to next steps.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: PhoneCall, title: "You reach out", desc: "Call us or fill out the form — whichever feels easier.", num: "01" },
            { icon: MessageCircle, title: "We listen", desc: "Share what's on your mind. We ask thoughtful questions.", num: "02" },
            { icon: BookOpen, title: "We educate", desc: "Get clear, balanced wellness information tailored to you.", num: "03" },
            { icon: ClipboardList, title: "You decide", desc: "Walk away informed and ready for next steps with a provider.", num: "04" },
          ].map((s) => (
            <Card key={s.title} className="relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="absolute top-3 right-4 text-5xl font-heading font-extrabold text-primary/10">{s.num}</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center mb-4">
                  <s.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Our Principles */}
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Principles</h2>
          <p className="text-muted-foreground mt-3">The values that shape every interaction.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Lock, title: "Private", desc: "Your details stay confidential. Always." },
            { icon: HeartHandshake, title: "Empathetic", desc: "Real humans who genuinely care about your wellbeing." },
            { icon: ShieldCheck, title: "Honest", desc: "Educational guidance, never pushy sales." },
            { icon: GraduationCap, title: "Expert-led", desc: "Information shaped by experienced wellness specialists." },
          ].map((p) => (
            <Card key={p.title} className="text-center hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-4">
                  <p.icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What People Say</h2>
          <p className="text-muted-foreground mt-3">Reflections from people who've had a conversation with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "It felt more like talking to a thoughtful friend than a call centre. I left feeling clearer.", name: "Sarah Mitchell" },
            { quote: "No pressure, no jargon. They just helped me understand my options.", name: "James Richardson" },
            { quote: "I appreciated the honesty — they pointed me toward the right professional to speak with next.", name: "Emily Parker" },
          ].map((t) => (
            <Card key={t.name} className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <Quote className="text-primary/40 mb-3" size={28} />
                <p className="text-muted-foreground italic">"{t.quote}"</p>
                <p className="mt-4 font-semibold text-foreground">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Common Questions</h2>
          <p className="text-muted-foreground mt-3">Quick answers to what people often ask before reaching out.</p>
        </div>
        <div className="space-y-4">
          {[
            { q: "Is the conversation really free?", a: "Yes. Our wellness conversations are completely free with no obligation." },
            { q: "Will I be pressured into anything?", a: "Never. We share information so you can make informed choices on your own time." },
            { q: "How long does a conversation take?", a: "Most chats run 10–20 minutes — longer if you have more to discuss." },
            { q: "Is my information kept private?", a: "Absolutely. Everything you share stays confidential and is never sold." },
          ].map((f) => (
            <Card key={f.q} className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{f.q}</h3>
                    <p className="text-muted-foreground mt-1">{f.a}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20">
      <div className="container max-w-4xl">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
          <CardContent className="relative p-10 md:p-14 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-background/95 rounded-2xl px-5 py-3 shadow-xl">
                <img src="/logo.svg" alt="Matrixmed Support" className="h-9 w-auto" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Ready when you are.</h2>
            <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">
              No forms to fill out before you're ready. No obligations. Just an honest conversation about your wellbeing.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <CallButton size="lg" variant="secondary" showNumber />
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/consultation">
                  Start a Wellness Conversation <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-xs text-primary-foreground/70 max-w-2xl mx-auto">
              Educational information only. We are not a pharmacy or prescriber and do not provide medical diagnosis or treatment. Always consult a qualified healthcare professional.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
