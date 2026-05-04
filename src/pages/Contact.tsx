import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin, Sparkles } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_PHONE_DISPLAY_2, CONTACT_PHONE_TEL_2 } from "@/lib/contact";
import CallButton from "@/components/CallButton";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => (
    <Layout>
      <SEO
        title="Contact MetrixConvo \u2014 Talk to a Wellness Specialist"
        description="Call, email, or message us. A real wellness specialist will get back to you and help you make sense of whatever's on your mind."
        path="/contact"
      />
      <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
        <FloatingIcons count={6} />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-14">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} /> Say hello
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">touch</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground">We're around when you need us. Pick up the phone whenever it suits you.</motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-3 pt-2">
              <CallButton size="lg" showNumber />
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email", value: "support@metrixconvo.com", href: "mailto:support@metrixconvo.com", color: "from-primary/10 to-accent/10 text-primary" },
                { icon: Phone, label: "Phone", value: CONTACT_PHONE_DISPLAY, href: `tel:${CONTACT_PHONE_TEL}`, color: "from-secondary/10 to-secondary/5 text-secondary" },
                { icon: Phone, label: "Backup line", value: CONTACT_PHONE_DISPLAY_2, href: `tel:${CONTACT_PHONE_TEL_2}`, color: "from-secondary/10 to-secondary/5 text-secondary" },
                { icon: Clock, label: "When we're around", value: "Mon\u2013Fri, 9AM\u20136PM EST", href: null, color: "from-accent/10 to-primary/10 text-accent" },
                { icon: MapPin, label: "Where we are", value: "Helping people all over the world", href: null, color: "from-primary/10 to-secondary/10 text-primary" },
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
        </div>
      </section>
    </Layout>
);

export default Contact;
