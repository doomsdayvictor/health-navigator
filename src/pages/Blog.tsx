import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Placeholder blog posts — will be replaced with dynamic CMS from Lovable Cloud
const placeholderPosts = [
  {
    slug: "mens-vitality-tips",
    title: "5 Natural Ways to Boost Men's Vitality",
    excerpt: "Discover evidence-based strategies for improving energy, focus, and overall vitality without relying on medication alone.",
    category: "Men's Health",
    date: "2026-03-28",
    image: null,
  },
  {
    slug: "sleep-improvement-guide",
    title: "The Ultimate Guide to Better Sleep",
    excerpt: "Learn how sleep quality impacts every aspect of your health and actionable steps you can take tonight for better rest.",
    category: "Sleep & Wellness",
    date: "2026-03-25",
    image: null,
  },
  {
    slug: "hormone-balance-basics",
    title: "Understanding Hormone Balance: What You Need to Know",
    excerpt: "Hormones affect everything from mood to metabolism. Here's what you should understand about maintaining healthy hormone levels.",
    category: "Hormone Support",
    date: "2026-03-20",
    image: null,
  },
  {
    slug: "infection-awareness",
    title: "Common Infections: When to Seek Support",
    excerpt: "Knowing when to seek professional guidance for infections can make all the difference in treatment outcomes.",
    category: "Infections & Antibiotics",
    date: "2026-03-15",
    image: null,
  },
];

const categories = ["All", "Men's Health", "Hormone Support", "Sleep & Wellness", "Infections & Antibiotics", "Heart & Blood", "Diabetes"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? placeholderPosts
    : placeholderPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">Health & Wellness Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, tips, and guidance for your health journey.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <motion.div key={post.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-md hover:border-primary/30 transition-all h-full">
                    <CardContent className="p-6 space-y-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
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
                        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
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
