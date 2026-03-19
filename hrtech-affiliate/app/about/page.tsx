import Link from 'next/link';

export const metadata = {
  title: 'About Us | HR Tech for Small Business',
  description: 'Learn about our mission to help small businesses find the right HR software.',
};

export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About HR Tech for Small Business</h1>
        
        <div className="prose prose-lg">
          <p>
            HR Tech for Small Business is an independent review site dedicated to helping 
            companies with under 100 employees find the right HR software. We cut through 
            enterprise marketing noise and provide honest, practical reviews for small 
            business needs.
          </p>

          <h2>Our Mission</h2>
          <p>
            Small businesses deserve HR software that fits their size and budget. Too 
            much HR software is built for enterprises and overcomplicated for teams under 
            50 employees. We exist to:
          </p>
          <ul>
            <li>Review HR tools specifically for small business use cases</li>
            <li>Compare pricing transparently (no sales demos required)</li>
            <li>Highlight features that matter at small scale</li>
            <li>Warn about enterprise bloat and hidden costs</li>
          </ul>

          <h2>How We Review</h2>
          <p>
            Every review follows the same framework:
          </p>
          <ul>
            <li><strong>Hands-on testing:</strong> We sign up, onboard, and use the actual product</li>
            <li><strong>Pricing transparency:</strong> We document real pricing, not sales quotes</li>
            <li><strong>Feature mapping:</strong> We match features to small business needs</li>
            <li><strong>Support evaluation:</strong> We test onboarding and customer support</li>
            <li><strong>Integration checking:</strong> We verify accounting/HRIS integrations</li>
          </ul>

          <h2>Our Standards</h2>
          <p>
            We maintain editorial independence. Affiliate relationships do not influence 
            our reviews. If a product is bad for small businesses, we say so — regardless 
            of commission potential.
          </p>

          <h2>Updated Regularly</h2>
          <p>
            HR software changes fast. We update our reviews quarterly to reflect:
          </p>
          <ul>
            <li>Pricing changes</li>
            <li>Feature updates</li>
            <li>Integration additions</li>
            <li>Customer feedback trends</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Questions or corrections? Reach us at [your email]. We welcome feedback from 
            HR buyers, vendors, and readers.
          </p>

          <p className="mt-8">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
