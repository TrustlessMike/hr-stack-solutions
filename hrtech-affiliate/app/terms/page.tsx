export const metadata = {
  title: 'Terms of Service | HR Tech for Small Business',
  description: 'Our terms of service.',
};

export default function Terms() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p><strong>Last Updated:</strong> March 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using HR Tech for Small Business, you accept and agree to 
            be bound by these terms.
          </p>

          <h2>Content Accuracy</h2>
          <p>
            We strive for accuracy but HR software changes frequently. Pricing, features, 
            and availability may change without notice. We update reviews quarterly but 
            cannot guarantee real-time accuracy. Always verify current details with vendors 
            directly before purchasing.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            Content on this site is for informational purposes only. We are not providing 
            legal, HR, or business advice. Consult qualified professionals for specific 
            guidance on employment law, compliance, or business decisions.
          </p>

          <h2>Affiliate Relationships</h2>
          <p>
            We participate in affiliate programs and may earn commissions from qualifying 
            purchases. See our <a href="/affiliate-disclosure" className="text-blue-600">Affiliate Disclosure</a> for details.
          </p>

          <h2>User Content</h2>
          <p>
            If you submit comments or feedback, you grant us a non-exclusive license to 
            use, display, and modify that content on the site.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from use of this site or reliance 
            on our content. This includes direct, indirect, incidental, or consequential 
            damages.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these terms periodically. Continued use after changes constitutes 
            acceptance of new terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by laws of [your jurisdiction].
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us at [your email].
          </p>
        </div>
      </div>
    </main>
  );
}
