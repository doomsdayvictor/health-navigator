import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const AdvertisingDisclosure = () => (
  <Layout>
    <SEO title="Advertising Disclosure | MetrixConvo" description="How advertising works on MetrixConvo and how we keep things transparent." path="/advertising-disclosure" />
    <section className="py-20 bg-background">
      <div className="container max-w-3xl prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-heading">
        <h1>Advertising Disclosure</h1>
        <p><strong>Last updated:</strong> May 1, 2026</p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 not-prose mb-8">
          <p className="font-heading font-bold text-foreground text-lg mb-2">Transparency Notice</p>
          <p className="text-muted-foreground">
            MetrixConvo is a wellness &amp; health information platform. We are <strong>not a pharmacy, prescriber, or licensed medical provider</strong>. This page explains how we advertise, how our content is funded, and how we comply with the advertising policies of platforms such as Google Ads and Meta (Facebook &amp; Instagram).
          </p>
        </div>

        <h2>1. Who We Are</h2>
        <p>
          MetrixConvo (“we”, “us”, “our”) operates an educational wellness website at metrixconvo.com. Our purpose is to help adults better understand general wellness topics and to connect them with qualified, licensed healthcare professionals when appropriate. We do not sell, supply, ship, or facilitate the purchase of any prescription medication, controlled substance, hormone therapy, antibiotic, injectable, or other regulated pharmaceutical product.
        </p>

        <h2>2. Nature of Our Advertising</h2>
        <p>
          We may run paid advertising campaigns on platforms including, but not limited to, Google Ads (Search, Display, YouTube), Meta Ads (Facebook, Instagram, Messenger), Microsoft Ads (Bing), TikTok Ads, and LinkedIn Ads. All advertising creatives — including ad copy, images, videos, landing pages, and call extensions — are designed to:
        </p>
        <ul>
          <li>Promote <strong>educational, wellness-oriented information</strong> only.</li>
          <li>Invite users to a <strong>free, no-obligation wellness conversation</strong> with a non-prescribing wellness specialist.</li>
          <li>Encourage users to consult a <strong>licensed healthcare professional</strong> for any diagnosis, prescription, or treatment decision.</li>
        </ul>
        <p>
          Our ads do not promote, reference, or imply the sale, sourcing, dosage, or delivery of prescription medication, controlled substances, hormones, weight-loss injectables, anabolic agents, antibiotics, or any other regulated drug.
        </p>

        <h2>3. Compliance With Google Ads Policies</h2>
        <p>
          We adhere to Google’s <em>Healthcare and medicines</em> advertising policies, including restrictions on prescription drugs, unapproved pharmaceuticals, and misleading health claims. Specifically:
        </p>
        <ul>
          <li>We do <strong>not</strong> advertise as an online pharmacy and are not certified as one (nor do we claim to be).</li>
          <li>We do <strong>not</strong> use restricted keywords related to the purchase of prescription drugs.</li>
          <li>We do <strong>not</strong> make therapeutic, curative, or outcome-based health claims.</li>
          <li>We clearly disclose, on every page, that our content is educational only and is not a substitute for professional medical advice.</li>
          <li>Our landing pages match the intent of our ads and contain no hidden or “bridge” pharmacy content.</li>
        </ul>

        <h2>4. Compliance With Meta (Facebook &amp; Instagram) Ads Policies</h2>
        <p>
          We follow Meta’s Advertising Standards, including the <em>Personal Health</em>, <em>Prescription Drugs</em>, and <em>Misleading Claims</em> policies. We:
        </p>
        <ul>
          <li>Do not target ads based on sensitive health conditions or imply knowledge of a user’s health status.</li>
          <li>Do not use “before/after” imagery, idealised body images, or weight-loss promises.</li>
          <li>Do not reference prescription medication by name in any ad creative or organic post.</li>
          <li>Use neutral, educational language and inclusive visuals.</li>
        </ul>

        <h2>5. Affiliate &amp; Sponsored Content</h2>
        <p>
          We may, from time to time, link to third-party educational resources, books, or wellness tools. Where any such link is sponsored or generates a referral fee, it will be clearly labelled as “Sponsored”, “Ad”, or “Affiliate link” adjacent to the link. We do not accept payment to alter our editorial recommendations and we do not promote any product that conflicts with the policies described above.
        </p>

        <h2>6. Tracking, Analytics &amp; Remarketing</h2>
        <p>
          To measure ad performance and improve our service, we may use cookies, pixels, and SDKs from advertising and analytics providers, including Google Analytics, Google Ads conversion tracking, Meta Pixel, and similar tools. These technologies may collect IP addresses, device identifiers, browser information, and pages viewed. We do <strong>not</strong> transmit special-category health data, form responses about specific conditions, or personally identifiable health information to ad platforms.
        </p>
        <p>
          You can manage tracking preferences through your browser settings, your device’s ad-tracking controls, and the opt-out tools provided by each ad network (for example, Google’s Ads Settings and Meta’s Ad Preferences). For more detail on cookies, see our <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>7. Sensitive Categories</h2>
        <p>
          We do not knowingly direct advertising to minors. All of our advertising is intended for adults (18+). We do not run ads for, or about, prescription pharmaceuticals, controlled substances, addiction recovery products, gambling, adult content, or any other category restricted by the applicable ad platform.
        </p>

        <h2>8. User-Initiated Contact</h2>
        <p>
          Any phone call, form submission, or message you initiate after viewing an advertisement is treated as a request for general wellness information, not as a request for a prescription, diagnosis, or pharmaceutical product. Our wellness specialists are trained to redirect any such request to an appropriate licensed healthcare provider.
        </p>

        <h2>9. Reporting an Ad Concern</h2>
        <p>
          If you believe an advertisement attributed to MetrixConvo violates this disclosure or any applicable advertising policy, please contact us at <a href="mailto:support@metrixconvo.com">support@metrixconvo.com</a> with the ad’s URL, screenshot, and the platform on which it appeared. We investigate every report and will take down or amend non-compliant creative promptly.
        </p>

        <h2>10. Updates to This Disclosure</h2>
        <p>
          We may update this Advertising Disclosure to reflect changes in our practices or in platform policies. Material changes will be indicated by updating the “Last updated” date at the top of this page.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about our advertising practices? Email <a href="mailto:support@metrixconvo.com">support@metrixconvo.com</a>.
        </p>

        <p className="text-xs mt-10">
          Educational information only. MetrixConvo is not a pharmacy, prescriber, or licensed medical provider and does not diagnose, treat, or supply medication. Always consult a qualified healthcare professional.
        </p>
      </div>
    </section>
  </Layout>
);

export default AdvertisingDisclosure;