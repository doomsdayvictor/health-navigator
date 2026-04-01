import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">About MatrixMedSupport</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a medical support platform dedicated to making quality healthcare accessible, confidential, and convenient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Target, title: "Our Mission", text: "To provide accessible healthcare support globally, breaking down barriers between patients and quality medical guidance." },
            { icon: Eye, title: "Our Vision", text: "Simplifying medical access through technology, making expert health support available to everyone, everywhere." },
            { icon: Heart, title: "Our Values", text: "Privacy, trust, and patient-first care drive every decision we make as a medical support platform." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}>
              <Card className="h-full text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="font-heading text-foreground">Who We Are</h2>
          <p>
            MatrixMedSupport is a comprehensive medical support platform — not a pharmacy. We connect individuals with expert health guidance,
            treatment support options, and ongoing wellness resources. Our platform is designed to simplify the healthcare journey while
            maintaining the highest standards of privacy and professionalism.
          </p>
          <p>
            Whether you need consultation for hormone therapy, infection management, sleep optimization, or cardiovascular support,
            our team is here to guide you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
