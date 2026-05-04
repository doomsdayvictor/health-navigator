import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FloatingIcons from "@/components/FloatingIcons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const placeholderPosts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

const categories = [
  "All",
  "Men's Health",
  "Hormone Support",
  "Sleep & Wellness",
  "Infections & Antibiotics",
  "Heart & Blood",
  "Diabetes",
  "Mind & Mood",
  "Nutrition",
];

const categoryColors: Record<string, string> = {
  "Men's Health": "bg-primary/10 text-primary",
  "Hormone Support": "bg-secondary/10 text-secondary",
  "Sleep & Wellness": "bg-accent/10 text-accent",
  "Infections & Antibiotics": "bg-primary/10 text-primary",
  "Heart & Blood": "bg-secondary/10 text-secondary",
  "Diabetes": "bg-accent/10 text-accent",
  "Mind & Mood": "bg-primary/10 text-primary",
  "Nutrition": "bg-secondary/10 text-secondary",
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? placeholderPosts
    : placeholderPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-to-b from-primary/8 to-background overflow-hidden">
        <FloatingIcons count={6} />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="container max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-center space-y-4 mb-12">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen size={16} /> Health Insights
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
              Health & Wellness{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, tips, and guidance for your health journey.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? "shadow-md shadow-primary/20" : "border-border/60"}
              >
                {cat}
              </Button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <motion.div key={post.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full">
                    <CardContent className="p-6 space-y-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                        {post.category}
                      </span>
                      <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                        </span>
                        <ArrowRight size={16} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No posts in this category yet. Check back soon!</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
