import { useState } from "react";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, Send, MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast({ title: "Message sent!", description: "We'll get back to you as soon as possible." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
        <FloatingIcons count={6} />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-14">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} /> Get In Touch
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Contact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground">We're here to help. Reach out anytime.</motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "support@matrixmedsupport.com", href: "mailto:support@matrixmedsupport.com", color: "from-primary/10 to-accent/10 text-primary" },
                { icon: Phone, label: "Phone", value: "Contact via form", href: null, color: "from-secondary/10 to-secondary/5 text-secondary" },
                { icon: Clock, label: "Support Hours", value: "Mon–Fri, 9AM–6PM EST", href: null, color: "from-accent/10 to-primary/10 text-accent" },
                { icon: MapPin, label: "Location", value: "Supporting patients globally", href: null, color: "from-primary/10 to-secondary/10 text-primary" },
              ].map((item, i) => (
                <motion.div key={item.label} variants={fadeUp} custom={i}>
                  <Card className="group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="lg:col-span-2">
              <Card className="shadow-xl border-primary/10">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-name">Name *</Label>
                        <Input id="c-name" placeholder="Your name" required className="border-border/60 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-email">Email *</Label>
                        <Input id="c-email" type="email" placeholder="your@email.com" required className="border-border/60 focus:border-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c-subject">Subject</Label>
                      <Input id="c-subject" placeholder="How can we help?" className="border-border/60 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c-message">Message *</Label>
                      <Textarea id="c-message" placeholder="Your message..." rows={5} required className="border-border/60 focus:border-primary" />
                    </div>
                    <Button type="submit" className="w-full shadow-lg shadow-primary/20" disabled={loading}>
                      {loading ? "Sending..." : <><Send size={16} className="mr-2" /> Send Message</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
