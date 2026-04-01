import Layout from "@/components/layout/Layout";

const Privacy = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container max-w-3xl prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-heading">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> April 1, 2026</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, such as when you fill out a consultation form, contact us, or subscribe to our blog. This may include your name, email address, phone number, age range, and health-related concerns.</p>

        <h2>How We Use Your Information</h2>
        <p>Your information is used to provide personalized health support, respond to inquiries, improve our services, and send relevant communications you've opted into.</p>

        <h2>Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. All data is transmitted over encrypted connections and stored securely.</p>

        <h2>Third-Party Sharing</h2>
        <p>We do not sell your personal information. We may share information with trusted service providers who assist in operating our platform, subject to strict confidentiality agreements.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us at support@matrixmedsupport.com to exercise these rights.</p>

        <h2>Contact</h2>
        <p>For privacy-related questions, email us at <a href="mailto:support@matrixmedsupport.com">support@matrixmedsupport.com</a>.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
