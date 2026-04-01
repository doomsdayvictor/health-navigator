import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { treatmentCategories } from "@/data/treatments";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Treatments = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container max-w-5xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">Treatment Support Options</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of treatment support categories. Each area is backed by expert guidance and personalized care.
          </p>
        </motion.div>

        <div className="space-y-12">
          {treatmentCategories.map((cat, i) => (
            <motion.div key={cat.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <cat.icon size={24} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">{cat.title}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{cat.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {cat.treatments.map((treatment) => (
                  <Link key={treatment.slug} to={`/treatments/${treatment.slug}`}>
                    <Card className="group hover:shadow-md hover:border-primary/30 transition-all h-full">
                      <CardContent className="p-5 flex items-center justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">{treatment.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>
                        </div>
                        <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
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
