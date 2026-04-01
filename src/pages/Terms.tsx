import Layout from "@/components/layout/Layout";

const Terms = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container max-w-3xl prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-heading">
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> April 1, 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using MatrixMedSupport, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.</p>

        <h2>Services Description</h2>
        <p>MatrixMedSupport is a medical support and wellness platform. We provide health education, consultation support, and treatment guidance. We are not a pharmacy and do not sell or dispense medications directly.</p>

        <h2>User Responsibilities</h2>
        <p>You agree to provide accurate information when using our services. You must be at least 18 years old to use our platform. You are responsible for maintaining the confidentiality of your account information.</p>

        <h2>Medical Disclaimer</h2>
        <p>MatrixMedSupport does not provide medical diagnosis or prescriptions. All information is for educational purposes only. Always consult a licensed healthcare provider before making health decisions.</p>

        <h2>Limitation of Liability</h2>
        <p>MatrixMedSupport is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our platform or reliance on information provided.</p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of updated terms.</p>

        <h2>Contact</h2>
        <p>Questions about these terms? Email <a href="mailto:support@matrixmedsupport.com">support@matrixmedsupport.com</a>.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
