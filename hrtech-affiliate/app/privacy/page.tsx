export const metadata = {
  title: 'Privacy Policy | HR Tech for Small Business',
  description: 'Our privacy policy and data practices.',
};

export default function Privacy() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p><strong>Last Updated:</strong> March 2026</p>

          <h2>Information We Collect</h2>
          <p>
            We collect minimal information:
          </p>
          <ul>
            <li>Analytics data (page views, referrers, time on site) via privacy-friendly analytics</li>
            <li>Email addresses if you subscribe to our newsletter (optional)</li>
            <li>Comments if you engage with site content (optional)</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>
            - Analytics: Understand content performance and improve user experience<br/>
            - Email: Send newsletter updates (you can unsubscribe anytime)<br/>
            - Comments: Display your contribution to discussions
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use:
          </p>
          <ul>
            <li>Vercel Analytics (privacy-friendly, no cookies)</li>
            <li>Email service provider for newsletter (if applicable)</li>
            <li>Affiliate tracking links (anonymous click tracking)</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use minimal cookies:
          </p>
          <ul>
            <li>Session cookies for site functionality</li>
            <li>Analytics cookies (anonymized)</li>
            <li>Affiliate tracking cookies (set by merchant partners, not us)</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You can:
          </p>
          <ul>
            <li>Unsubscribe from email communications anytime</li>
            <li>Request deletion of your email data</li>
            <li>Browse the site without providing personal information</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Privacy questions? Contact us at [your email].
          </p>
        </div>
      </div>
    </main>
  );
}
