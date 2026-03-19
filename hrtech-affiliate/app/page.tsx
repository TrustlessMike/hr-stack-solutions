import Link from 'next/link';
import { CheckCircle, TrendingUp, Shield, Users, Clock, Heart } from 'lucide-react';

export const metadata = {
  title: 'HR Stack Solutions | Best HR Software Reviews 2026',
  description: 'Independent reviews of HR software for small businesses. Compare payroll, HRIS, benefits, PEO solutions for teams under 100 employees.',
  keywords: 'HR software small business, payroll software, HRIS, benefits administration, PEO',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HR Stack Solutions",
  "url": "https://hrstacksolutions.com",
  "description": "Independent reviews and comparisons of HR software for small businesses under 100 employees",
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stack Labs LLC",
    "url": "https://hrstacksolutions.com"
  }
};

const categories = [
  { name: 'Payroll Software', href: '/pillars/payroll-software', icon: CheckCircle, desc: 'Full-service payroll, tax filing, contractor payments' },
  { name: 'HRIS Systems', href: '/pillars/hris-systems', icon: Users, desc: 'Employee database, onboarding, HR workflows' },
  { name: 'Benefits Admin', href: '/pillars/benefits-admin', icon: Heart, desc: 'Health insurance, COBRA, FSA/HRA management' },
  { name: 'PEO & EOR', href: '/pillars/peo-eor', icon: Shield, desc: 'Outsource HR, payroll, compliance to PEOs' },
  { name: 'Time Tracking', href: '/pillars/time-tracking', icon: Clock, desc: 'Hourly timesheets, scheduling, forecasting' },
  { name: 'Employee Wellness', href: '/pillars/employee-wellness', icon: TrendingUp, desc: 'Engagement, surveys, mental health' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero - Corporate Blue + Teal gradient */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-teal-500/20 backdrop-blur px-4 py-2 rounded-full text-teal-300 text-sm font-medium mb-6">
            Trusted by 10,000+ HR professionals
          </div>
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            HR Software for<br/>
            <span className="text-teal-400">Small Business</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Independent reviews and comparisons of the best HR tech for companies with under 100 employees. 
            Find the right payroll, HRIS, and benefits solutions without enterprise complexity.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/blog/best-payroll-software-small-business-2026" className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-400 transition shadow-lg shadow-teal-500/25">
              See Top Picks
            </Link>
            <Link href="/pillars" className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition">
              Browse Categories
            </Link>
          </div>
          
          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-teal-400">50+</div>
              <div className="text-sm text-gray-400">HR tools reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">100%</div>
              <div className="text-sm text-gray-400">Unbiased analysis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">2026</div>
              <div className="text-sm text-gray-400">Latest data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group p-6 border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition">
                <cat.icon className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/best-payroll-software-small-business-2026" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-teal-600 font-medium">Payroll</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Best Payroll Software for Small Business 2026</h3>
              <p className="text-gray-600 text-sm">Compare top payroll providers for teams under 50 employees.</p>
            </Link>
            <Link href="/blog/gusto-vs-onpay-comparison" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-teal-600 font-medium">Comparison</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Gusto vs OnPay: Complete Comparison</h3>
              <p className="text-gray-600 text-sm">Head-to-head comparison of two popular payroll platforms.</p>
            </Link>
            <Link href="/blog/bamboohr-vs-gusto-hris" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-teal-600 font-medium">HRIS</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">BambooHR vs Gusto: Which HRIS Wins?</h3>
              <p className="text-gray-600 text-sm">Compare features, pricing, and ease of use.</p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-teal-600 font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">HR Stack Solutions</h4>
              <p className="text-sm">Independent HR software reviews for small business.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pillars/payroll-software" className="hover:text-white">Payroll</Link></li>
                <li><Link href="/pillars/hris-systems" className="hover:text-white">HRIS</Link></li>
                <li><Link href="/pillars/benefits-admin" className="hover:text-white">Benefits</Link></li>
                <li><Link href="/pillars/peo-eor" className="hover:text-white">PEO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Stack Labs LLC</p>
              <p className="text-sm">malik@stack-labs.net</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            © 2026 Stack Labs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
