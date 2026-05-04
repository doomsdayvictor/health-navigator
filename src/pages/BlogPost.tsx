import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getBlogPost } from "@/data/blogPosts";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Layout>
      <SEO
        title={`${post.title} | MetrixConvo`}
        description={post.excerpt || post.title}
        path={`/blog/${post.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: "MetrixConvo" },
        }}
      />
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
