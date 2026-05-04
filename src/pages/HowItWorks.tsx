import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import {
  ClipboardList,
  UserCheck,
  HeartPulse,
  RefreshCw,
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
import { Card, CardContent } from "@/components/ui/card";
import CallButton from "@/components/CallButton";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const steps = [
  { icon: ClipboardList, title: "Pick up the phone", description: "Give us a ring and share whatever's on your mind \u2014 questions, worries, goals. Everything stays between us.", color: "from-primary to-accent" },
  { icon: UserCheck, title: "We listen and prep", description: "One of our wellness specialists takes a look at what you've shared so the call is genuinely useful, not generic.", color: "from-secondary to-secondary/70" },
  { icon: HeartPulse, title: "Have the chat", description: "We talk it through together \u2014 in plain English, at your pace, with no scripts and no upselling.", color: "from-accent to-primary" },
  { icon: RefreshCw, title: "Stay in touch", description: "Things change. Call us back whenever new questions pop up. We'll be around.", color: "from-primary to-secondary" },
];

const HowItWorks = () => (
  <Layout>
    <SEO
      title="How It Works \u2014 A Free Wellness Call With MetrixConvo"
      description="Here's exactly what happens when you call us. No forms, no waiting rooms \u2014 just a friendly chat with a wellness specialist who actually listens."
      path="/how-it-works"
    />
    <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
      <FloatingIcons count={8} />
      <div className="absolute top-60 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

      <div className="container max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-16">
          <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl pulse-glow rounded-full" />
              <div className="relative bg-gradient-to-br from-background to-muted/40 border border-border/60 rounded-2xl px-6 py-4 shadow-lg">
                <img src="/logo.png" alt="MetrixConvo" className="h-10 md:h-12 w-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> No fuss, just a chat
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            How it <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">works</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No forms to wrestle with, no waiting rooms. Just a relaxed phone call with someone who knows their stuff.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-3 pt-4">
            <CallButton size="lg" label="Give us a call" />
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What to expect</h2>
          <p className="text-muted-foreground mt-3">Here's the honest version \u2014 what we do, and what we won't.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-xl transition-all">
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">What you'll get</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> A friendly space to say what's actually on your mind</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> General wellness info you can actually use</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> A nudge in the right direction for your next doctor visit</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Plain answers, no \"medicalese\"</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-all">
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold">What we won't do</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>\u2022 Sell or supply any medication \u2014 we're not a pharmacy</li>
                <li>\u2022 Diagnose anything or write you a prescription</li>
                <li>\u2022 Try to replace your own doctor</li>
                <li>\u2022 Pass your details on without asking you first</li>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How the call usually goes</h2>
          <p className="text-muted-foreground mt-3">Four small steps, from \"hello\" to \"thanks, that helped\".</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: PhoneCall, title: "You reach out", desc: "Call us or fill in the form \u2014 whichever feels easier.", num: "01" },
            { icon: MessageCircle, title: "We listen", desc: "You talk, we listen, then we ask the questions that actually matter.", num: "02" },
            { icon: BookOpen, title: "We talk it through", desc: "Clear, balanced info shaped around what you actually want to know.", num: "03" },
            { icon: ClipboardList, title: "You take it from here", desc: "You'll know exactly what to do next, and what to ask your doctor.", num: "04" },
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What we stand for</h2>
          <p className="text-muted-foreground mt-3">A few things that shape every call.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Lock, title: "Private", desc: "What you share stays with us. Always." },
            { icon: HeartHandshake, title: "Kind", desc: "Real humans who actually care how you're doing." },
            { icon: ShieldCheck, title: "Honest", desc: "Education first. We won't pitch you anything." },
            { icon: GraduationCap, title: "Specialist-led", desc: "Trained wellness specialists, not a call centre script." },
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What people say</h2>
          <p className="text-muted-foreground mt-3">In their own words, after a call with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Felt more like a chat with a thoughtful friend than a call centre. I hung up feeling miles clearer.", name: "Sarah Mitchell" },
            { quote: "No pressure, no jargon. They just helped me figure out what my actual options were.", name: "James Richardson" },
            { quote: "I liked that they were straight with me \u2014 they pointed me to the right professional and that was that.", name: "Emily Parker" },
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Things people usually ask</h2>
          <p className="text-muted-foreground mt-3">A quick rundown of what comes up most before that first call.</p>
        </div>
        <div className="space-y-4">
          {[
            { q: "Is the call really free?", a: "Yep, totally free, no strings. You'll never get a surprise charge from us." },
            { q: "Will I get pressured into anything?", a: "Never. We share info so you can decide things on your own time, in your own way." },
            { q: "How long does a call usually take?", a: "Most chats land somewhere between 10 and 20 minutes \u2014 longer if you've got a lot on your mind." },
            { q: "Is what I share kept private?", a: "Always. What you tell us stays with us. We don't sell data and we don't share without your okay." },
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
                <img src="/logo.png" alt="MetrixConvo" className="h-9 w-auto" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Ready when you are.</h2>
            <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">
              No forms to fill out before you're ready. No obligations. Just an honest conversation about your wellbeing.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <CallButton size="lg" variant="secondary" showNumber />
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
