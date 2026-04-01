import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

    // Simulate form submission — will be replaced with Lovable Cloud edge function for email
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setSubmitted(true);
    toast({ title: "Consultation request submitted!", description: "We'll review your information and get back to you shortly." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container max-w-lg">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                <CheckCircle size={40} />
              </div>
              <h1 className="text-3xl font-heading font-extrabold text-foreground">Thank You!</h1>
              <p className="text-muted-foreground">
                Your consultation request has been submitted successfully. Our team will review your information and reach out within 24–48 hours.
              </p>
              <img src="/logo.png" alt="MatrixMedSupport" className="h-10 mx-auto opacity-60" />
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">Start Your Consultation</h1>
            <p className="text-lg text-muted-foreground">
              Share your health concerns and our specialists will provide personalized guidance.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label>Age Range *</Label>
                      <Select name="age" required>
                        <SelectTrigger><SelectValue placeholder="Select age range" /></SelectTrigger>
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
                      <SelectTrigger><SelectValue placeholder="Select your primary concern" /></SelectTrigger>
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
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Submitting..." : "Start Your Consultation"}
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><Shield size={14} /> Confidential</span>
                    <span className="flex items-center gap-1"><Lock size={14} /> Encrypted</span>
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
