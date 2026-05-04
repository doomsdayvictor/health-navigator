import Layout from "@/components/layout/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="py-20 bg-background">
      <div className="container max-w-3xl prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-heading">
        <h1>Disclaimer</h1>
        <p><strong>Last updated:</strong> May 1, 2026</p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 not-prose mb-8">
          <p className="font-heading font-bold text-foreground text-lg mb-2">Educational Information Only</p>
          <p className="text-muted-foreground">
            MetrixConvo is a wellness &amp; health information platform. We are <strong>not a pharmacy, prescriber, or licensed medical provider</strong>. All information we provide — on this website, by phone, by email, or in any other format — is for <strong>educational purposes only</strong> and is not medical advice. Always consult a qualified, licensed healthcare professional before starting, stopping, or changing any treatment.
          </p>
        </div>

        <h2>1. General Information</h2>
        <p>
          The content available on metrixconvo.com and through any related communication is provided for informational and educational purposes only. It is not intended to be, and should not be relied upon as, a substitute for professional medical advice, diagnosis, treatment, or pharmacy services.
        </p>

        <h2>2. No Medical Advice</h2>
        <p>
          We do not diagnose conditions, recommend specific medications, prescribe, or provide treatment. Any wellness information we share is general in nature and may not apply to your individual circumstances. You should always seek the advice of your physician, pharmacist, or other qualified healthcare provider with any questions you have regarding a medical condition.
        </p>

        <h2>3. No Doctor–Patient Relationship</h2>
        <p>
          Reading our content, completing a form, calling us, or speaking with one of our wellness specialists does not create a doctor–patient or other regulated healthcare relationship. Our specialists are non-prescribing and are trained to provide only general educational guidance.
        </p>

        <h2>4. Not a Pharmacy</h2>
        <p>
          MetrixConvo does <strong>not</strong> sell, supply, dispense, ship, source, broker, or facilitate the purchase of prescription medication, controlled substances, hormone therapies, antibiotics, weight-loss injectables, anabolic agents, or any other regulated pharmaceutical product. We do not connect users with online pharmacies or suppliers.
        </p>

        <h2>5. No Guarantee of Results</h2>
        <p>
          Wellness outcomes vary from person to person. We make no guarantees regarding any specific result, benefit, or outcome from following any educational information shared through the Services.
        </p>

        <h2>6. Testimonials</h2>
        <p>
          Testimonials shared on the website reflect individual experiences and are not promises of any specific result. Some testimonials may be edited for length or clarity. They are not paid endorsements unless explicitly labelled as such.
        </p>

        <h2>7. Third-Party Content &amp; Links</h2>
        <p>
          The Services may reference or link to third-party websites, articles, or resources. Inclusion of any link does not imply endorsement, and we are not responsible for the accuracy, content, or practices of third parties.
        </p>

        <h2>8. Advertising</h2>
        <p>
          We promote our educational services through paid advertising on platforms such as Google and Meta. All advertising is intended to invite users to a free wellness conversation and is governed by our <a href="/advertising-disclosure">Advertising Disclosure</a>.
        </p>

        <h2>9. Emergencies</h2>
        <p>
          If you are experiencing a medical emergency, including thoughts of self-harm, severe pain, breathing difficulties, or any urgent symptom, <strong>call your local emergency services immediately</strong>. Do not rely on this website or any communication with us for emergency medical guidance.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, MetrixConvo, its affiliates, officers, employees, contractors, and agents disclaim all liability for any loss, injury, or damage of any kind resulting from reliance on information made available through the Services.
        </p>

        <h2>11. Updates</h2>
        <p>
          We may update this Disclaimer at any time. The “Last updated” date at the top of the page indicates when it was most recently revised.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions? Email <a href="mailto:support@metrixconvo.com">support@metrixconvo.com</a>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;