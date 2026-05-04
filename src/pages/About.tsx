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

      <div className="container max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> About Us
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MatrixMedSupport</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A people-first wellness guidance platform — here to help you understand your health and make confident, informed decisions.
          </motion.p>
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
            MatrixMedSupport is a wellness guidance and education platform. We are not a pharmacy, we do not diagnose, and we do not
            prescribe. What we do is help people understand their wellness picture, ask better questions, and feel confident when they
            speak with a licensed healthcare provider.
          </p>
          <p>
            Whether you're curious about energy and vitality, hormonal balance, sleep, focus, heart wellness, or metabolic health,
            our specialists are here for a calm, educational conversation — always alongside the care of your own qualified provider.
          </p>
          <p className="text-sm">
            <em>Educational only. Not a substitute for professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider.</em>
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
