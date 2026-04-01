import { useState } from "react";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Lock, ArrowRight, Sparkles, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const concerns = [
  "Men's Health",
  "Hormone Support",
  "Infections & Antibiotics",
  "Sleep & Wellness",
  "Heart & Blood Care",
  "Diabetes Support",
  "Other",
];

const ageRanges = ["18-25", "26-35", "36-45", "46-55", "56-65", "65+"];

const Consultation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    toast({ title: "Consultation request submitted!", description: "We'll review your information and get back to you shortly." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="relative py-24 bg-gradient-to-b from-secondary/8 to-background overflow-hidden">
          <FloatingIcons count={6} />
          <div className="container max-w-lg relative z-10">
            <motion.div initial="hidden" animate="visible" className="text-center space-y-6">
              <motion.div variants={fadeUp} custom={0} className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 text-secondary flex items-center justify-center">
                <CheckCircle size={40} />
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-3xl font-heading font-extrabold text-foreground">Thank You!</motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground">
                Your consultation request has been submitted successfully. Our team will review your information and reach out within 24–48 hours.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <img src="/logo.svg" alt="MatrixMedSupport" className="h-10 mx-auto opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
        <FloatingIcons count={8} />
        <div className="absolute top-20 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container max-w-2xl relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-12">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Stethoscope size={16} /> Confidential Consultation
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Start Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Consultation</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground">
              Share your health concerns and our specialists will provide personalized guidance.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <Card className="shadow-xl border-primary/10">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Your full name" required className="border-border/60 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required className="border-border/60 focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="border-border/60 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label>Age Range *</Label>
                      <Select name="age" required>
                        <SelectTrigger className="border-border/60"><SelectValue placeholder="Select age range" /></SelectTrigger>
                        <SelectContent>
                          {ageRanges.map((a) => (
                            <SelectItem key={a} value={a}>{a}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Area of Concern *</Label>
                    <Select name="concern" required>
                      <SelectTrigger className="border-border/60"><SelectValue placeholder="Select your primary concern" /></SelectTrigger>
                      <SelectContent>
                        {concerns.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us More</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your health concerns, goals, or any questions you have..."
                      rows={5}
                      className="border-border/60 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/20" disabled={loading}>
                    {loading ? "Submitting..." : <>Start Your Consultation <ArrowRight className="ml-2" size={18} /></>}
                  </Button>

                  <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><Shield size={14} className="text-secondary" /> Confidential</span>
                    <span className="flex items-center gap-1"><Lock size={14} className="text-primary" /> Encrypted</span>
                    <span className="flex items-center gap-1"><Sparkles size={14} className="text-accent" /> Expert Review</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
