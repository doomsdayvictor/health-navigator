import Layout from "@/components/layout/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container max-w-3xl prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-heading">
        <h1>Disclaimer</h1>
        <p><strong>Last updated:</strong> April 1, 2026</p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 not-prose mb-8">
          <p className="font-heading font-bold text-foreground text-lg mb-2">Important Medical Disclaimer</p>
          <p className="text-muted-foreground">
            MatrixMedSupport does not provide medical diagnosis or prescriptions. All information presented on this website is for <strong>educational purposes only</strong>. Always consult a licensed healthcare provider before starting, stopping, or changing any treatment.
          </p>
        </div>

        <h2>General Information</h2>
        <p>The content on MatrixMedSupport.com is intended for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.</p>

        <h2>No Doctor-Patient Relationship</h2>
        <p>Use of this website does not create a doctor-patient relationship. The information provided should not be considered as medical advice for any individual case or situation.</p>

        <h2>Treatment Support</h2>
        <p>Our platform offers treatment support and guidance services. We do not prescribe, dispense, or sell medications directly. Any treatment decisions should be made in consultation with qualified healthcare professionals.</p>

        <h2>No Guarantee of Results</h2>
        <p>Individual health outcomes vary. We do not guarantee specific results from any treatment, therapy, or wellness program discussed on our platform.</p>

        <h2>External Links</h2>
        <p>Our platform may contain links to external websites. We are not responsible for the content, accuracy, or practices of third-party websites.</p>

        <h2>Emergency Situations</h2>
        <p>If you are experiencing a medical emergency, call your local emergency services immediately. Do not rely on this website for emergency medical guidance.</p>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
