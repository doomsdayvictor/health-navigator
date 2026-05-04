import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6">
      <SEO title="Page Not Found | MetrixConvo" description="That page doesn't seem to exist anymore. Head back home and we'll get you sorted." path="/404" />
      <div className="text-center max-w-md">
        <p className="text-sm font-mono tracking-widest text-secondary mb-2">ERROR 404</p>
        <h1 className="mb-3 text-4xl font-heading font-extrabold text-foreground">We can't find that page</h1>
        <p className="mb-6 text-muted-foreground">It might have moved, or maybe the link wasn't quite right. Either way, we'll get you back on track.</p>
        <Link to="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Take me home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
