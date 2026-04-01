import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { Card, CardContent } from "@/components/ui/card";
import { treatmentCategories } from "@/data/treatments";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const gradients = [
  "from-primary/10 to-accent/10 text-primary",
  "from-secondary/10 to-secondary/5 text-secondary",
  "from-accent/10 to-primary/10 text-accent",
];

const Treatments = () => (
  <Layout>
    <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
      <FloatingIcons count={8} />
      <div className="absolute top-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative z-10">
        <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} /> Explore Options
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            Treatment{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Support Options</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of treatment support categories. Each area is backed by expert guidance and personalized care.
          </motion.p>
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
  </Layout>
);

export default Treatments;
