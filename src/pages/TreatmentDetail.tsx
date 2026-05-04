import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTreatmentBySlug } from "@/data/treatments";
import CallButton from "@/components/CallButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TreatmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? getTreatmentBySlug(slug) : undefined;

  if (!treatment) return <Navigate to="/treatments" replace />;

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-3xl">
          <Link to="/treatments" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to All Treatments
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-8">
            <div>
              <span className="text-sm font-medium text-primary">{treatment.category}</span>
              <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-2">{treatment.title}</h1>
              <p className="text-lg text-muted-foreground mt-4">{treatment.description}</p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{treatment.details}</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {treatment.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="bg-muted rounded-xl p-8 text-center space-y-4">
              <h3 className="text-xl font-heading font-bold text-foreground">Interested in {treatment.title}?</h3>
              <p className="text-muted-foreground">
                Call us for a free, confidential wellness conversation to explore your options.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <CallButton size="lg" showNumber />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TreatmentDetail;
