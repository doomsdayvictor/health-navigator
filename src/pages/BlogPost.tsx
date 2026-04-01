import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Placeholder content — will be dynamic from Lovable Cloud
const posts: Record<string, { title: string; category: string; date: string; content: string }> = {
  "mens-vitality-tips": {
    title: "5 Natural Ways to Boost Men's Vitality",
    category: "Men's Health",
    date: "2026-03-28",
    content: `
      <p>Maintaining peak vitality doesn't always require medication. Here are five evidence-based strategies that can naturally enhance your energy, focus, and overall well-being.</p>
      
      <h2>1. Optimize Your Sleep</h2>
      <p>Quality sleep is the foundation of vitality. Aim for 7-9 hours of uninterrupted sleep each night. Create a consistent sleep schedule and optimize your bedroom environment for darkness and cool temperatures.</p>
      
      <h2>2. Exercise Strategically</h2>
      <p>Resistance training and high-intensity interval training (HIIT) have been shown to support healthy testosterone levels and boost energy. Aim for at least 3-4 sessions per week.</p>
      
      <h2>3. Manage Stress</h2>
      <p>Chronic stress elevates cortisol, which can suppress testosterone and deplete energy. Incorporate stress-management techniques like meditation, deep breathing, or time in nature.</p>
      
      <h2>4. Nutrition Matters</h2>
      <p>Focus on whole foods rich in zinc, vitamin D, and healthy fats. These nutrients are essential for hormone production and overall vitality. Consider foods like eggs, fatty fish, nuts, and leafy greens.</p>
      
      <h2>5. Stay Hydrated</h2>
      <p>Even mild dehydration can significantly impact energy levels and cognitive function. Aim for at least 8 glasses of water daily, more if you're active.</p>
      
      <p><em>Remember: These tips are for educational purposes. Always consult a licensed healthcare provider before making significant changes to your health routine.</em></p>
    `,
  },
  "sleep-improvement-guide": {
    title: "The Ultimate Guide to Better Sleep",
    category: "Sleep & Wellness",
    date: "2026-03-25",
    content: `
      <p>Sleep is one of the most powerful tools for health optimization, yet millions struggle with it nightly. Here's your comprehensive guide to better rest.</p>
      
      <h2>Why Sleep Matters</h2>
      <p>During sleep, your body repairs tissues, consolidates memories, and regulates hormones. Poor sleep is linked to increased risk of obesity, heart disease, and mental health issues.</p>
      
      <h2>Creating Your Sleep Environment</h2>
      <p>Your bedroom should be cool (65-68°F), dark, and quiet. Invest in blackout curtains, consider a white noise machine, and keep electronics out of the bedroom when possible.</p>
      
      <h2>The Power of Routine</h2>
      <p>Going to bed and waking up at the same time every day — even on weekends — helps regulate your circadian rhythm. Create a relaxing pre-bed routine that signals your body it's time to wind down.</p>
      
      <p><em>This content is for educational purposes only. Consult a healthcare provider for persistent sleep issues.</em></p>
    `,
  },
  "hormone-balance-basics": {
    title: "Understanding Hormone Balance: What You Need to Know",
    category: "Hormone Support",
    date: "2026-03-20",
    content: `
      <p>Hormones are chemical messengers that regulate virtually every process in your body. Understanding how they work is the first step toward optimal health.</p>
      
      <h2>Key Hormones to Understand</h2>
      <p>Testosterone, estrogen, thyroid hormones, cortisol, and insulin all play critical roles. An imbalance in any of these can lead to symptoms ranging from fatigue to weight gain to mood changes.</p>
      
      <h2>Signs of Hormonal Imbalance</h2>
      <p>Common signs include unexplained weight changes, fatigue, mood swings, sleep disturbances, and changes in libido. If you experience persistent symptoms, professional evaluation is recommended.</p>
      
      <p><em>This information is for educational purposes only. Always work with qualified healthcare professionals for hormone-related concerns.</em></p>
    `,
  },
  "infection-awareness": {
    title: "Common Infections: When to Seek Support",
    category: "Infections & Antibiotics",
    date: "2026-03-15",
    content: `
      <p>Understanding when an infection requires professional attention can prevent complications and ensure proper treatment.</p>
      
      <h2>When to Seek Help</h2>
      <p>While many minor infections resolve on their own, you should seek professional guidance if symptoms persist beyond a few days, worsen, or are accompanied by high fever, severe pain, or difficulty breathing.</p>
      
      <h2>Antibiotic Awareness</h2>
      <p>Antibiotics are powerful tools but should be used appropriately. Overuse contributes to antibiotic resistance, a growing global health concern. Always follow prescribed courses completely.</p>
      
      <p><em>This content is for educational purposes only. Seek immediate medical attention for severe symptoms.</em></p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Layout>
      <article className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
            <div
              className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-heading"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
